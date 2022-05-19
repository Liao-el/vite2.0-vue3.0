<script setup lang="ts">
// import { watch } from 'vue'
// import { useRouter, useRoute } from 'vue-router'
// const route = useRoute()  // 返回当前路由地址。相当于在模板中使用 $route。必须在 setup() 中调用。

// watch(
//   () => route.path,
//   (val, preVal) => {
//     if (!val.includes('/routerPage')) {
//       //val为修改后的值,preVal为修改前的值
//       console.log("watch数据====", 'val为修改后的值:', val, 'preVal为修改前的值:', preVal)
//     }
//   },
//   {
//     //如果加了这个参数，值为true的话，就消除了惰性，watch会在创建后立即执行一次
//     //那么首次执行，val为默认值,preVal为undefined
//     immediate: true,
//     //这个参数代表监听对象时，可以监听深度嵌套的对象属性
//     //比如message是一个对象的话，可以监听到message.a.b.c，也就是message下的所有属性
//     deep: true,
//   }
// )
</script>

<template>
  <div>
    
    <ul>
      <img alt="Vue logo" src="./assets/logo.png" />
      <li>
        <router-link to="/home">home</router-link>
      </li>
      <li>
        <router-link to="/hello">hello</router-link>
      </li>
      <li>
        <router-link to="/routerPage">路由配置</router-link>
      </li>
      <li>
        <router-link to="/storePage">vuex配置</router-link>
      </li>
      <li>
        <router-link to="/pluginPage">pluginPage配置</router-link>
      </li>
      <li>
        <router-link to="/comparePage">2.x和3.x比较</router-link>
      </li>
    </ul>

    <router-view></router-view>

  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.router-link-active {
  color: orange;
}

.router-link-exact-active {
  color: crimson;
}
</style>

<style>
img {
  width: 50px;

}

ul {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

li:not(:last-of-type) {
  margin-right: 1rem;
}
</style>