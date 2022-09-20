<template>
    <div
        class="fixed inset-0 flex flex-col items-center justify-center cursor-pointer backdrop-grayscale backdrop-blur backdrop-invert "
        @click="resetAndRestart()"
    >
        <div
            class="horrible-death"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                style="width: 0;height: 0;"
            >
                <defs>
                    <filter id="goo">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="4"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="goo"
                        />
                        <feBlend
                            in="SourceGraphic"
                            in2="goo"
                        />
                    </filter>
                </defs>
            </svg>

            <h1 class="horrible-death-title">
                <span class="shadow-cmyk">SuperDeath</span>
                <span class="drop" />
                <span class="drop" />
                <span class="drop" />
                <span class="drop" />
                <span class="drop" />
            </h1>
            <div class="flex">
                <h2 class="horrible-death-subtitle shadow-cmyk font-secondary">
                    of Doom
                </h2>
            </div>
        </div>

        <p
            class="w-1/2 mx-auto mt-16 text-2xl text-center text-black font-general"
            v-html="randomDeath.description"
        />    
        <p class="mt-3 bg-black">
            Dödsruna skriven av: <strong>{{ randomDeath.author }}</strong>
        </p>
    </div>
</template>

<script setup>
import { useDeathStore } from '../stores/death'
import { useRouter } from 'vue-router'

const deathStore = useDeathStore()
const router = useRouter()

const randomDeath = deathStore.randomDeath

function resetAndRestart(){
    deathStore.showHorribleDeath = false
    router.push({ name: 'home' })
}
</script>

<style scoped>
.horrible-death-title {
    @apply text-pink  font-primary transform -skew-x-[15deg] -skew-y-[15deg];
    
    font-size: 12rem;
    position: relative;
}
.horrible-death-subtitle {
    @apply -mt-36 ml-auto text-white ;

    font-size: 9rem
}

.horrible-death-title .drop {
    width: .1em;
    height: .1em;
    border-radius: 0 100% 100% 100%;
    background-color: currentColor;
    position: absolute;
    top: 62%;
    animation: drop 3s infinite both;

    &:nth-child(2) {
        left: 14%;
    }

    &:nth-child(3) {
        left: 39%;
        animation-delay: -.4s;
    }

    &:nth-child(4) {
        left: 55%;
        animation-delay: -1.5s;
    }

    &:nth-child(5) {
        left: 63%;
        animation-delay: -.8s;
    }

    &:nth-child(6) {
        left: 95%;
        animation-delay: -1.3s;
    }

    
}

@keyframes drop {
    0% {
        transform: translateY(0) scaleX(.85) rotate(45deg);
        animation-timing-function: ease-out;
    }

    60% {
        transform: translateY(120%) scaleX(.85) rotate(45deg);
        animation-timing-function: ease-in;
    }

    80%,
    100% {
        transform: translateY(80vh) scaleX(.85) rotate(45deg);
    }
}
</style>