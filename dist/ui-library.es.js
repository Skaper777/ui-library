import { defineComponent as p, createElementBlock as a, openBlock as d, createCommentVNode as s, createElementVNode as i, toDisplayString as r, normalizeClass as u } from "vue";
const m = { class: "my-input-wrapper" }, y = ["for"], c = ["id", "value", "type", "placeholder", "disabled"], b = /* @__PURE__ */ p({
  __name: "MyInput",
  props: {
    modelValue: {},
    label: {},
    id: {},
    type: {},
    placeholder: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(o) {
    return (e, l) => (d(), a("div", m, [
      e.label ? (d(), a("label", {
        key: 0,
        for: e.id,
        class: "my-input-label"
      }, r(e.label), 9, y)) : s("", !0),
      i("input", {
        id: e.id,
        value: e.modelValue,
        onInput: l[0] || (l[0] = (t) => e.$emit("update:modelValue", "1")),
        type: e.type,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: u(["my-input", { "my-input--disabled": e.disabled }])
      }, null, 42, c)
    ]));
  }
}), _ = (o, e) => {
  const l = o.__vccOpts || o;
  for (const [t, n] of e)
    l[t] = n;
  return l;
}, v = /* @__PURE__ */ _(b, [["__scopeId", "data-v-65a51496"]]);
export {
  v as MyInput
};
