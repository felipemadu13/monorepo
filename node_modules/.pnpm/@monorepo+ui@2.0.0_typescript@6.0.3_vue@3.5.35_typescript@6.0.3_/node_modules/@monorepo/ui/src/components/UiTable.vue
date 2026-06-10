<template>
  <v-card class="mx-auto my-4" elevation="3" rounded="lg">
    <v-card-title class="bg-indigo-darken-2 text-white py-3 px-4 d-flex align-center justify-space-between flex-wrap gap-2">
      <span class="text-h6 font-weight-bold">
        <slot name="title">Tabela de Dados</slot>
      </span>
      <v-chip color="indigo-lighten-4" size="small" variant="flat" class="text-indigo-darken-4 font-weight-bold">
        Biblioteca UI v2.0.0 (Filtro Ativo)
      </v-chip>
    </v-card-title>

    <!-- Search Input - Exclusivo da v2.0.0 -->
    <div class="px-4 py-2 bg-grey-lighten-5 border-b">
      <v-text-field
        v-model="searchQuery"
        density="compact"
        label="Buscar nesta tabela..."
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
        clearable
        color="indigo"
        @update:model-value="emitSearch"
      ></v-text-field>
    </div>
    
    <v-table hover class="border-t">
      <thead>
        <tr class="bg-grey-lighten-4">
          <th v-for="header in headers" :key="header" class="text-left font-weight-bold text-subtitle-2 text-grey-darken-2">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <slot name="rows">
          <tr>
            <td :colspan="headers.length" class="text-center text-grey py-4">
              Nenhum dado disponível
            </td>
          </tr>
        </slot>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  headers: string[]
  search?: string
}>()

const emit = defineEmits<{
  (e: 'update:search', val: string): void
}>()

const searchQuery = ref(props.search || '')

watch(() => props.search, (newVal) => {
  searchQuery.value = newVal || ''
})

const emitSearch = (val: string | null) => {
  emit('update:search', val || '')
}
</script>

<style scoped>
.v-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.v-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(99, 102, 241, 0.1) !important;
}
</style>
