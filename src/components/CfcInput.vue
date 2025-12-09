<template>
  <div class="cfc-input-wrapper">
    <label v-if="label" :for="id" class="cfc-input-label">{{ label }}</label>
    <input
      :id="id"
      :value="modelValue"
      @input="(e: Event) => $emit('update:modelValue', (e.target as HTMLInputElement)?.value)"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="['cfc-input', { 'cfc-input--disabled': disabled }]"
    />
  </div>
</template>

<script setup lang="ts">
export interface CfcInputProps {
  modelValue: string
  label?: string
  id?: string
  type?: string
  placeholder?: string
  disabled?: boolean
}
defineProps<CfcInputProps>()
</script>

<style scoped>
.cfc-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.cfc-input-label {
  font-weight: bold;
  font-size: 14px;
  color: var(--color-primary);
}

.cfc-input {
  padding: 8px 12px;
  border: 2px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
}

.cfc-input:focus {
  border-color: #007bff;
}

.cfc-input--disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}
</style>
