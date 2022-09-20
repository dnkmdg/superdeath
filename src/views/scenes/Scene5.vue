<template>
    <main class="flex flex-col items-center justify-center w-screen h-screen">
        <TransitionGroup name="fade">
            <div
                v-if="view === 1"
                class="flex flex-col w-1/3 space-y-4 "
            >
                <p>
                    Ingen i gruppen kan undgå den tryckande känslan av äckel och obehag. Vad är det för fasansfull plats ni hamnat på egentligen?
                    Död, plåga och misär - det finns inget sätt att undgå mörkret som inte bara omger er, utan nu också har tagit fäste inom er. 
                    Ruttnande förtvinande tankar börjar få fäste även hos de starkaste i er grupp. 
                </p>     
                <p>
                    De ondskefulla vapen det talas om verkar dock harmlösa inför den syn som möter er nu. 
                    I mörkret tar en svävande cirkel form, en cirkel av outtydliga ord och tecken. Sakta svävar den mot er
                    sakta ökande i hastighet. Tyd orden innan det är för sent. 
                </p>
                <p>
                    <button
                        class="p-1 mt-4 btn"
                        @click="view = 2"
                    >
                        Titta närmare på cirkeln
                    </button>
                </p>
            </div>
            <div
                v-if="view === 2"
                class="flex flex-col w-full h-full"
            />
        </TransitionGroup>
    </main>
</template>


<script setup>
import { ref } from 'vue'
import { useDeathStore } from '@/stores/death'
import { useRouter } from 'vue-router'
    
const router = useRouter()
const deathStore = useDeathStore()
let view = ref(1)
let victimName = ref('')

function submitVictim(){
    if(victimName.value.toLowerCase() !== 'brutus'){
        deathStore.doDeath()
    } else {
        router.push({ name: 'scene.5' })
    }
}

</script>
    
<style>
    

</style>