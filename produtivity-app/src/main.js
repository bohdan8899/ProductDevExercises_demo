import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import AppTodo from './components/AppTodo.vue'
import AppCalculator from './components/AppCalculator.vue'
import AppCounter from './components/AppCounter.vue'
import store from './store'

const routes = [
  { path: '/', component: AppTodo },
  { path: '/calculator', component: AppCalculator },
  { path: '/counter', component: AppCounter },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App);
app.use(router)
app.use(store)
app.mount('#app')
