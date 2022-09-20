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
                <div class="flex">
                    <button
                        class="p-1 mt-4 btn"
                        @click="view = 2"
                    >
                        Titta närmare på cirkeln
                    </button><br>
                    <button
                        class="p-1 mt-4 ml-auto btn"
                        @click="deathStore.doDeath()"
                    >
                        Göm er bakom en stor sten
                    </button>
                </div>
            </div>
            <div
                v-if="view === 2"
                class="flex flex-col w-full h-full"
            >
                <div class="relative w-full h-full">
                    <img
                        src="@/assets/img/romolo.jpeg"
                        class="absolute -translate-x-1/2 -translate-y-1/2 w-96 filter mix-blend-screen invert grayscale blend top-1/2 left-1/2"
                    >
                    <svg
                        class="absolute top-0 left-0 w-full h-screen text-sm animate-spin-slow"
                        viewBox="0 0 300 300"
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                            <filter id="glow">
                                <feGaussianBlur
                                    stdDeviation="3"
                                    result="coloredBlur"
                                />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <g>
                            <use
                                xlink:href="#circlePath"
                                fill="none"
                            />
                            <text
                                fill="#fff"
                                filter="url(#glow)"
                            >
                                <textPath xlink:href="#circlePath">PYG XWXÖXY EYDMÖLYH?&nbsp;&nbsp;-&nbsp;&nbsp;XYN PÖL <tspan class="font-icons">brutus</tspan>&nbsp;&nbsp;-</textPath>
                            </text>
                        </g>
                    </svg>
                </div>

                <div class="absolute top-[75vh] w-96 left-1/2 -translate-x-1/2">
                    <input
                        v-model="victimName"
                        type="text"
                        class="w-full"
                        @keyup.enter="submitVictim"
                    >
                </div>
            </div>
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