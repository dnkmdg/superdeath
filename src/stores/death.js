import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import deaths from '../data/deaths.json'
    

export const useDeathStore = defineStore('death', {
    state: () => ({
        amount: 0,
        showHorribleDeath: false
    }),
    getters: {
        randomDeath(){
            return deaths[Math.floor(Math.random()*deaths.length)]
        }
    },
    actions: {
        doDeath(){
            this.showHorribleDeath = true
        }
    }
})
