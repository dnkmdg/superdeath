<template>
    <main class="flex flex-col items-center justify-center w-screen h-screen">
        <TransitionGroup name="fade">
            <div
                v-if="view === 1"
                class="flex flex-col w-1/3 space-y-4 "
            >
                <p>
                    När den violetta röken lagt sig och magikern försvunnit märker ni en skiftning i alltet. Något har
                    lättat.
                    Ni börjar hoppfullt se er omkring och upptäcker att det svarta helveteshålet ni tidigare befann er i
                    är borta, och istället verkar ni ha hamnat i en borg.
                </p>
                <img
                    src="@/assets/img/moria.webp"
                    class="w-full mix-blend-multiply"
                >
                <p>
                    Den stora salen ni står i är mer eller mindre förstörd och tömd på allt av värde - men märkligast av
                    allt är att det saknas fönster. Istället verkar salen fortsätta i en evighet, kolonn efter kolonn in
                    i mörkret.
                </p>
                <p>
                    Ni upptäcker att ni alla lyser svagt av magikerns purpurmagi och några av er utbrister i skrik när
                    små sfärer av lila ljus uppenbarar sig i era händer. Ni roar er en kort stund med att kasta
                    ljusbollarna på varandra likt ett magiskt snöbollskrig, men när ett förlupet ljusklot till sist
                    träffar en av er och upplöser honom till stoft inser ni allvaret, men också möjligheterna.
                </p>
                <p>
                    Sakta tänds ett hopp inom er, i form av en svag men ack så violett låga...
                </p>
                <div class="flex">
                    <button
                        class="p-1 mt-4 btn"
                        @click="view = 2"
                    >
                        Fortsätt >
                    </button>
                </div>
            </div>
            <div
                v-if="view === 2"
                class="flex flex-col w-1/3 space-y-4 "
            >
                <p>
                    Med lättare steg än på länge börjar ni undersöka salen. Det finns många vrår och skrymslen att
                    undersöka, men efter en stund inser ni att <b>allt</b> av värde är tömt sedan länge.
                </p>
                <p>
                    Under er utforskning har ni hittat fyra stora kopparplattor med tecken på. De är hårt åtgångna efter
                    uppenbara försök att riva ner dem, och är inte helt läsbara.
                </p>

                <div class="flex space-x-4">
                    <button
                        class="p-1 mt-4 btn"
                        @click="view = 'plate1'"
                    >
                        Visa platta 1
                    </button>

                    <button
                        class="p-1 mt-4 btn"
                        @click="view = 'plate2'"
                    >
                        Visa platta 2
                    </button>

                    <button
                        class="p-1 mt-4 btn"
                        @click="view = 'plate3'"
                    >
                        Visa platta 3
                    </button>

                    <button
                        class="p-1 mt-4 btn"
                        @click="view = 'plate4'"
                    >
                        Visa platta 4
                    </button>
                </div>
                <p>
                    Medan ni granskar plattorna hör ni hur en våghalsig medlem i gruppen skriker på avstånd. Ni skyndar
                    bort i skrikets riktning och ser en enorm <b>Ouijabräda</b> på stengolvet framför den största porten
                    ni någonsin sett.
                    Den mäter otaliga manslängder i höjd och är gjord av blodek med infästningar i järn och rikligt
                    dekorerad med vackra mönster av alabaster.
                    Porten tycks vara på bristningsgränsen till att explodera av ljus, och ni hör himlakörer vagt sjunga
                    på andra sidan.
                </p>
                <button
                    class="p-1 mx-auto mt-4 btn"
                    @click="view = 'ouija'"
                >
                    Visa Ouijabrädan
                </button>
            </div>

            <div
                v-if="view === 'plate1'"
                class="relative flex flex-col items-center justify-center w-1/3 space-y-4"
            >
                <img
                    src="@/assets/img/plakett.jpeg"
                    class="mix-blend-multiply"
                >
                <span class="absolute text-9xl mix-blend-overlay font-icons">us</span>
                <button
                    class="p-1 mt-4 btn"
                    @click="view = 2"
                >
                    Tillbaka
                </button>
            </div>

            <div
                v-if="view === 'plate2'"
                class="relative flex flex-col items-center justify-center w-1/3 space-y-4"
            >
                <img
                    src="@/assets/img/plakett.jpeg"
                    class="mix-blend-multiply"
                >
                <span class="absolute text-9xl mix-blend-overlay font-icons">ab</span>
                <button
                    class="p-1 mt-4 btn"
                    @click="view = 2"
                >
                    Tillbaka
                </button>
            </div>

            <div
                v-if="view === 'plate3'"
                class="relative flex flex-col items-center justify-center w-1/3 space-y-4"
            >
                <img
                    src="@/assets/img/plakett.jpeg"
                    class="mix-blend-multiply"
                >
                <span
                    class="absolute text-6xl text-center capitalize -translate-y-1/4 mix-blend-overlay font-secondary"
                >sic
                    arithmeticam solvere possumus
                </span>
                <button
                    class="p-1 mt-4 btn"
                    @click="view = 2"
                >
                    Tillbaka
                </button>
            </div>

            <div
                v-if="view === 'plate4'"
                class="relative flex flex-col items-center justify-center w-1/3 space-y-4"
            >
                <img
                    src="@/assets/img/plakett.jpeg"
                    class="mix-blend-multiply"
                >
                <span class="absolute text-9xl mix-blend-overlay font-icons">ac</span>
                <button
                    class="p-1 mt-4 btn"
                    @click="view = 2"
                >
                    Tillbaka
                </button>
            </div>

            <div
                v-if="view === 'ouija'"
                class="relative flex flex-col w-5/6 h-full"
            >
                <p class="mt-8 text-4xl text-center font-secondary">
                    Var säker på vad ni skriver in, ty porten och era liv förgås vid minsta felsteg...
                </p>
                <OuijaBoard
                    class="mt-12"
                    @letter-click="onLetterClick"
                />
                <div class="mx-auto lowercase shadow-cmyk text-[12rem] font-secondary">
                    {{ lettersClicked }}
                </div>
                <div class="mx-auto">
                    <Transition name="fade">
                        <GlitchButton
                            v-if="correct"
                            label="Gå in genom porten"
                            @click="$router.push({ name:'scene.7' })"
                        />
                    </Transition>
                </div>
            </div>
        </TransitionGroup>
    </main>
</template>


<script setup>
import { ref } from 'vue'
import { useDeathStore } from '@/stores/death'
import { useUiStore } from '@/stores/ui'
import { useRouter } from 'vue-router'
import OuijaBoard from '../../components/OuijaBoard.vue'
import GlitchButton from '../../components/GlitchButton.vue'

const router = useRouter()
const deathStore = useDeathStore()
const uiStore = useUiStore()

const view = ref('ouija')
const lettersClicked = ref('')
const correct = ref(false)

uiStore.bgClass = 'yellow-bg'

function onLetterClick(letter) {
    lettersClicked.value += letter

    if (!('abacus').startsWith(lettersClicked.value.toLowerCase())) {
        deathStore.doDeath()
    }

    if (lettersClicked.value.toLowerCase() === 'abacus') {
        correct.value = true
    }
}

</script>
    
<style>

</style>