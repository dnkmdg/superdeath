<template>
    <svg
        viewBox="55 15 390 150"
    >
        <path
            id="curve"
            fill="transparent"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
        />
        <text>
            <textPath
                xlink:href="#curve"
                startOffset="50%"
                text-anchor="middle"
            >
                <slot />
            </textPath>
        </text>
    </svg>
</template>

<script setup>

</script>