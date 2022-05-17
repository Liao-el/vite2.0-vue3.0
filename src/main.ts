import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import router from './router/index'
app.use(router) // import router 后创建并挂载根实例。

// 2、将 store 安装到 Vue 应用时传入定义好的 injection key
// import { store, key } from './store/indexs'
// import { store } from './store'
// app.use(store, key)// 传入 injection key
// app.use(store)// 传入 injection key

app.mount('#app')
// createApp(App).mount('#app')
