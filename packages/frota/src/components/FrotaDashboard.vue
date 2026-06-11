<template>
  <div class="frota-simple-dashboard pa-4">
    <h2 class="text-h4 mb-4 text-indigo-darken-3 font-weight-bold">
      Controle de Frota
    </h2>
    <p class="text-subtitle-1 text-grey-darken-1 mb-6">
      Gerenciamento e monitoramento de veículos ativos da empresa.
    </p>

    <UiTable :headers="headers" v-model:search="searchQuery">
      <template #title>
        Veículos Cadastrados
      </template>
      <template #rows>
        <tr v-for="vehicle in filteredVehicles" :key="vehicle.plate">
          <td class="font-weight-medium">{{ vehicle.model }}</td>
          <td>{{ vehicle.plate }}</td>
          <td>{{ vehicle.driver }}</td>
          <td>
            <v-chip :color="vehicle.statusColor" size="small" variant="flat" class="font-weight-bold">
              {{ vehicle.status }}
            </v-chip>
          </td>
        </tr>
        <tr v-if="filteredVehicles.length === 0">
          <td colspan="4" class="text-center text-grey py-4">
            Nenhum veículo encontrado para a busca "{{ searchQuery }}"
          </td>
        </tr>
      </template>
    </UiTable>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { UiTable } from '@monorepo/ui'

const headers = ['Modelo', 'Placa', 'Motorista', 'Status']

const searchQuery = ref('')

const vehicles = ref([
  { model: 'Chevrolet Onix', plate: 'ABC-1234', driver: 'Carlos Lima', status: 'Disponível', statusColor: 'success' },
  { model: 'Fiat Toro', plate: 'XYZ-5678', driver: 'Mariana Costa', status: 'Em Rota', statusColor: 'warning' },
  { model: 'Ford Ka', plate: 'KPT-9988', driver: 'João Silva', status: 'Manutenção', statusColor: 'error' }
])

const filteredVehicles = computed(() => {
  if (!searchQuery.value) return vehicles.value
  const query = searchQuery.value.toLowerCase()
  return vehicles.value.filter(v =>
    v.model.toLowerCase().includes(query) ||
    v.plate.toLowerCase().includes(query) ||
    v.driver.toLowerCase().includes(query) ||
    v.status.toLowerCase().includes(query)
  )
})
</script>
