import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createMonorepoUi } from '@monorepo/ui'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createMonorepoUi())

app.mount('#app')
