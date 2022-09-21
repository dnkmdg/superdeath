<template>
    <main class="flex flex-col items-center justify-center w-screen h-screen">
        <TransitionGroup name="fade">
            <div
                v-if="view === 1"
                class="flex flex-col w-1/3 space-y-4 "
            >
                <p>
                    Smådjävlar susar nu runt er efter att den mystiska cirkeln försvunnit och den intensiva hettan gör att era ögon nästan torkar ut, era läppar spricker och varje andetag är som att svälja tusen eldar.
                    Bepansrade älgflugor och ilskna gnetter kryper över varje centimeter hud som inte döljs av era söndriga, sorgliga ursäkter till trasor.
                </p>     
                <p>
                    Ni börjar helt tappa förståndet, och modet är borta sedan länge. Hallucinationerna avlöser varandra, och ni ser hur era kamrater stundtals faller för frestelsen att kasta sig ut i tomheten.
                    En efter en blir ni galna.
                </p>     
                <p>
                    En magiker uppenbarar sig, ni tittar förvirrat på varandra och ingen förstår om ni samhallucinerar eller om magikern verkligen är där. 
                    Magikern tar fram en bräda och lovar att förbarma sig över era själar om ni klarar att lösa alla hans magiska tal.
                </p>     
                <p>
                    <button
                        class="p-1 mt-4 btn"
                        @click="deathStore.doDeath()"
                    >
                        Någon kastar en sko på magikern
                    </button>
                    <button
                        class="p-1 mt-4 ml-4 btn"
                        @click="view = 2"
                    >
                        Ni blidkar magikern
                    </button>
                </p>
            </div>
            <div
                v-if="view === 2"
                class="flex flex-col"
            >
                <span class="text-6xl">1 2 3 4 5 6 <span class="text-pink">?</span> 8</span>
                <input
                    v-model="inputNumbers[0]"
                    type="text"
                    class="w-full mt-4"
                    @keyup.enter="!submitNumber(0) ? deathStore.doDeath() : view = 3"
                >
            </div>
            <div
                v-if="view === 3"
                class="flex flex-col"
            >
                <span class="text-6xl">0 1 1 2 3 <span class="text-pink">?</span> 8 13</span>
                <input
                    v-model="inputNumbers[1]"
                    type="text"
                    class="w-full mt-4"
                    @keyup.enter="!submitNumber(1) ? deathStore.doDeath() : view = 4"
                >
            </div>
            <div
                v-if="view === 4"
                class="flex flex-col"
            >
                <span class="text-6xl">7 10 8 11 9 12 <span class="text-pink">?</span></span>
                <input
                    v-model="inputNumbers[2]"
                    type="text"
                    class="w-full mt-4"
                    @keyup.enter="!submitNumber(2) ? deathStore.doDeath() : view = 5"
                >
            </div>
            <div
                v-if="view === 5"
                class="flex flex-col"
            >
                <span class="text-6xl">36 34 30 28 24 <span class="text-pink">?</span></span>
                <input
                    v-model="inputNumbers[3]"
                    type="text"
                    class="w-full mt-4"
                    @keyup.enter="!submitNumber(3) ? deathStore.doDeath() : view = 6"
                >
            </div>
            <div
                v-if="view === 6"
                class="flex flex-col"
            >
                <span class="text-6xl">70 71 76 <span class="text-pink">?</span> 81 86 70 91 </span>
                <input
                    v-model="inputNumbers[4]"
                    type="text"
                    class="w-full mt-4"
                    @keyup.enter="!submitNumber(4) ? deathStore.doDeath() : view = 7"
                >
            </div>
            <div
                v-if="view === 7"
                class="flex flex-col"
            >
                <span class="text-6xl"><span class="text-pink">?</span> = 1^6 - 2^6 + 3^6</span>
                <input
                    v-model="inputNumbers[5]"
                    type="text"
                    class="w-full mt-4"
                    @keyup.enter="!submitNumber(5) ? deathStore.doDeath() : view = 8"
                >
            </div>
            <div
                v-if="view === 8"
                class="flex flex-col"
            >
                <MathWheel class="animate animate-ping" />
                <input
                    v-model="inputNumbers[6]"
                    type="text"
                    class="z-10 w-full mt-4"
                    @keyup.enter="!submitNumber(6) ? deathStore.doDeath() : view = 9"
                >
            </div>
            <div
                v-if="view === 9"
                class="flex flex-col items-center w-1/3"
            >
                <div class="w-[30vh] h-[30vh] overflow-hidden rounded-full">
                    <img
                        src="@/assets/img/dark_mage.jpeg"
                        class="object-center max-w-full mix-blend-difference"
                    >
                </div>
                <p class="mt-6">
                    Imponerad skärskådar magikern er, tveksam till varför ni klarade av hans siffermagi på en förruttnad plats som denna, i underjordens käftar.
                </p>
                <p class="mt-6">
                    Med desperation i era blickar frågar ni honom: "Mäster Magiker, kan du förbarma dig över oss? Kan vi på något sätt undslippa denna helveteslabyrint?"
                </p>
                <p class="my-6">
                    Magikern brister ut i ett hånfullt skratt, men kupar sina händer och formar där i ett ljusklot av i den renaste indigolila. Han mumlar arkana ramsor och kastar till sist ut en våg av purpurmagi som träffar er alla, innan han själv försvinner i en storm av lavendelmagi.
                </p>
                <GlitchButton
                    label="Återhämta er..."
                    @click="$router.push({ name:'scene.6' })"
                />
            </div>
        </TransitionGroup>
    </main>
</template>


<script setup>
import { ref } from 'vue'
import { useDeathStore } from '@/stores/death'
import { useRouter } from 'vue-router'
import MathWheel from '../../components/MathWheel.vue'

import GlitchButton from '../../components/GlitchButton.vue'    
const router = useRouter()
const deathStore = useDeathStore()
let view = ref(1)
let inputNumbers = new Array(7)
let numbers = [7, 5, 10, 22, 70, 666, 8]

function submitNumber(index){
    return numbers[index] === parseInt(inputNumbers[index])
}

</script>
    
<style>
    

</style>