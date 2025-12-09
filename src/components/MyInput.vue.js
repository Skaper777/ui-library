/// <reference types="C:/Users/pc/Desktop/ui-library/node_modules/.vue-global-types/vue_3.5_0.d.ts" />
const __VLS_props = defineProps();
const __VLS_emit = defineEmits();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['my-input']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "my-input-wrapper" },
});
if (__VLS_ctx.label) {
    // @ts-ignore
    [label,];
    __VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
        for: (__VLS_ctx.id),
        ...{ class: "my-input-label" },
    });
    // @ts-ignore
    [id,];
    (__VLS_ctx.label);
    // @ts-ignore
    [label,];
}
__VLS_asFunctionalElement(__VLS_elements.input)({
    ...{ onInput: (...[$event]) => {
            __VLS_ctx.$emit('update:modelValue', '1');
            // @ts-ignore
            [$emit,];
        } },
    id: (__VLS_ctx.id),
    value: (__VLS_ctx.modelValue),
    type: (__VLS_ctx.type),
    placeholder: (__VLS_ctx.placeholder),
    disabled: (__VLS_ctx.disabled),
    ...{ class: (['my-input', { 'my-input--disabled': __VLS_ctx.disabled }]) },
});
// @ts-ignore
[id, modelValue, type, placeholder, disabled, disabled,];
/** @type {__VLS_StyleScopedClasses['my-input-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['my-input-label']} */ ;
/** @type {__VLS_StyleScopedClasses['my-input']} */ ;
/** @type {__VLS_StyleScopedClasses['my-input--disabled']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({}),
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
