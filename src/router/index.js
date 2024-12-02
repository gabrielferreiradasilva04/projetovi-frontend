
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'
import NotFound from '@/pages/notFound.vue';
import { useAuthStore } from '@/stores/authStore';


const customRoutes = routes.map(route => {
  if (route.path === '/login') {
    return {
      ...route,
      meta: { layout: 'auth' }
    }
  }
  if (route.path === '/register') {
    return {
      ...route,
      meta: { layout: 'auth' }
    }
  }
  if (route.path === '/chooseStock') {
    return {
      ...route,
      meta: {
        layout: 'chooseStock',
        requiresAuth: false
      }
    }
  }
  if (route.path === '/loadingStocks') {
    return {
      ...route,
      meta: {
        layout: 'loading',
        requiresAuth: false
      }
    }
  }
  if (route.path === '/loadingHome') {
    return {
      ...route,
      meta: {
        layout: 'loading',
        requiresAuth: false
      }
    }
  }
  return {
    ...route,
    meta: {
      ...route.meta,
      requiresAuth: true // Protege todas as outras rotas
    }
  }

});


customRoutes.push({
  path: '/:catchAll(.*)',
  name: 'notFound',
  component: NotFound,
  meta: {
    layout: "notFoundAndAnauthorized"
  }
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(customRoutes),
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
