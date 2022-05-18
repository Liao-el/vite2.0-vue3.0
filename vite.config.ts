import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

// 引入 自动化引入插件
import AutoImport from "unplugin-auto-import/vite"

// https://vitejs.dev/config/
export default defineConfig(
  {
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        //      "comps": resolve(__dirname,"src/components"),
        //      "apis": resolve(__dirname,"src/apis"),
        //      "views": resolve(__dirname,"src/views"),
        //      "utils": resolve(__dirname,"src/utils"),
        //      "routes": resolve(__dirname,"src/routes"),
        //      "styles": resolve(__dirname,"src/styles"),
      },
    },

    // 配置插件
    plugins: [vue(), AutoImport({
      imports: ['vue','vue-router'], // 自动导入
      // dts: 'src/auto-import.d.ts' // 全局声明
    })],
    server: {
      host: "0.0.0.0" // 解决  Network: use --host to expose
      // 或者修改package.json里   "dev": "vite --host 0.0.0.0"
      // port: 4000, //启动端口
    },
  })
