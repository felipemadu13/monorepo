<script setup lang="ts">
import { RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <v-app>
    <v-main>
      <div class="d-flex flex-row fill-height">
        <!-- Sidebar Navigation -->
        <header class="pa-6 border-e bg-" style="width: 280px; min-height: 100vh; flex-shrink: 0; box-shadow: 2px 0 8px rgba(0,0,0,0.05);">
          <div class="text-center mb-6">
            <img alt="Vue logo" class="logo mx-auto mb-4" src="@/assets/logo.svg" width="64" height="64" />
            <HelloWorld msg="Monorepo Hub" />
          </div>

          <v-list nav density="compact" color="primary">
            <v-list-item to="/rh" prepend-icon="mdi-account-group" title="RH"></v-list-item>
            <v-list-item to="/suporte" prepend-icon="mdi-help-circle" title="Suporte"></v-list-item>
          </v-list>
        </header>

        <!-- Main Content Area -->
        <div class="flex-grow-1 bg-grey-lighten-4 pa-6" style="width: max-content">
          <RouterView />
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<style>
/* Remove default margin/padding and scrollbars at body level if any */
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
