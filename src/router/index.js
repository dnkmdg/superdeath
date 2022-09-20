import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/next',
            name: 'next',
            component: () => import('../views/NextView.vue')
        },

        {
            path: '/scene1',
            name: 'scene.1',
            component: () => import('../views/scenes/Scene1.vue')
        },
        {
            path: '/scene2',
            name: 'scene.2',
            component: () => import('../views/scenes/Scene2.vue')
        },
        {
            path: '/scene3',
            name: 'scene.3',
            component: () => import('../views/scenes/Scene3.vue')
        }
    ]
})

export default router
