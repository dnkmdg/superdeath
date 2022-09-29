<template>
    <main class="flex flex-col items-center justify-center w-screen h-screen">
        <TransitionGroup name="fade">
            <div
                v-if="view === 1"
                class="flex flex-col w-1/3 space-y-4"
            >
                <p>
                    Ert allt mer hopplösa sällskap träder in genom porten och börjar sakta gå ner för de hala trappstegen. Trappan är svagt upplyst av facklor som vid närmare undersökning visar sig vara människoben.
                </p>

                <p>
                    Efter flera timmars nedstigning upphör trappan och ni kommer in i ett stort grottvalv. Den unkna luften och stanken av svavel gör er alla dåsiga och ännu mer panikslagna än innan. 
                </p>

                <p>
                    På en bortre väggen av grottan skymtar ni tre tunnlar, alla med ett tecken ovanför. 
                </p>

                <div class="grid grid-cols-3 text-center ">
                    <DoomIcon
                        letter="c"
                        @click="deathStore.doDeath()"
                    />
                    <DoomIcon
                        letter="b"
                        @click="deathStore.doDeath()"
                    />
                    <DoomIcon
                        letter="a"
                        @click="view = 2"
                    />
                </div>

                <p>
                    På golvet framför tunnlarna ser ni en inskription, och under den en text, som om den vore ristad med naglar in i den packade jorden:
                </p>

                <p class="text-2xl italic">
                    A, B och C - en väg innebär död av de tre.<br>
                    en andra är ändlös plåga, <br>
                    en tredje är förgängligt liv, <br>
                    Vilken som är vilken, det avgör era kliv.<br>
                    Först är sist, och sist är först, <br>
                    Bestäm er snart, innan ni dör av törst.
                    <br><br>
                    Rätt väg märks av mig, början på alltet,<br>
                    men även slutet på er alla.<br>
                    Armageddon begynner med mig.<br>
                </p>

                <p class="italic text-pink">
                    Dessa tecken kan komma att rädda det som finns kvar av era förtappade själar. Glöm dem inte.
                </p>
            </div>
            <div
                v-if="view === 2"
                class="flex items-center justify-center w-full h-full"
                :style="`background-image: url(${skullImagePath})`"
            >
                <div class="flex flex-col w-1/3 p-8 space-y-4 bg-black">
                    <p>
                        Med stapplande steg kommer ni längre och längre in i tunneln. Ni kan inte längre skönja grottan bakom er, och ni känner att marken blir fuktigare och knöligare under era fötter.
                        Ni inser att ni trampar runt på helt eller delvis förmultnade människo-skallar och det ser inte ut att upphöra snarligen.
                    </p>
                    <p>
                        Ett fladdrande läte hörs från slutet på tunneln när ni inser att en svärm av fullkomligt rabiata fladdermöss är på väg mot er. 
                        Ni slänger er till marken för att ta skydd och inser för sent ert misstag. Ni sjunker hjälplöst och handlöst genom de förruttnade kvarlevorna av det som en gång var människor tills allt blir mörkt, kallt och blod. En domedagens livmoder.
                    </p>
                    <div class="mx-auto">
                        <GlitchButton
                            label="Sjunk djupare.."
                            @click="uiStore.goToLevel({ name:'scene.3' })"
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
import { useUiStore } from '../../stores/ui'

import DoomIcon from '../../components/DoomIcon.vue'
import GlitchButton from '../../components/GlitchButton.vue'
import skullImagePath from '@/assets/img/creepy-dark-skull.jpg'
    
const uiStore = useUiStore()
const deathStore = useDeathStore()
let view = ref(1)

</script>
    