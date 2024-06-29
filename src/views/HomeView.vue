<script setup lang="ts">
import { ref } from 'vue';
import TOTPEntry from "@/components/TOTPEntry.vue"

let id = ref(0);
const entries = ref([
    {
        id: id.value++,
        secretKey: [...btoa("according to all known laws of aviation,").toUpperCase()].filter(c=>c!=="=").join``,
        digits: 6,
        period: 30,
        algorithm: "SHA-1"
    },

])
</script>

<template>
    <main>
        <TOTPEntry v-for="entry in entries" :secret-key="entry.secretKey" :digits="entry.digits" :period="entry.period" :algorithm="entry.algorithm" :key="entry.id">{{ entry.id }}</TOTPEntry>
    </main>
</template>
