<template>
    <div class="flex glitch">
        
        <h1 class="logo text-8xl text-pink-500 transform -skew-x-[15deg] -skew-y-[15deg] rotate-10 font-primary">
            SuperDeath
        </h1>
        <h2 class="mt-16 -ml-32 text-white logo text-7xl font-secondary">of Doom</h2>
    </div>
</template>

<script setup>
    const props = defineProps({
        textSize: {
            type: String,
            default: 'text-6xl'
        }
    })
</script>