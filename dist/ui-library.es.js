import { defineComponent as d, createElementBlock as n, openBlock as p, createCommentVNode as r, createElementVNode as s, toDisplayString as u, normalizeClass as i, ref as c, Fragment as m, createVNode as f, createApp as b } from "vue";
const _ = { class: "cfc-input-wrapper" }, v = ["for"], y = ["id", "value", "type", "placeholder", "disabled"], V = /* @__PURE__ */ d({
  __name: "CfcInput",
  props: {
    modelValue: {},
    label: {},
    id: {},
    type: {},
    placeholder: {},
    disabled: { type: Boolean }
  },
  setup(o) {
    return (e, t) => (p(), n("div", _, [
      e.label ? (p(), n("label", {
        key: 0,
        for: e.id,
        class: "cfc-input-label"
      }, u(e.label), 9, v)) : r("", !0),
      s("input", {
        id: e.id,
        value: e.modelValue,
        onInput: t[0] || (t[0] = (l) => e.$emit("update:modelValue", l.target?.value)),
        type: e.type,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: i(["cfc-input", { "cfc-input--disabled": e.disabled }])
      }, null, 42, y)
    ]));
  }
}), C = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [l, a] of e)
    t[l] = a;
  return t;
}, I = /* @__PURE__ */ C(V, [["__scopeId", "data-v-6ab5401b"]]), g = /* @__PURE__ */ d({
  __name: "App",
  setup(o) {
    const e = c("");
    return (t, l) => (p(), n(m, null, [
      l[1] || (l[1] = s("h1", null, "You did it!", -1)),
      f(I, {
        label: "test",
        modelValue: e.value,
        "onUpdate:modelValue": l[0] || (l[0] = (a) => e.value = a),
        id: "1"
      }, null, 8, ["modelValue"])
    ], 64));
  }
});
b(g).mount("#app");
export {
  I as CfcInput
};
