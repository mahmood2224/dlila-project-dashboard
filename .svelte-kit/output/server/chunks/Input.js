import { s as sanitize_props, a as spread_props, b as slot, j as fallback, h as attr_class, f as attr, e as escape_html, l as bind_props, i as stringify } from "./index2.js";
import { I as Icon } from "./Icon.js";
function Arrow_right($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M5 12h14" }],
    ["path", { "d": "m12 5 7 7-7 7" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-right" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KICA8cGF0aCBkPSJtMTIgNSA3IDctNyA3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-right
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Input($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let value = fallback($$props["value"], "");
    let type = fallback($$props["type"], "text");
    let placeholder = fallback($$props["placeholder"], "");
    let label = fallback($$props["label"], "");
    let id = fallback($$props["id"], () => Math.random().toString(36).substring(2, 9), true);
    let required = fallback($$props["required"], false);
    let disabled = fallback($$props["disabled"], false);
    let className = fallback($$props["className"], "");
    $$renderer2.push(`<div${attr_class(`input-wrapper ${stringify(className)}`, "svelte-138axrz")}>`);
    if (label) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<label${attr("for", id)} class="svelte-138axrz">${escape_html(label)} `);
      if (required) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<span class="req svelte-138axrz">*</span>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></label>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <input${attr("id", id)}${attr("type", type)}${attr("placeholder", placeholder)}${attr("required", required, true)}${attr("disabled", disabled, true)}${attr("value", value)} class="custom-input glass-layer svelte-138axrz"/></div>`);
    bind_props($$props, {
      value,
      type,
      placeholder,
      label,
      id,
      required,
      disabled,
      className
    });
  });
}
export {
  Arrow_right as A,
  Input as I
};
