/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.purple.darken4,
          secondary: colors.purple.darken3,
          error: colors.red.darken2,
          warning: colors.orange.lighten1,
          success: colors.lightGreen.lighten1
        }
      },
      dark: {
        light: false,
        colors: {
          primary: colors.deepPurple.darken4,
          secondary: '#3E5C76',
          error: colors.red.darken2,
          warning: colors.orange.lighten1,
          success: colors.lightGreen.lighten1
        }
      }
    },
  },
})