export default [
    {
        path: "/comparePage",
        name: "comparePage",
        redirect: '/comparePage/watch',
        component: () => import('../../views/comparePages/index.vue'),
        children: [
            {
                path: "watch",
                name: "watch",
                component: () => import('../../views/comparePages/watch.vue'),
            },
            {
                path: "computed",
                name: "computed",
                component: () => import('../../views/comparePages/computed.vue'),
            },
            {
                path: "fatherChildren",
                name: "fatherChildren",
                component: () => import('../../views/comparePages/father.vue'),
            },
            {
                path: "template",
                name: "template",
                component: () => import('../../views/comparePages/template.vue'),
            },
            {
                path: "teleport",
                name: "teleport",
                component: () => import('../../views/comparePages/teleport.vue'),
            },

        ]
    },
]