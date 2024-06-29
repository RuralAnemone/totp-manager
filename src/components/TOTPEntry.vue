<!-- card-like, list of these in a div off to the left (or right? user preference, eventually) -->
<script setup lang="ts">
    defineProps<{
        secretKey: String,
        period: Number,
        digits: Number,
        algorithm: String
    }>()
</script>
<template>
    <p>
        <slot></slot>
    </p>
    <ul>
        <li>key: {{ secretKey }}</li>
        <li>period: {{ period }}</li>
        <li>length: {{ digits }}</li>
        <li>algorithm: {{ algorithm }}</li>
    </ul>
</template>