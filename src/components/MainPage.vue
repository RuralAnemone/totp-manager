<script setup>
import { ref } from "vue";
import TOTPEntry from "@/components/TOTPEntry.vue";
import TOTPInput from "@/components/TOTPInput.vue";
import * as OTPAuth from "otpauth";

let now = ref(Date.now());

setInterval(() => {
    now.value = Date.now();
});

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
    },
    {
        id: id.value++,
        issuer: "the bean man, llc",
        label: "test totp config #3",
        secretKey: btoa("amogus sus :0").toUpperCase().replaceAll(1, 2).replaceAll("=", ""),
        digits: 8,
        period: 16,
        algorithm: "SHA256"
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
    return (period * 1000 - (Math.floor(now.value) % (period * 1000))) / 1000;
}

// const computedEntries = computed(() => {
//     return entries.value.map(entry => ({
//         ...entry,
//         timeLeft: timeLeft(entry.period),
//         TOTPCode: totpCode(entry)
//     }));
// });

// setInterval(() => {
//     pCodeRef.value.textContent = `code: ${totpCode()}`
// }, 100)

function handleNewCode(data) {
    entries.value.push(data);
}
</script>

<template>
    <main>
        <TOTPInput @new-code="(data) => handleNewCode" />
        <TOTPEntry
            v-for="entry in entries"
            :secret-key="entry.secretKey"
            :digits="entry.digits"
            :period="entry.period"
            :algorithm="entry.algorithm"
            :otpObject="otpObject(entry)"
            :key="entry.id"
        >
            <p>code: {{ totpCode(entry) }}</p>
            <p>time left: {{ timeLeft(entry.period) }} seconds</p>
            <progress min="0" :max="entry.period" :value="timeLeft(entry.period)"></progress>
        </TOTPEntry>
    </main>
</template>
