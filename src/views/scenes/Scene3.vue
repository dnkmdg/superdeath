<template>
    <main class="flex flex-col items-center justify-center w-screen h-screen">
        <TransitionGroup name="fade">
            <div
                v-if="view === 1"
                class="flex flex-col w-1/3 space-y-4"
            >
                <p>
                    En röst dånar obegripligt runtomkring er. Ni fortsätter att sjunka genom sörjan av förgångna kroppar och faller plötsligt nästan tyngdlösa.
                    En demonisk förlösning om man så vill. När ni ser er omkring i tomrummet ser ni en kropp som ni alla närmar er.
                </p>

                <p>
                    Rösten är tydligare. Ni märker att den mässar. Samma ord, om och om igen. 
                </p>

                <p class="text-2xl italic">
                    Vapen från förr, de gamlas tid.<br>
                    Dess förstörelse ni känns inte vid.<br>
                    Med blott ett fingers tryck,<br>
                    och galna mäns nyck,<br>
                    blev så hela världen blid.
                </p>
                <p class="text-2xl italic">
                    Alpha, Omega, Epsilon och Gamma<br>
                    Vilken stråle som är värst gör detsamma.<br>
                    Säg nu vilken stråles namn<br>
                    Som har etsats i denna famn.<br>
                    <button
                        class="p-1 mt-4 btn"
                        @click="view = 2"
                    >
                        Undersök kroppen
                    </button>
                </p>
            </div>
            <div
                v-if="view === 2"
                class="flex items-center justify-center w-full h-full"
                :style="`background-image: url(${skullImagePath})`"
            >
                <div class="flex flex-col w-1/3 p-8 space-y-4 bg-black">
                    <div>
                        <img
                            src="@/assets/img/deathrays.png"
                            class="w-full"
                        >
                    </div>
                    <div class="mx-auto">
                        <GlitchButton
                            label="Sjunk djupare.."
                            @click="$router.push({ name:'scene.3' })"
                        />
                    </div>
                </div>
            </div>
        </TransitionGroup>
    </main>
</template>


<script setup>
import { ref } from 'vue'
import { useDeathStore } from '@/stores/death'
import DoomIcon from '../../components/DoomIcon.vue'
import skullImagePath from '@/assets/img/creepy-dark-skull.jpg'
import GlitchButton from '../../components/GlitchButton.vue'
    
const deathStore = useDeathStore()
let view = ref(1)

</script>
    