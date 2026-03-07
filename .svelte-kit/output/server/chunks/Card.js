import { j as fallback, h as attr_class, k as attr_style, b as slot, l as bind_props, i as stringify } from "./index2.js";
function Card($$renderer, $$props) {
  let padding = fallback($$props["padding"], "1.5rem");
  let glass = fallback($$props["glass"], true);
  let className = fallback($$props["className"], "");
  let hoverable = fallback($$props["hoverable"], false);
  $$renderer.push(`<div${attr_class(`card ${stringify(className)}`, "svelte-7d5xe5", { "glass-panel": glass, "hoverable": hoverable })}${attr_style(`padding: ${stringify(padding)};`)}><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { padding, glass, className, hoverable });
}
export {
  Card as C
};
