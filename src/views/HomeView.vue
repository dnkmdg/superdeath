<template>
  <main class="flex flex-col items-center justify-center w-screen h-screen">
    <Logo class="mb-12" />
    <RouterLink :to="'/next'" class="flex flex-col text-xl text-center btn"><DoomIcon class="text-5xl" letter="S" /> Start</RouterLink>
  </main>
</template>
<script setup>
  import Logo from '../components/Logo.vue';
  import DoomIcon from '../components/DoomIcon.vue';
</script>