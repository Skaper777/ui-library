<template>
  <h1>You did it!</h1>
  <MyInput label="test" v-model="test" id="1" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MyInput from './components/CfcInput.vue'
const test = ref('')
</script>

<style scoped>
h1 {
  font-family: var(--font-family-mtsans);
}
</style>
