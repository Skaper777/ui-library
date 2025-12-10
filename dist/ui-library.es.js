import { defineComponent as d, createElementBlock as n, openBlock as p, createCommentVNode as u, createElementVNode as s, toDisplayString as i, normalizeClass as c, ref as m, Fragment as f, createVNode as b, createApp as _ } from "vue";
const v = { class: "cfc-input-wrapper" }, y = ["for"], V = ["id", "value", "type", "placeholder", "disabled"], I = /* @__PURE__ */ d({
  __name: "CfcInput",
  props: {
    modelValue: {},
    label: {},
    id: {},
    type: {},
    placeholder: {},
    disabled: { type: Boolean }
  },
  setup(a) {
    return (e, t) => (p(), n("div", v, [
      e.label ? (p(), n("label", {
        key: 0,
        for: e.id,
        class: "cfc-input-label"
      }, i(e.label), 9, y)) : u("", !0),
      s("input", {
        id: e.id,
        value: e.modelValue,
        onInput: t[0] || (t[0] = (l) => e.$emit("update:modelValue", l.target?.value)),
        type: e.type,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: c(["cfc-input", { "cfc-input--disabled": e.disabled }])
      }, null, 42, V)
    ]));
  }
}), r = (a, e) => {
  const t = a.__vccOpts || a;
  for (const [l, o] of e)
    t[l] = o;
  return t;
}, C = /* @__PURE__ */ r(I, [["__scopeId", "data-v-6ab5401b"]]), g = /* @__PURE__ */ d({
  __name: "App",
  setup(a) {
    const e = m("");
    return (t, l) => (p(), n(f, null, [
      l[1] || (l[1] = s("h1", null, "You did it!", -1)),
      b(C, {
        label: "test",
        modelValue: e.value,
        "onUpdate:modelValue": l[0] || (l[0] = (o) => e.value = o),
        id: "1"
      }, null, 8, ["modelValue"])
    ], 64));
  }
}), h = /* @__PURE__ */ r(g, [["__scopeId", "data-v-a21f89f5"]]);
_(h).mount("#app");
export {
  C as CfcInput
};
