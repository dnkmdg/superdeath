<template>
    <main class="flex flex-col items-center justify-center w-screen h-screen">
        <TransitionGroup name="fade">
            <div
                v-if="view === 1"
                class="space-y-8 text-white font-general w-96"
            >
                <p>
                    Ett svagt ljus syns genom gliporna i de brädförsedda väggarna. Ni vaknar till från en sömn som verkar ha pågått i åratal.
                    Ett hål stort nog för en svulten arm själ syns på en av väggarna.
                    Ni kryper sömndrucket och yrvaket ut genom hålet i väggen och finner er ståendes i månskenet på randen till en skog, långt från närmaste bebyggelse.
                </p>

                <p>
                    På avstånd hörs avgrundsvrål från människor som slaktas, torteras och plågas av för er okända varelser. Deras hopplösa skrik vittnar om ond bråd död.
                </p>

                <p>
                    Ni är en grupp utstötta som av någon anledning lämnats vid liv i denna fasansfulla verklighet. Vad det än är som hänsynslöst slaktar människor, har det inte kommit efter er. Än.
                </p>

                <GlitchButton
                    label="Gå vidare..."
                    @click="view = 2"
                />
            </div>
            <div
                v-if="view === 2"
                class="space-y-8 text-center text-white font-general"
            >
                <p>
                    Ni har nu två val: 
                </p>
                <button
                    class="mr-2 text-lg btn"
                    @click="uiStore.goToLevel('/scene1')"
                >
                    Gå in i skogen och bort från skriken
                </button>
                eller
                <button
                    class="text-lg btn"
                    @click="deathStore.showHorribleDeath = true"
                >
                    Följ skogsranden söderut
                </button>
            </div>
        </TransitionGroup>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import { useDeathStore } from '../stores/death'
import { useUiStore } from '../stores/ui'
import GlitchButton from '../components/GlitchButton.vue'

const deathStore = useDeathStore()
const uiStore = useUiStore()

let view = ref(1)
</script>
