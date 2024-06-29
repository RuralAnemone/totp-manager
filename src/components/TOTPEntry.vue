<!-- card-like, list of these in a div off to the left (or right? user preference, eventually) -->
<script setup lang="ts">
import * as OTPAuth from "otpauth"
    defineProps<{
        issuer: string,
        label: string
        secretKey: string,
        period: number,
        digits: number,
        algorithm: string,
        otpObject: OTPAuth.TOTP
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