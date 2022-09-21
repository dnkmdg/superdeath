<template>
    <main class="flex flex-col items-center justify-center w-screen h-screen">
        <TransitionGroup name="fade">
            <div
                v-if="view === 1"
                class="flex flex-col w-2/3 h-full "
            >
                <TextArc class="mt-6 text-5xl -mb-[25%] mx-16 font-secondary shadow-cmyk ">
                    Den galna kväkaren
                </TextArc>
                <img
                    src="@/assets/img/plague.jpeg"
                    class="mx-auto rounded-b-full w-[40vh] mix-blend-multiply contrast-200"
                >
                
                <p class="w-1/2 mx-auto mt-12 text-xl">
                    I samma sekund som ni lagt sista bokstaven på Ouijabrädan briserar porten i en explosion av rök, ljus och öronbedövande skrik.
                    Ni slungas bakåt och när ni kommer till era sinnen ser ni konturerna av en enorm mansgestalt med näbb. 
                    <br>
                    Ni har träffat på <b>Den galne kväkaren</b>.
                </p>
                <p class="flex flex-col w-1/2 mx-auto mt-12 space-y-4 text-xl text-center">
                    <button
                        class="p-1 mx-auto mt-4 btn"
                        @click="view = 2"
                    >
                        Slunga purpurmagiska klot mot kväkaren
                    </button>
                    <span>eller</span>
                    <button
                        class="p-1 mx-auto mt-4 btn"
                        @click="view = 2"
                    >
                        Buga i skräck inför kväkaren
                    </button>
                </p>
            </div>
            <div
                v-if="view === 2"
                class="flex flex-col w-1/3 h-full space-y-4"
            >
                <TextArc class="mt-6 text-5xl font-secondary shadow-cmyk ">
                    Den galna kväkaren
                </TextArc>
                <p>
                    Kväkaren skrattar hånfullt åt er, och dånar med sin kraxande röst: 
                </p>
                <p class="text-2xl">
                    ERA SMÅ MYROR!<br>
                    Jag ser att den fördömda violmagikern förhäxat er med sin magi. Den dåren förstår inget om vad hans perversa magi gör med människoköttet. 
                    Jag mer än någon annan förstår mig på era ynkliga kroppar - ni skulle bara veta vilka skapelser jag fått fram genom att kombinera er med andra varelser.
                </p>

                <p class="text-2xl">
                    För att se om ni är värdiga att fortsätta in i Ljusdalen utmanar jag er på kunskap om er egen ynkliga, bräckliga fysiologi.
                </p>

                <div class="mx-auto">
                    <GlitchButton
                        label="Anta utmaningen"
                        class="text-pink font-secondary"
                        @click="view = 'body0'"
                    />
                </div>
            </div>

            <div
                v-if="view === 'body0'"
                class="relative flex flex-col items-center justify-center w-2/3 space-y-4 "
            >
                <span
                    class="w-full text-center text-7xl shadow-cmyk"
                    :class="{ 'font-icons': !bodies[0], 'font-secondary capitalize': !!bodies[0] }"
                >
                    gluteus<br>
                    maximus
                </span>
                <div class="relative max-w-[75vh]">
                    <img
                        src="@/assets/img/body1.jpeg"
                        class="w-full cursor-pointer mix-blend-multiply"
                        @click="deathStore.doDeath()"
                    >
                    <button
                        class="absolute w-[15%] h-[20%] top-[63%] left-[75%]"
                        @click="onBodyClick(0)"
                    />
                </div>  
            </div>

            <div
                v-if="view === 'body1'"
                class="relative flex flex-col items-center justify-center w-2/3 space-y-4 "
            >
                <span
                    class="w-full text-center text-7xl shadow-cmyk"
                    :class="{ 'font-icons': !bodies[1], 'font-secondary capitalize': !!bodies[1] }"
                >
                    stomachum
                </span>
                <div class="relative max-w-[75vh]">
                    <img
                        src="@/assets/img/body2.jpeg"
                        class="max-h-[75vh] cursor-pointer  mix-blend-multiply"
                        @click="deathStore.doDeath()"
                    >
                    <button
                        class="absolute w-[15%] h-[20%] top-[30%] left-[45%]"
                        @click="onBodyClick(1)"
                    />
                </div>  
            </div>

            <div
                v-if="view === 'body2'"
                class="relative flex flex-col items-center justify-center w-2/3 space-y-4 "
            >
                <span
                    class="w-full text-center text-7xl shadow-cmyk"
                    :class="{ 'font-icons': !bodies[2], 'font-secondary capitalize': !!bodies[2] }"
                >
                    labia
                </span>
                <div class="relative max-w-[75vh]">
                    <img
                        src="@/assets/img/body3.jpeg"
                        class="max-h-[75vh] cursor-pointer mix-blend-multiply contrast-200"
                        @click="deathStore.doDeath()"
                    >
                    <button
                        class="absolute w-[26%] h-[16%] top-[51%]  left-[38%]"
                        @click="onBodyClick(2)"
                    />
                </div>  
            </div>

            <div
                v-if="view === 'body3'"
                class="relative flex flex-col items-center justify-center w-2/3 space-y-4 "
            >
                <span
                    class="w-full text-center text-7xl shadow-cmyk"
                    :class="{ 'font-icons': !bodies[3], 'font-secondary capitalize': !!bodies[3] }"
                >
                    femur
                </span>
                <div class="relative max-w-[75vh]">
                    <img
                        src="@/assets/img/body4.jpeg"
                        class="max-h-[75vh] cursor-pointer mix-blend-multiply contrast-200"
                        @click="deathStore.doDeath()"
                    >
                    <button
                        class="absolute w-[12%] h-[18%] top-[56%]  left-[24%]"
                        @click="onBodyClick(3)"
                    />
                    <button
                        class="absolute w-[12%] h-[18%] top-[56%]  left-[61%]"
                        @click="onBodyClick(3)"
                    />
                </div>  
            </div>

            <div
                v-if="view === 'body4'"
                class="relative flex flex-col items-center justify-center w-2/3 space-y-4 "
            >
                <span
                    class="w-full text-center text-7xl shadow-cmyk"
                    :class="{ 'font-icons': !bodies[4], 'font-secondary capitalize': !!bodies[4] }"
                >
                    vesicae
                </span>
                <div class="relative max-w-[75vh]">
                    <img
                        src="@/assets/img/body5.jpeg"
                        class="max-h-[75vh] cursor-pointer mix-blend-multiply contrast-200"
                        @click="deathStore.doDeath()"
                    >
                    <button
                        class="absolute w-[10%] h-[8%] top-[46%] left-[48%]"
                        @click="onBodyClick(4)"
                    />
                </div>  
            </div>
            <div
                v-if="view === 'body5'"
                class="relative flex flex-col items-center justify-center w-2/3 space-y-4 "
            >
                <span
                    class="w-full text-center text-7xl shadow-cmyk"
                    :class="{ 'font-icons': !bodies[5], 'font-secondary capitalize': !!bodies[5] }"
                >
                    glandi
                </span>
                <div class="relative max-w-[75vh]">
                    <img
                        src="@/assets/img/body6.png"
                        class="max-h-[75vh] cursor-pointer mix-blend-multiply contrast-200"
                        @click="deathStore.doDeath()"
                    >
                    <button
                        class="absolute w-[29%] h-[11%] top-[84%] left-[54%]"
                        @click="onBodyClick('done')"
                    />
                </div>  
            </div>

            <div
                v-if="view === 'done'"
                class="relative flex flex-col items-center justify-center w-2/3 space-y-4 "
            >
                <TextArc class="mt-6 text-5xl -mb-[25%] mx-16 font-secondary shadow-cmyk ">
                    Den galna kväkaren
                </TextArc>
                <img
                    src="@/assets/img/plague.jpeg"
                    class="mx-auto rounded-b-full w-[40vh] mix-blend-multiply contrast-200"
                >
                
                <p class="w-1/2 mx-auto mt-12 text-xl">
                    Ni har inte vunnit kväkarens respekt, men han tittar ändå lite mindre vantroget mot er, samtidigt som han i en vid gest bjuder er in genom porten.
                </p>
                <div>
                    <GlitchButton
                        label="Äntra Ljusdalen"
                        class="text-pink font-secondary"
                    />
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
import TextArc from '../../components/TextArc.vue'

const router = useRouter()
const deathStore = useDeathStore()
const uiStore = useUiStore()

const view = ref(1)
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

</style>