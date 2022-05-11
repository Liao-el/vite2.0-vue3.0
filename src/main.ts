import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)

app.use(router) // import router 后创建并挂载根实例。
app.mount('#app')
// createApp(App).mount('#app')
