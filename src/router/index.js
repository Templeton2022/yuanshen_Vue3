import { createRouter, createWebHashHistory } from "vue-router"
import AppIndex from "@/pages/AppIndex";

const routes = [
    {
        path: '/',
        component: AppIndex,
        redirect: '/home',
        children: [
            {
                path: '/home',
                component:() =>import("@/components/AppIndexHome")
            },
            {
                path: '/role',
                component:() =>import("@/components/AppIndexRole")
            },
            {
                path: '/arms',
                component:() =>import("@/components/AppIndexArms")
            },
            {
                path: '/talent',
                component:() =>import("@/components/AppIndexTalent")
            },
        ]
    }
]
export const router = createRouter({
    // history: createWebHistory("/yuanshen"),
    history: createWebHashHistory(),
    routes: routes,

})

export default router
