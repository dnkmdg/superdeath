<template>
    <div class="relative inline-block w-24 h-24 mx-auto cursor-pointer">
        <span
            class="absolute ml-1.5 text-6xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-icons"
            :class="[!withoutBackground && 'text-black']"
        >{{ letter }}</span>
        <img
            v-if="!withoutBackground"
            src="@/assets/img/char_bg.svg"
            class="w-24"
        >
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    letter: {
        type: String,
        default: ''
    },
    withoutBackground: {
        type: Boolean,
        default: false
    }
})

let angle = ref(Math.random()*Math.PI*2)

</script>