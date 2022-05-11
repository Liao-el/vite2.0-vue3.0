import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

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


    plugins: [vue()],
    server: {
      host: "0.0.0.0" // 解决  Network: use --host to expose
      // 或者修改package.json里   "dev": "vite --host 0.0.0.0"
      // port: 4000, //启动端口
    },
  })
