<template>
    <div
        class="fixed inset-0 flex flex-col items-center justify-center cursor-pointer backdrop-grayscale backdrop-blur backdrop-invert "
        @click="resetAndRestart()"
    >
        <Logo />
        <p
            class="w-1/2 mx-auto mt-16 text-2xl text-center text-black font-general"
            v-html="randomDeath.description"
        />    
        <p class="mt-3 bg-black">
            Dödsruna skriven av: <strong>{{ randomDeath.author }}</strong>
        </p>
    </div>
</template>

<script setup>
import { useDeathStore } from '../stores/death'
import { useUiStore } from '@/stores/ui'
import { useRouter } from 'vue-router'
import Logo from './Logo.vue'

const deathStore = useDeathStore()
const uiStore = useUiStore()
const router = useRouter()

const randomDeath = deathStore.randomDeath()

uiStore.bgClass = ''

function resetAndRestart(){
    deathStore.showHorribleDeath = false
    router.push({ name: 'home' })
}
</script>
