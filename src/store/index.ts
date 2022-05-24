// // 1，使用 Vue 的 InjectionKey 接口和自己的 store 类型定义来定义 key
// import { InjectionKey } from 'vue'
// import { createStore, Store } from 'vuex'


// // 为 store state 声明类型
// export interface State {
//   count: number
// }

// // 定义 injection key
// export const key: InjectionKey<Store<State>> = Symbol()

// export const store = createStore<State>({
//   state: {
//     count: 11
//   }
// })

// ==================== 简化
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 1
  }
})

// // 定义自己的 `useStore` 组合式函数
// export function useStore () {
//   return baseUseStore(key)
// }

// import { createStore } from "vuex";
// export type Store = {
//   count:number
// }

// createStore({
//   state: {
//     count:1,
//   }
// })