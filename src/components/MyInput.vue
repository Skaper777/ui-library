<template>
  <div class="my-input-wrapper">
    <label v-if="label" :for="id" class="my-input-label">{{ label }}</label>
    <input
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', '1')"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="['my-input', { 'my-input--disabled': disabled }]"
    />
  </div>
</template>

<script setup lang="ts">
export interface MyInputProps {
  modelValue: string
  label?: string
  id?: string
  type?: string
  placeholder?: string
  disabled?: boolean
}
defineProps<MyInputProps>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<style scoped>
.my-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.my-input-label {
  font-weight: bold;
  font-size: 14px;
  color: #333;
}

.my-input {
  padding: 8px 12px;
  border: 2px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
}

.my-input:focus {
  border-color: #007bff;
}

.my-input--disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}
</style>
