import type { App } from 'vue'
import diretives from '@/directives/index'

const global = {
  install(app: App) {
    for (const key in diretives) {
      app.directive(key, Reflect.get(diretives, key))
    }
  },
}

export default global
