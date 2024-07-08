<script setup>
import { computed, ref } from 'vue';
// let disabled =
let totpCode = ref('');
let disabled = computed(() => {
    return totpCode.value.length <= 0;
});

// TODO: get stuff from localStorage



function handleNewEntry() {
    // emit an object back to parent
}
</script>

<template>
    <div class="totp-input">
        <p>code (b32 string)</p>
        <input ref="codeRef" v-model.trim="totpCode" required placeholder="JBSWY3DPEHPK3PXP">
        <button :disabled @click.prevent="handleNewEntry">{{ disabled ? "enter a valid code" : "submit a new entry!" }}</button>
    </div>
</template>
