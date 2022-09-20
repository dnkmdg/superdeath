<template>
    <RouterView v-slot="{ Component }">
        <Transition 
            enter-active-class="duration-300 ease-out bg-inverted"
            enter-from-class="transform opacity-0 bg-inverted"
            enter-to-class="opacity-100 bg-inverted"
            leave-active-class="duration-200 ease-in bg-inverted"
            leave-from-class="opacity-100 bg-inverted"
            leave-to-class="transform opacity-0 bg-inverted"
        >
            <Component :is="Component" />
        </transition>
    </RouterView>
    <HorribleDeath v-if="deathStore.showHorribleDeath" />
</template>

<script setup>
import HorribleDeath from './components/HorribleDeath.vue'
import { useDeathStore } from './stores/death'

const deathStore = useDeathStore()
</script>