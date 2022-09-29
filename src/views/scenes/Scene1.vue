<template>
    <main class="flex flex-col items-center justify-center w-screen h-screen">
        <TransitionGroup name="fade">
            <div
                v-if="view === 1"
                class="flex flex-col w-1/3 space-y-4"
            >
                <p>
                    Efter att ha gått några skräckinjagande steg i den mörka skogen får en uppmärksam själ i sällskapet syn på en port.
                </p>
                <p>
                    På porten syns ett flertal märkliga tecken och en svårtydd text. En av era dumdristiga kamrater springer direkt fram till porten och börjar leta efter ett handtag utan framgång, och dras plötsligt av en osynlig kraft in i porten.
                </p>
                <p>Det dånar en röst - som om den vore inuti era huvuden:</p>
                <p class="text-lg italic font-semibold">
                    "Era kräk! Lös min gåta eller dö."
                </p>
                <p>Paniken sätter in och ni börjar genast undersöka porten närmare.</p>

                <GlitchButton
                    label="Undersök porten"
                    class="mx-auto"
                    @click="view = 2"
                />
            </div>
            <div
                v-if="view === 2"
                class="flex flex-col items-center w-full h-full space-y-8 text-center text-white font-general"
            >   
                <div class="relative">
                    <svg
                        viewBox="0 0 500 500"
                        class="text-white w-[35rem] absolute top-0 -left-[5.3rem]"
                    >
                        <path
                            id="curve"
                            fill="transparent"
                            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                        />
                        <text
                            width="500"
                            fill="#fff"
                            class="text-3xl"
                        >
                            <textPath xlink:href="#curve">
                                MEUS AUCTOR EST ÉLIPHAS
                            </textPath>
                        </text>
                    </svg>
                    <img
                        src="@/assets/img/baphomet.svg"
                        class="inline mt-24 w-96"
                    >
                </div>
                <span class="mt-4">
                    Säg mitt namn och skona era onödiga liv:
                </span>
                <input
                    v-model="demonName"
                    type="text"
                    @keyup.enter="speakName"
                >
                <button
                    class="btn"
                    @click="speakName"
                >
                    Försök
                </button>
            </div>
            <div
                v-if="view === 3"
                class="flex flex-col items-center w-full h-full space-y-8 text-center text-white font-general"
            >   
                <div class="relative">
                    <svg
                        viewBox="0 0 500 500"
                        class="text-white w-[35rem] absolute top-0 -left-[5.3rem]"
                    >
                        <path
                            id="curve"
                            fill="transparent"
                            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                        />
                        <text
                            width="500"
                            fill="#fff"
                            class="text-3xl"
                        >
                            <textPath xlink:href="#curve">
                                MIN SKAPARE ÄR ÉLIPHAS
                            </textPath>
                        </text>
                    </svg>
                    <img
                        src="@/assets/img/baphomet.svg"
                        class="inline mt-24 w-96"
                    >
                </div>
                <span class="mt-4">
                    MITT NAMN ÄR
                </span>
                <span><DoomIcon
                    letter="baphomet"
                    class="text-yellow shadow-cmyk"
                    without-background
                /></span>
                <p class="w-64">
                    Min förbannelse är nu er. Träd in genom min port och undanfly de satans demoner som nu flyger över människans sista kvarlevor.
                </p>

                <GlitchButton
                    label="Gå in i porten"
                    @click="uiStore.goToLevel({ name:'scene.2' })"
                />
            </div>
        </TransitionGroup>
    </main>
</template>


<script setup>
import { ref } from 'vue'
import { useDeathStore } from '@/stores/death'
import { useUiStore } from '../../stores/ui'

import GlitchButton from '@/components/GlitchButton.vue'
import DoomIcon from '../../components/DoomIcon.vue'
    
const uiStore = useUiStore()
const deathStore = useDeathStore()

let view = ref(1)
let demonName = ref('')

function speakName(){
    if(demonName.value.toLowerCase() !== 'baphomet'){
        deathStore.doDeath()
    } else {
        view.value = 3
    }
}
</script>
    