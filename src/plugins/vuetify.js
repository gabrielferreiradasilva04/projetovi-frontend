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
          primary: colors.lightBlue.darken3, // #E53935
          secondary: colors.shades.white, // #FFCDD2
        }
      },
      dark: {
        light: false,
        colors: {
          primary: colors.blue.darken4, // #E53935
          secondary: colors.shades.white, // #FFCDD2
        }
      }
    },
  },
})