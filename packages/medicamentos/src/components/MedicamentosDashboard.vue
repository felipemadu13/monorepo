<template>
  <div class="medicamentos-simple-dashboard pa-4">
    <h2 class="text-h4 mb-4 text-indigo-darken-3 font-weight-bold">
      Controle de Medicamentos
    </h2>
    <p class="text-subtitle-1 text-grey-darken-1 mb-6">
      Gerenciamento do estoque de farmácia e medicamentos de uso controlado.
    </p>

    <UiTable :headers="headers" v-model:search="searchQuery">
      <template #title>
        Estoque de Medicamentos
      </template>
      <template #rows>
        <tr v-for="med in filteredMedicines" :key="med.name">
          <td class="font-weight-medium">{{ med.name }}</td>
          <td>{{ med.active }}</td>
          <td>{{ med.stock }} un</td>
          <td>
            <v-chip :color="med.statusColor" size="small" variant="flat" class="font-weight-bold text-white">
              {{ med.status }}
            </v-chip>
          </td>
        </tr>
        <tr v-if="filteredMedicines.length === 0">
          <td colspan="4" class="text-center text-grey py-4">
            Nenhum medicamento encontrado para a busca "{{ searchQuery }}"
          </td>
        </tr>
      </template>
    </UiTable>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { UiTable } from '@monorepo/ui'

const headers = ['Medicamento', 'Princípio Ativo', 'Estoque', 'Classificação']

const searchQuery = ref('')

const medicines = ref([
  { name: 'Paracetamol 500mg', active: 'Paracetamol', stock: 150, status: 'Livre', statusColor: 'success' },
  { name: 'Amoxicilina 500mg', active: 'Amoxicilina', stock: 45, status: 'Receita Requerida', statusColor: 'warning' },
  { name: 'Rivotril 2mg', active: 'Clonazepam', stock: 12, status: 'Controle Especial', statusColor: 'error' }
])

const filteredMedicines = computed(() => {
  if (!searchQuery.value) return medicines.value
  const query = searchQuery.value.toLowerCase()
  return medicines.value.filter(med =>
    med.name.toLowerCase().includes(query) ||
    med.active.toLowerCase().includes(query) ||
    med.status.toLowerCase().includes(query)
  )
})
</script>
