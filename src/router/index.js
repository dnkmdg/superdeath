import { createRouter, createWebHistory } from 'vue-router'
import { useUiStore } from '../stores/ui'
import { useDeathStore } from '../stores/death'
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
            component: () => import('../views/NextView.vue'),
            meta: {
                level: 0
            }
        },

        {
            path: '/scene1',
            name: 'scene.1',
            component: () => import('../views/scenes/Scene1.vue'),
            meta: {
                level: 1
            }
        },
        {
            path: '/scene2',
            name: 'scene.2',
            component: () => import('../views/scenes/Scene2.vue'),
            meta: {
                level: 2
            }
        },
        {
            path: '/scene3',
            name: 'scene.3',
            component: () => import('../views/scenes/Scene3.vue'),
            meta: {
                level: 3
            }
        },
        {
            path: '/scene4',
            name: 'scene.4',
            component: () => import('../views/scenes/Scene4.vue'),
            meta: {
                level: 4
            }
        },
        {
            path: '/scene5',
            name: 'scene.5',
            component: () => import('../views/scenes/Scene5.vue'),
            meta: {
                level: 5
            }
        },
        {
            path: '/scene6',
            name: 'scene.6',
            component: () => import('../views/scenes/Scene6.vue'),
            meta: {
                level: 6
            }
        },
        {
            path: '/scene7',
            name: 'scene.7',
            component: () => import('../views/scenes/Scene7.vue'),
            meta: {
                level: 7
            }
        },
        {
            path: '/scene8',
            name: 'scene.8',
            component: () => import('../views/scenes/Scene8.vue'),
            meta: {
                level: 8
            }
        }
    ]
})

router.beforeEach(async (to, from) => {
    const uiStore = useUiStore()
    const deathStore = useDeathStore()

    if(import.meta.env.DEV){
        return true
    }

    if(to.meta.level && to.meta.level !== uiStore.progress){
        deathStore.doDeath()

        return false
    }
})

export default router
