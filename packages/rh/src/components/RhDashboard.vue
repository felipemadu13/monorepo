<template>
  <div class="rh-simple-dashboard pa-4">
    <h2 class="text-h4 mb-4 text-indigo-darken-3 font-weight-bold">
      Recursos Humanos (UI v2.0.0)
    </h2>
    <p class="text-subtitle-1 text-grey-darken-1 mb-6">
      Exibindo dados filtrados usando a funcionalidade de busca da versão <strong>2.0.0</strong> de <strong>@monorepo/ui</strong>.
    </p>

    <UiTable :headers="headers" v-model:search="searchQuery">
      <template #title>
        Colaboradores Ativos
      </template>
      <template #rows>
        <tr v-for="emp in filteredEmployees" :key="emp.name">
          <td class="font-weight-medium">{{ emp.name }}</td>
          <td>{{ emp.role }}</td>
          <td>{{ emp.department }}</td>
          <td>
            <v-chip color="success" size="small" variant="flat" class="font-weight-bold">
              {{ emp.status }}
            </v-chip>
          </td>
        </tr>
        <tr v-if="filteredEmployees.length === 0">
          <td colspan="4" class="text-center text-grey py-4">
            Nenhum colaborador encontrado para a busca "{{ searchQuery }}"
          </td>
        </tr>
      </template>
    </UiTable>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { UiTable } from '@monorepo/ui'

const headers = ['Nome', 'Cargo', 'Departamento', 'Status']

const searchQuery = ref('')

const employees = ref([
  { name: 'Ana Souza', role: 'Tech Lead', department: 'Tecnologia', status: 'Ativo' },
  { name: 'Bruno Ramos', role: 'UX Designer', department: 'Tecnologia', status: 'Ativo' },
  { name: 'Carla Dias', role: 'Gerente Geral', department: 'RH', status: 'Ativo' }
])

const filteredEmployees = computed(() => {
  if (!searchQuery.value) return employees.value
  const query = searchQuery.value.toLowerCase()
  return employees.value.filter(emp => 
    emp.name.toLowerCase().includes(query) ||
    emp.role.toLowerCase().includes(query) ||
    emp.department.toLowerCase().includes(query)
  )
})
</script>
