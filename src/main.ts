import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import router from './router/index'
app.use(router) // import router 后创建并挂载根实例。

// 2、将 store 安装到 Vue 应用时传入定义好的 injection key
// import { store, key } from './store/index'
// app.use(store, key)// 传入 injection key
// import { store } from './store/index'
// app.use(store)

// 使用pinia
import { createPinia } from 'pinia'
app.use(createPinia())

app.mount('#app')
// createApp(App).mount('#app')
