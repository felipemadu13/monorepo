import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export { default as UiTable } from './components/UiTable.vue'

export const createMonorepoUi = () => {
  return createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#3f51b5',
            secondary: '#00ccff',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        },
      },
    },
  })
}
