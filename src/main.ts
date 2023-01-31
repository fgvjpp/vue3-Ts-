import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import 'normalize.css'
import XtxUI from './components/XtxUI'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import global from './global'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(global)
app.use(XtxUI)
app.use(pinia)
app.use(router)
app.mount('#app')
