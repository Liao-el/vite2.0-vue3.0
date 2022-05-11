// 路由相关
export default [
    {
        path: "/routerPage",
        name: "routerPage",
        component: () => import('../../views/routerPages/first.vue'),

        children: [
            {
                path: '', // 提供一个空的嵌套路径，会默认渲染
                meta: { transition: 'slide-left' },
                component: import('../../views/routerPages/second.vue'),
            },
            {
                path: 'routerThird',
                // 路由元信息——eg：用户权限 
                meta: { requiresAuth: true, transition: 'slide-right' },
                component: import('../../views/routerPages/third.vue'),
            },
            // 用户无权限则跳转
            {
                path: 'routerForth',
                name: 'routerForth',
                component: import('../../views/routerPages/forth.vue'),
            },
        ],
    },
]