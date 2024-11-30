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
import { pt } from 'vuetify/locale'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  locale: {
    locale: 'pt',
    messages: {
      pt: {
        ...pt,
        $vuetify: {
          dataIterator: {
            rowsPerPageText: 'Itens por Página',

          },
          dataFooter: {
            itemsPerPageText: 'Itens por Página',
            pageText: ''
          }
        }
      }
    }
  },
  date: {
    locale: {
      pt: 'pt-BR'
    }
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.deepPurple.darken1,
          secondary: colors.grey.lighten5,
          error: colors.red.darken2,
          warning: colors.orange.lighten1,
          success: colors.lightGreen.lighten1
        }
      },
      dark: {
        light: false,
        colors: {
          primary: colors.indigo.darken4,
          secondary: colors.grey.lighten5,
          error: colors.red.darken2,
          warning: colors.orange.lighten1,
          success: colors.lightGreen.lighten1
        }
      }
    },
  },
})