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
                        Ni lägger genast märke till några mycket märkliga figurer:
                    </p>
                    <div class="flex space-x-8 text-center">
                        <div
                            v-if="!baronDone"
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

            <div
                v-if="view === 'baronen'"
                class="flex w-2/3 h-full pt-20"
            >
                <div class="w-1/2 text-center shrink-0">
                    <span class="text-4xl">Fjällbaronen</span>
                    <img
                        class="mx-auto mix-blend-multiply contrast-200"
                        src="@/assets/img/barman_1.jpeg"
                    >
                </div>
                <div class="ml-12 space-y-8 text-lg">
                    <p>
                        Den fjälltäckte mannen tittar hungrigt på er, en efter en, och slickar kompulsivt sig om munnen med en snabb, ormliknande tungrörelse.
                    </p>

                    <p>- Ni har varit vilse ser jag. </p>

                    <p>Ni nickar instämmande, osäkra på hur han kunde veta det så säkert, men samtidigt intresserade av hur detta vanskapta kreatur kommit att bli.</p>
                    <p>- Jag ska förtälja er min hemlighet, men bara om ni kan svara på mina frågor..</p>

                    <p>Ni tittar lite nervöst på varandra och sen på Fjällbaronen, varpå den minst nervösa av er säger:</p>
                    <button
                        class="text-2xl !leading-6 btn"
                        @click="view = 3"
                    >
                        I helvete heller, tillbaks!
                    </button>
                    <p>eller</p>
                    <button
                        class="text-2xl !leading-6 btn"
                        @click="view = 'baronen-2'"
                    >
                        Vi antar utmaningen!
                    </button>
                </div>
            </div>

            <div
                v-if="view === 'baronen-2'"
                class="flex w-2/3 h-full pt-20"
            >
                <div class="w-1/2 text-center shrink-0">
                    <span class="text-4xl">Fjällbaronen</span>
                    <img
                        class="mx-auto mix-blend-multiply contrast-200"
                        src="@/assets/img/barman_1.jpeg"
                    >
                </div>
                <template v-if="!baronDone">
                    <div class="ml-12">
                        <p>
                            Det fanns en skald från den gamla tiden,<br>
                            När han sjöng blev man till himlen riden.<br>
                            Hans ätt var pitt i son,<br>
                            Hans symbol en djävulsk demon,<br>
                            I en lek med galenskap hittade han sen friden.
                        </p>
                        <p class="mt-8">
                            <em>Vad var hans namn?</em>
                            <input
                                v-model="answers[0]"
                                type="text"
                                class="w-full mt-4 !bg-yellow !text-black"
                            >
                        </p>

                        <p class="mt-12">
                            I ett ode till rädslan för mörker det är nämnt<br>
                            en fruktan att något ständigt är nära han känt.<br>
                            En mara honom plågar,<br>
                            Hans rädsla honom drogar,<br>
                            Ljudet av fotsteg i hans huvud fast har brännt.
                        </p>
                        <p class="mt-8">
                            <em>Vad kallas rädslan?</em>
                            <input
                                v-model="answers[1]"
                                type="text"
                                class="w-full mt-4 !bg-yellow !text-black"
                            >
                        </p>

                        <p class="mt-12">
                            I jungruns inre kommer döden på sin spets,<br>
                            En evig vila med tusen nålar har så getts.<br>
                            Av en orimlig plåga<br>
                            tvingas livet ur kroppen tåga<br>
                            Jungfruns angliska namn är det sista som setts.
                        </p>
                        <p class="mt-8">
                            <em>Vad heter jungfrun?</em>
                            <input
                                v-model="answers[2]"
                                type="text"
                                class="w-full mt-4 !bg-yellow !text-black"
                            >
                        </p>
                        <button
                            class="mt-6 text-2xl btn"
                            @click="submitBaron"
                        >
                            Svara
                        </button>
                    </div>
                </template>
                <template v-else>
                    <div class="flex flex-col space-y-8">
                        <p>
                            - Ni är väl förtrogna med urtidspoesin. Det skänker mig stor glädje att höra.
                        </p>
                        <p>
                            Fjällbaronen ser sig lite ängsligt omkring och bjuder in er till att sitta vid hans bord.
                            När ni alla kommit på plats börjar han berätta.
                        </p>
                        <p>
                            - Jag var inte alltid en ohygglig varelse som den ni ser nu. En gång var jag en enkel vandrare som på mina resor roade människor jag passerade genom att imitera fiskar. 
                            "Blubb blubb" brukade jag säga, och så skrattade de sig fördärvade. 
                        </p>
                        <p>
                            - Men så en dag sprang jag på en märklig gråkappa som kallade sig "Dödsbringaren". När jag gjorde min vanliga fiskimitation skrattade han inte alls förrän han uttalat en besvärjelse som gjorde mig till det ni ser nu. 
                            Då skrattade han.
                        </p>
                        <p>
                            Flera av er kämpar mot att bryta ut i asgarv över detta, samtidigt som ni fylls av sympatier för den harmlöse Fjällbaronen.
                            Ni köper flera öl åt honom, och reser er sedan upp, skyndar bort från bordet och släpper ut asgarvet i sin fulla prakt.
                        </p>
                        
                        <GlitchButton
                            :label="`Asgarva!`"
                            class="mx-auto"
                            @click="view = 3"
                        />
                    </div>
                </template>
            </div>

            <div
                v-if="view === 'fiasco'"
                class="flex w-2/3 h-full"
            >
                Fiasco
                <button
                    class="text-2xl !leading-6 btn"
                    @click="view = 3"
                >
                    Tillbaka
                </button>
            </div>

            <div
                v-if="view === 'kvinnan'"
                class="flex w-2/3 h-full"
            >
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
const answers = ['', '', '']

const correct = [
    'bruce dickinson',
    'skotofobi',
    'iron maiden'
]

let baronDone = ref(false)

uiStore.bgClass = 'inverted-bg'

function submitBaron(){
    let allCorrect = true

    answers.forEach((answer, index) => {
        console.log(answer.toLowerCase(), correct[index])

        if(answer.toLowerCase() !== correct[index]){
            allCorrect = false
        }
    })

    if(!allCorrect){
        deathStore.doDeath()
    } else {
        baronDone.value = true
    }
}

</script>
    
<style>
.sign-title {
    @apply font-primary text-center text-9xl ;
    
  transform: perspective(300px) scaleY(1.5) rotateX(-40deg);
  transform-style: preserve-3d;
}
</style>