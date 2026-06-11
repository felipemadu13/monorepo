<template>
  <div class="documentos-simple-dashboard pa-4">
    <h2 class="text-h4 mb-4 text-indigo-darken-3 font-weight-bold">
      Gestão de Documentos
    </h2>
    <p class="text-subtitle-1 text-grey-darken-1 mb-6">
      Gerenciamento, armazenamento e controle de documentos internos.
    </p>

    <UiTable :headers="headers" v-model:search="searchQuery">
      <template #title>
        Documentos Arquivados
      </template>
      <template #rows>
        <tr v-for="doc in filteredDocs" :key="doc.title">
          <td class="font-weight-medium">{{ doc.title }}</td>
          <td>{{ doc.type }}</td>
          <td>{{ doc.author }}</td>
          <td>
            <v-chip :color="doc.statusColor" size="small" variant="flat" class="font-weight-bold">
              {{ doc.status }}
            </v-chip>
          </td>
        </tr>
        <tr v-if="filteredDocs.length === 0">
          <td colspan="4" class="text-center text-grey py-4">
            Nenhum documento encontrado para a busca "{{ searchQuery }}"
          </td>
        </tr>
      </template>
    </UiTable>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { UiTable } from '@monorepo/ui'

const headers = ['Título do Documento', 'Tipo', 'Autor', 'Status']

const searchQuery = ref('')

const documents = ref([
  { title: 'Contrato de Prestação de Serviços', type: 'PDF', author: 'Jurídico', status: 'Assinado', statusColor: 'success' },
  { title: 'Manual de Onboarding do Colaborador', type: 'DOCX', author: 'Recursos Humanos', status: 'Rascunho', statusColor: 'warning' },
  { title: 'Política de Segurança da Informação', type: 'PDF', author: 'TI/Segurança', status: 'Revisado', statusColor: 'info' }
])

const filteredDocs = computed(() => {
  if (!searchQuery.value) return documents.value
  const query = searchQuery.value.toLowerCase()
  return documents.value.filter(doc =>
    doc.title.toLowerCase().includes(query) ||
    doc.type.toLowerCase().includes(query) ||
    doc.author.toLowerCase().includes(query) ||
    doc.status.toLowerCase().includes(query)
  )
})
</script>
