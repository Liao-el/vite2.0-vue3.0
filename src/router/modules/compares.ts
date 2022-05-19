export default [
    {
        path: "/comparePage",
        name: "comparePage",
        component: () => import('../../views/comparePages/index.vue'),
        children: [
            {
                path: "",
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

        ]
    },
]