import { s as sanitize_props, a as spread_props, b as slot, j as fallback, e as escape_html, k as attr_style, l as bind_props, i as stringify } from "./index2.js";
import { I as Icon } from "./Icon.js";
function Zap($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "zap" },
    $$sanitized_props,
    {
      /**
       * @component @name Zap
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCAxNGExIDEgMCAwIDEtLjc4LTEuNjNsOS45LTEwLjJhLjUuNSAwIDAgMSAuODYuNDZsLTEuOTIgNi4wMkExIDEgMCAwIDAgMTMgMTBoN2ExIDEgMCAwIDEgLjc4IDEuNjNsLTkuOSAxMC4yYS41LjUgMCAwIDEtLjg2LS40NmwxLjkyLTYuMDJBMSAxIDAgMCAwIDExIDE0eiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/zap
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
function ProgressBar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let percentage, currentColor;
    let label = fallback($$props["label"], "");
    let value = fallback($$props["value"], 0);
    let max = fallback($$props["max"], 100);
    let type = fallback($$props["type"], "primary");
    percentage = Math.min(Math.max(value / max * 100, 0), 100);
    currentColor = type === "primary" && percentage > 85 ? "var(--warning-color, #f59e0b)" : type === "primary" && percentage > 95 ? "var(--danger-color, #ef4444)" : type === "warning" ? "var(--warning-color, #f59e0b)" : type === "danger" ? "var(--danger-color, #ef4444)" : "var(--primary-color)";
    $$renderer2.push(`<div class="progress-wrapper w-full svelte-11qk1xf"><div class="flex justify-between items-end mb-1 svelte-11qk1xf"><span class="label text-sm font-medium svelte-11qk1xf">${escape_html(label)}</span> <span class="value text-xs text-muted svelte-11qk1xf"><strong>${escape_html(value.toLocaleString())}</strong> / ${escape_html(max.toLocaleString())}</span></div> <div class="bar-bg svelte-11qk1xf"><div class="bar-fill svelte-11qk1xf"${attr_style(`width: ${stringify(percentage)}%; background-color: ${stringify(currentColor)};`)}></div></div></div>`);
    bind_props($$props, { label, value, max, type });
  });
}
export {
  ProgressBar as P,
  Zap as Z
};
