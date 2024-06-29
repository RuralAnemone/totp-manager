<script setup lang="ts">
import { computed, ref } from "vue";
import TOTPEntry from "@/components/TOTPEntry.vue";
import * as OTPAuth from "otpauth";

let id = ref(0);
const entries = ref([
    {
        id: id.value++,
        issuer: "ACME",
        label: "test totp config #1",
        secretKey: "JBSWY3DPEHPK3PXP",
        digits: 6,
        period: 30,
        algorithm: "SHA1"
    }
]);

function otpObject(entry) {
    return new OTPAuth.TOTP({
        issuer: entry.issuer,
        label: entry.label,
        secret: entry.secretKey,
        digits: entry.digits,
        period: entry.period,
        algorithm: entry.algorithm
    });
}

function totpCode(entry) {
    const config = otpObject(entry);
    return config.generate();
}

function timeLeft(period) {
    return (period * 1000 - (Math.floor(Date.now()) % (period * 1000))) / 1000;
}

const computedEntries = computed(() => {
    return entries.value.map(entry => ({
        ...entry,
        timeLeft: timeLeft(entry.period),
        TOTPCode: totpCode(entry)
    }));
});
</script>

<template>
    <main>
        <TOTPEntry v-for="entry in computedEntries" :secret-key="entry.secretKey" :digits="entry.digits" :period="entry.period" :algorithm="entry.algorithm" :otpObject="otpObject(entry)" :key="entry.id">
            <p>code: {{ totpCode(entry) }}</p>
            <p>time left: {{ timeLeft(entry.period) }} seconds</p>
        </TOTPEntry>
    </main>
</template>
