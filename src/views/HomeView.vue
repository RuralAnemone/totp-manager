<script setup lang="ts">
import { ref } from 'vue';
import TOTPEntry from "@/components/TOTPEntry.vue"
import * as OTPAuth from "otpauth";

let id = ref(0);
const entries = ref([
    {
        id: id.value++,
        issuer: "ACME",
        label: "test totp config #1",
        secretKey: [...btoa("according to all known laws of aviation,").toUpperCase()].filter(c=>c!=="=").join(""),
        digits: 6,
        period: 30,
        algorithm: "SHA1"
    },
])

function totp(issuer: string, label: string, secretKey: string, digits: number, period: number, algorithm: string) {
    const config = new OTPAuth.TOTP({
        issuer: issuer,
        label: label,
        secret: secretKey,
        digits: digits,
        period: period,
        algorithm: algorithm
    })
}
</script>

<template>
    <main>
        <TOTPEntry v-for="entry in entries" :secret-key="entry.secretKey" :digits="entry.digits" :period="entry.period" :algorithm="entry.algorithm" :key="entry.id">{{  }}</TOTPEntry>
    </main>
</template>
