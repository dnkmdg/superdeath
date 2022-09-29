import router from '@/router'
import { defineStore } from 'pinia'    

export const useUiStore = defineStore('ui', {
    state: () => ({
        bgClass: '',
        progress: 0
    }),
    actions: {
        setProgress(level){
            this.progress = level
        },
        goToLevel(route){
            const resolvedRoute = router.resolve(route)
            
            if(this.progress+1 === resolvedRoute.meta.level){
                this.setProgress(resolvedRoute.meta.level)
                router.push(route)
            } 
        }
    }
})
