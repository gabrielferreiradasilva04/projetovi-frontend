/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'
import VueTheMask from 'vue-the-mask'

export function registerPlugins(app) {
  app
    .use(VueTheMask)
    .use(vuetify)
    .use(router)
    .use(pinia)
}
