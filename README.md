# vue 的个人学习小笔记
[个人公众号文章地址](https://mp.weixin.qq.com/s?__biz=Mzk0MjMwNDMyMg==&amp;mid=2247483674&amp;idx=1&amp;sn=87b001d2ee2660c66c49e4d6bc3d9901&amp;chksm=c2c47c37f5b3f521fa793acccf90c2a29d1b6d3b030ad3cbde0771ca8e54b93ddd79a27c3948&token=1482337969&lang=zh_CN#rd)

[个人博客园文章地址](https://www.cnblogs.com/elevens/p/16313815.html)
### 一、vite2.0+vue3.0+ts 创建、配置

#### 1、Vite 创建 vue3 项目：

##### 1.1、npm 常用命令

> 1、npm 查看版本号
>
> > npm view 包 version —— 查看最新版本号
> > npm view 包 version ——查看所有版本号
>
> 2、npm 下载指定版本号
>
> > npm install --save-dev 包@版本号
> > npm install 包@版本号

![](/readImg/npmVsYarn.jpg)

##### 1.2、vite1.0：
`yarn create vite-app <project name>`

##### 1.3、vite2.0：
    (需要 node 版本>12.0.0)创建项目：vscode 要安装 volar 插件(禁用 vue2.0 的插件 vetur，会冲突)

1、常用命令：
`npm init vite@latest`
![](/readImg/vite@latest_1.jpg)
`npm init @vitejs/app 项目名`
`yarn create @vitejs/app 项目名`
2、快速新建：`npm init @vitejs/app 项目名 --template vue-ts`

![](/readImg/fast_0.jpg)
>1、
![](/readImg/fast_1.jpg)
2、
![](/readImg/fast_2.jpg)
3、
![](/readImg/fast_3.jpg)
4、yarn 安装依赖，启动服务

    问题：
        1、webpack编译慢（修改一点东西都会把全部文件重新编译）
        2、如果想用vue2，则使用vite-plugin-vue2插件



#### 2、基于ts的项目基础配置
##### 2.1、配置 ts 识别vue文件,在项目根目录添加shim.d.ts文件:
    declare module "*.vue" {
        import { Component } from "vue";
        const component: Component;
        export default component;
    }

文件中即可使用ts语法糖：`<script setup lang="ts"></script>`


##### 2.2、配置router路由
    1、yarn add vue-router@next
    2、在项目src目录下面新建router目录，然后添加index.ts文件
        ⚠️：一定要使用解构导出方法，按照官方文档的会报错
    3、将router引入到main.ts中,修改main.ts文件

##### 2.3、配置状态管理：vuex / pinia
    1、yarn add vuex@next
    2、在项目src目录下面新建store目录，并添加index.ts文件
    插件：vuex-persistedstate

##### 2.4、配置axios
    1、yarn add axios / npm install --save axios vue-axios
    2、在项目src目录下面新建utils/http目录，并添加axios.ts文件

##### 2.5、配置less
    1、yarn add less less-loader --dev（建议安装在本地依赖，没必要装全局环境）
    2、文件中使用：<style lang="less" scoped></style>


##### 2.6、配置path模块【import {resolve} from "path"】
    1、安装依赖：yarn add @types/node --dev
    2、vite.config.ts文件中配置：
        resolve: {
            alias: {
                 "@": resolve(__dirname, "src"),
                 },

            },



### 二、vue常用知识点
#### 1、v-if 和 v-for 的优先级
    2.x ：v-for > v-if
    3.x ：v-for < v-if

#### 2、v-for 中的 Ref 数组
    2.x ：自动把ref填充内容
    3.x ：需要通过 :ref="方法名" 手动添加

#### 3、$children 
    2.x ：访问当前实例的子组件
    3.x ：$children 被移除，通过ref来访问子组件

#### 4、setup组合API
    数据响应区别：
        2.x ：Object.defineProperty
            1、不能监听数组的变化
            2、必须遍历对象的每一个属性

        3.x ：Proxy——不需要遍历
            （相当于2.x中的data）
            1、 ref——简单类型（需要data.value操作数据）
            2、reactive——复杂类型


    setup语法糖插件：unplugin-auto-import
        yarn add unplugin-auto-import -D
        文档地址
        无需引入api（eg：import {ref……} from 'vue'）


#### 5、toRefs是vue3.x的数据解构，用es6解构会消除proxy的数据响应
#### 6、watch:{}
    vue2.x
        方法1——改变了才会监听: 监听的值( newVal , oldVal ){}
        方法2——配置监听：
            监听的值:{
                handler( newVal , oldVal ){},
                immediate:true, // 是否获取初始化的值
                deep:true, // 深度监听——对象这类复杂类型的值
                }



    vue3.x —— 立即监听也可以用watchEffect（相当于： immediate:true）
        1、单个监听：
            watch(监听的值, (newVal, oldVal) => { console.log(newVal, oldVal); }, { immediate:true,} )

        2、多个监听：
            watch([val1  , val2,...], (newVal, oldVal) => { console.log(newVal, oldVal); }, });

        3、监听对象的key值：
            watch(()=>obj.key, (newVal, oldVal) => { console.log(newVal, oldVal); })



#### 7、computed
#### 8、父子组件
    vue2.x
        父传子：props
        子传父：$emit
        兄弟：eventBus……

    vue3.x
        父传子：defineProps
        子传父：defineEmits
        兄弟：mitt（emit、on）


#### 9、插槽（父template、子slot）
    1、匿名插槽：会把slot内容都无脑展示出来
    2、具名插槽：通过name来进行判断哪些内容展示，哪些不展示
    3、作用域插槽：可以父子之间传递数据
    4、动态插槽：template可以用变量控制name的具名插槽

#### 10、teleport传送——可以自己选择传送到某个标签下【不容易受到定位的影响】
#### 11、动态组件：
    <component :is="变量"></component>
    markRow(组件名)——可以绕过proxy

#### 12、异步组件（提升性能）
    1、懒加载：组件按需引入（看到组件才加载）
        官方：defineAsyncComponent
        插件：vueuse

    2、axios返回的数据：
        <Suspense>
            <template #default>异步加载的组件</template>
            <template #fallback>加载中</template>
            </Suspense>


    3、打包会被分包处理：异步组件有单独的js文件，是从主体js文件分包出来的

#### 13、Mixin：混入——复用功能
#### 14、Provide / Inject ——依赖注入——可以忽略父子/父孙的多层级来传递数据
    Provide（提供）—— provide('名',data)
    Inject（接收）——const num=inject('名')


