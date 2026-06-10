<template>
  <div class="suporte-simple-dashboard pa-4">
    <h2 class="text-h4 mb-4 text-indigo-darken-3 font-weight-bold">
      Suporte Técnico
    </h2>
    <p class="text-subtitle-1 text-grey-darken-1 mb-6">
      Exibindo dados a partir do componente de tabela herdado do pacote <strong>@monorepo/ui</strong>.
    </p>

    <UiTable :headers="headers">
      <template #title>
        Chamados Ativos
      </template>
      <template #rows>
        <tr v-for="ticket in tickets" :key="ticket.id">
          <td class="font-weight-medium">#{{ ticket.id }}</td>
          <td>{{ ticket.title }}</td>
          <td>
            <v-chip :color="ticket.priorityColor" size="small" variant="flat" class="font-weight-bold text-white">
              {{ ticket.priority }}
            </v-chip>
          </td>
          <td>
            <v-chip color="info" size="small" variant="outlined" class="font-weight-bold">
              {{ ticket.status }}
            </v-chip>
          </td>
        </tr>
      </template>
    </UiTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UiTable } from '@monorepo/ui'

const headers = ['ID', 'Título', 'Prioridade', 'Status']

const tickets = ref([
  { id: 1042, title: 'Falha no acesso ao ERP', priority: 'Alta', priorityColor: 'error', status: 'Aberto' },
  { id: 1041, title: 'Configuração de VPN', priority: 'Média', priorityColor: 'warning', status: 'Em Andamento' },
  { id: 1040, title: 'Instalação de Figma Enterprise', priority: 'Baixa', priorityColor: 'secondary', status: 'Fechado' }
])
</script>
