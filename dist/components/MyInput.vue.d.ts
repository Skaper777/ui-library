export interface MyInputProps {
    modelValue: string;
    label?: string;
    id?: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
}
declare const _default: import("vue").DefineComponent<MyInputProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<MyInputProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
