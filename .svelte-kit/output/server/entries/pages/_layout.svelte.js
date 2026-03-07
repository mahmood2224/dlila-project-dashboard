import { s as sanitize_props, a as spread_props, b as slot, c as store_get, u as unsubscribe_stores } from "../../chunks/index2.js";
import { l as locale, t as theme } from "../../chunks/store.js";
import { I as Icon } from "../../chunks/Icon.js";
function Globe($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    [
      "path",
      { "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }
    ],
    ["path", { "d": "M2 12h20" }]
  ];
  Icon($$renderer, spread_props([
    { name: "globe" },
    $$sanitized_props,
    {
      /**
       * @component @name Globe
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNMTIgMmExNC41IDE0LjUgMCAwIDAgMCAyMCAxNC41IDE0LjUgMCAwIDAgMC0yMCIgLz4KICA8cGF0aCBkPSJNMiAxMmgyMCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/globe
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
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<div class="app-root svelte-12qhfyh"><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--> <div class="floating-controls svelte-12qhfyh"><button class="control-btn glass-panel text-sm font-bold flex flex-col gap-1 items-center svelte-12qhfyh" style="width: 3.5rem; height: 3.5rem; padding: 0.5rem;" aria-label="Toggle Language">`);
    Globe($$renderer2, { size: 18 });
    $$renderer2.push(`<!----> <span style="font-size: 0.75rem;">`);
    if (store_get($$store_subs ??= {}, "$locale", locale) === "en") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`العربية`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`English`);
    }
    $$renderer2.push(`<!--]--></span></button> <button class="control-btn glass-panel svelte-12qhfyh" aria-label="Toggle Theme">`);
    if (store_get($$store_subs ??= {}, "$theme", theme) === "dark") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`☀`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`☾`);
    }
    $$renderer2.push(`<!--]--></button></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _layout as default
};
