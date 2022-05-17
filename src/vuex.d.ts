// 类型声明文件
import { ComponentCustomProperties } from 'vue' // 给vue里面添加一个自定义属性，eg:vue里this属性不报错
import { Store } from 'vuex'
import { State } from "./store"
// 模块拓展
declare module '@vue/runtime-core' {
  // 声明自己的 store state
  // interface State {
  //   count: number
  // }

  // 为 `this.$store` 提供类型声明  强类型支持的拓展
  interface ComponentCustomProperties {
    $store: Store<State> // Store是泛型，State是根状态（强类型）
  }
}