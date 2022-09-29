<template>
    <main class="flex flex-col items-center justify-center w-screen h-screen">
        <TransitionGroup name="fade">
            <div
                v-if="view === 1"
                class="flex flex-col w-1/3 space-y-4 text-xl"
            >
                <p>
                    Ni skyndar nervöst och osäkert förbi kväkaren in genom porten i det som kallas <b>Ljusdala</b>.
                </p>

                <p>Till en början bländar ljuset era ögon, men efter ett tag återkommer himlasången som ni hörde tidigare och ni börjar ana konturerna av en stor blomstrande dal som sträcker ut sig framför er. Ni har precis klarat er igenom <b>Limboria</b> och dess väktare <b>Den galne kväkaren</b> - en plats dit <b>Baphomet</b> spottar de allra armaste av kräk för att uppehålla sig tills de antingen dör av galenskap eller dödas av varandra.</p>
                <p>Ni har också lyckats tillskansa er magi från <b>Purpurmagikern</b> - en mäktig trollkarl som ni vet väldigt lite om - men som ni lyckades göra till vän (nåja, mindre fiende).</p>
                <p>Ni upptäcker med ens hur utmattade ni är. De enda känslor ni förmått känna de senaste timmarna, veckorna, ja, rentavt månaderna - är skräck, hopplöshet, förtvivlan och bottenlös, allsomfattande tomhet.</p>
                <p>Gåendes längs en vacker stenväg ser ni snart ett stort värdshus som ni snabbt enas om att besöka.</p>
                <GlitchButton
                    label="Fortsätt"
                    class="mx-auto"
                    @click="view = 2"
                />
            </div>
            <div
                v-if="view === 2"
                class="flex flex-col w-2/3 h-full space-y-4"
            >   
                <div class="flex flex-col items-center mt-20">
                    <small class="text-4xl font-bold">VÄLKOMNA TILL</small><br>
                    <span class="sign-title shadow-cmyk">
                        Sirenens sång
                    </span>   
                </div>
                <img
                    src="@/assets/img/tavern.jpeg"
                    class="mx-auto w-[60vh] mix-blend-multiply"
                >
                <div class="text-center">
                    <button
                        class="text-xl btn"
                        @click="deathStore.doDeath()"
                    >
                        Undersök omgivningarna
                    </button>
                    eller
                    <button
                        class="text-xl btn"
                        @click="view = 3"
                    >
                        Gå in på tavernan
                    </button>
                </div>
            </div>
            <div
                v-if="view === 3"
                class="w-full h-full"
            >   
                <img
                    src="@/assets/img/tavern_inside.jpeg"
                    class="object-cover w-full h-full mix-blend-overlay "
                >
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                    <p class="text-xl">
                        Ni lägger genast märke till tre mycket märkliga figurer:
                    </p>
                    <div class="flex space-x-8 text-center">
                        <div
                            class="space-y-4 cursor-pointer"
                            @click="view = 'baronen'"
                        >
                            <img
                                class="h-[50vh] mix-blend-multiply contrast-200"
                                src="@/assets/img/barman_1.jpeg"
                            >
                            <button class="text-2xl !leading-6 btn">
                                Prata med <br><strong>Fjällbaronen</strong> 
                            </button>
                        </div>
                        <div
                            class="space-y-4 cursor-pointer"
                            @click="view = 'fiasco'"
                        >
                            <img
                                class="h-[50vh] mix-blend-multiply contrast-200"
                                src="@/assets/img/barman_2.jpeg"
                            >
                            <button class="text-2xl !leading-6 btn">
                                Prata med <br><strong>Fiasco da Gama</strong> 
                            </button>
                        </div>
                        <div
                            class="space-y-4 cursor-pointer"
                            @click="view = 'kvinnan'"
                        >
                            <img
                                class="h-[50vh] mix-blend-multiply contrast-200"
                                src="@/assets/img/barman_3.jpeg"
                            >
                            <button class="text-2xl !leading-6 btn">
                                Prata med <br><strong>Bockstenskvinnan</strong> 
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="view === 'baronen'">
                Baronen
                <button
                    class="text-2xl !leading-6 btn"
                    @click="view = 3"
                >
                    Tillbaka
                </button>
            </div>

            <div v-if="view === 'fiasco'">
                Fiasco
                <button
                    class="text-2xl !leading-6 btn"
                    @click="view = 3"
                >
                    Tillbaka
                </button>
            </div>

            <div v-if="view === 'kvinnan'">
                Kvinnan
                <button
                    class="text-2xl !leading-6 btn"
                    @click="view = 3"
                >
                    Tillbaka
                </button>
            </div>
        </TransitionGroup>
    </main>
</template>


<script setup>
import { ref } from 'vue'
import { useDeathStore } from '@/stores/death'
import { useUiStore } from '@/stores/ui'

import GlitchButton from '../../components/GlitchButton.vue'
import TextArc from '../../components/TextArc.vue'

const deathStore = useDeathStore()
const uiStore = useUiStore()

const view = ref(3)
const bodies = ref(new Array(6))

uiStore.bgClass = 'inverted-bg'

function onBodyClick(index) {
    if(index === 'done'){
        view.value = 'done'

        return
    }

    bodies.value[index] = true

    setTimeout(() => {
        view.value = `body${index+1}`
    }, 1000)
}

</script>
    
<style>
.sign-title {
    @apply font-primary text-center text-9xl ;
    
  transform: perspective(300px) scaleY(1.5) rotateX(-40deg);
  transform-style: preserve-3d;
}
</style>