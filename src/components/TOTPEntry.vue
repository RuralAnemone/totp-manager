<!-- card-like, list of these in a div off to the left (or right? user preference, eventually) -->
<script setup>
import * as OTPAuth from "otpauth";
defineProps({
    issuer: String,
    label: String,
    secretKey: String,
    period: Number,
    digits: Number,
    algorithm: String,
    otpObject: OTPAuth.TOTP
});
</script>
<template>
    <hr />
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
