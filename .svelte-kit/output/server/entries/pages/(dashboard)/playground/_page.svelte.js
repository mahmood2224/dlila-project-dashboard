import "clsx";
import { s as sanitize_props, a as spread_props, b as slot, c as store_get, e as escape_html, u as unsubscribe_stores, f as attr, d as ensure_array_like, h as attr_class, i as stringify } from "../../../../chunks/index2.js";
import { C as Card } from "../../../../chunks/Card.js";
import { B as Button } from "../../../../chunks/Button.js";
import { d as dict } from "../../../../chunks/store.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import { B as Bot } from "../../../../chunks/bot.js";
import { U as User } from "../../../../chunks/user.js";
function List($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M3 5h.01" }],
    ["path", { "d": "M3 12h.01" }],
    ["path", { "d": "M3 19h.01" }],
    ["path", { "d": "M8 5h13" }],
    ["path", { "d": "M8 12h13" }],
    ["path", { "d": "M8 19h13" }]
  ];
  Icon($$renderer, spread_props([
    { name: "list" },
    $$sanitized_props,
    {
      /**
       * @component @name List
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyA1aC4wMSIgLz4KICA8cGF0aCBkPSJNMyAxMmguMDEiIC8+CiAgPHBhdGggZD0iTTMgMTloLjAxIiAvPgogIDxwYXRoIGQ9Ik04IDVoMTMiIC8+CiAgPHBhdGggZD0iTTggMTJoMTMiIC8+CiAgPHBhdGggZD0iTTggMTloMTMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/list
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
function Refresh_cw($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      { "d": "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }
    ],
    ["path", { "d": "M21 3v5h-5" }],
    [
      "path",
      { "d": "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }
    ],
    ["path", { "d": "M8 16H3v5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "refresh-cw" },
    $$sanitized_props,
    {
      /**
       * @component @name RefreshCw
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyAxMmE5IDkgMCAwIDEgOS05IDkuNzUgOS43NSAwIDAgMSA2Ljc0IDIuNzRMMjEgOCIgLz4KICA8cGF0aCBkPSJNMjEgM3Y1aC01IiAvPgogIDxwYXRoIGQ9Ik0yMSAxMmE5IDkgMCAwIDEtOSA5IDkuNzUgOS43NSAwIDAgMS02Ljc0LTIuNzRMMyAxNiIgLz4KICA8cGF0aCBkPSJNOCAxNkgzdjUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/refresh-cw
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
function Send($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
      }
    ],
    ["path", { "d": "m21.854 2.147-10.94 10.939" }]
  ];
  Icon($$renderer, spread_props([
    { name: "send" },
    $$sanitized_props,
    {
      /**
       * @component @name Send
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTQuNTM2IDIxLjY4NmEuNS41IDAgMCAwIC45MzctLjAyNGw2LjUtMTlhLjQ5Ni40OTYgMCAwIDAtLjYzNS0uNjM1bC0xOSA2LjVhLjUuNSAwIDAgMC0uMDI0LjkzN2w3LjkzIDMuMThhMiAyIDAgMCAxIDEuMTEyIDEuMTF6IiAvPgogIDxwYXRoIGQ9Im0yMS44NTQgMi4xNDctMTAuOTQgMTAuOTM5IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/send
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
function Sliders_vertical($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M10 8h4" }],
    ["path", { "d": "M12 21v-9" }],
    ["path", { "d": "M12 8V3" }],
    ["path", { "d": "M17 16h4" }],
    ["path", { "d": "M19 12V3" }],
    ["path", { "d": "M19 21v-5" }],
    ["path", { "d": "M3 14h4" }],
    ["path", { "d": "M5 10V3" }],
    ["path", { "d": "M5 21v-7" }]
  ];
  Icon($$renderer, spread_props([
    { name: "sliders-vertical" },
    $$sanitized_props,
    {
      /**
       * @component @name SlidersVertical
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgOGg0IiAvPgogIDxwYXRoIGQ9Ik0xMiAyMXYtOSIgLz4KICA8cGF0aCBkPSJNMTIgOFYzIiAvPgogIDxwYXRoIGQ9Ik0xNyAxNmg0IiAvPgogIDxwYXRoIGQ9Ik0xOSAxMlYzIiAvPgogIDxwYXRoIGQ9Ik0xOSAyMXYtNSIgLz4KICA8cGF0aCBkPSJNMyAxNGg0IiAvPgogIDxwYXRoIGQ9Ik01IDEwVjMiIC8+CiAgPHBhdGggZD0iTTUgMjF2LTciIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sliders-vertical
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
function Playground($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let messages;
    let inputMessage = "";
    let temperature = 0.5;
    let topP = 1;
    let systemPrompt = "You are a helpful assistant.";
    messages = [
      {
        role: "assistant",
        content: store_get($$store_subs ??= {}, "$dict", dict).playground.welcomeMessage
      }
    ];
    $$renderer2.push(`<div class="playground-view h-full fade-in pr-2 svelte-bric36"><div class="header-section mb-6 flex justify-between items-end svelte-bric36"><div><h2 class="text-xl font-semibold mb-1 svelte-bric36">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).playground.title)}</h2> <p class="text-muted svelte-bric36">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).playground.sub)}</p></div> `);
    Button($$renderer2, {
      variant: "outline",
      size: "sm",
      children: ($$renderer3) => {
        Refresh_cw($$renderer3, { size: 14 });
        $$renderer3.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$dict", dict).playground.reset)}`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> <div class="playground-layout svelte-bric36">`);
    Card($$renderer2, {
      padding: "1.5rem",
      glass: true,
      className: "params-pane h-full overflow-y-auto flex-col",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="flex items-center gap-2 mb-6 border-b pb-4 svelte-bric36">`);
        Sliders_vertical($$renderer3, { size: 18, class: "text-primary" });
        $$renderer3.push(`<!----> <h3 class="font-semibold text-lg svelte-bric36">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).playground.modelTuning)}</h3></div> <div class="form-group flex-col gap-2 mb-6 svelte-bric36"><label for="system-prompt" class="text-sm font-medium svelte-bric36">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).playground.sysPrompt)}</label> <textarea id="system-prompt" class="custom-textarea svelte-bric36" rows="4">`);
        const $$body = escape_html(systemPrompt);
        if ($$body) {
          $$renderer3.push(`${$$body}`);
        }
        $$renderer3.push(`</textarea> <p class="text-xs text-muted svelte-bric36">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).playground.sysPromptDesc)}</p></div> <div class="form-group flex-col gap-2 mb-6 svelte-bric36"><div class="flex justify-between items-center text-sm svelte-bric36"><label for="temp-slider" class="font-medium svelte-bric36">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).playground.temperature)}</label> <span class="text-primary font-mono svelte-bric36">${escape_html(temperature.toFixed(2))}</span></div> <input id="temp-slider" type="range" min="0" max="2" step="0.05"${attr("value", temperature)} class="custom-slider svelte-bric36"/> <div class="flex justify-between text-xs text-muted svelte-bric36"><span>${escape_html(store_get($$store_subs ??= {}, "$dict", dict).playground.precise)}</span> <span>${escape_html(store_get($$store_subs ??= {}, "$dict", dict).playground.creative)}</span></div></div> <div class="form-group flex-col gap-2 mb-6 border-b pb-6 svelte-bric36"><div class="flex justify-between items-center text-sm svelte-bric36"><label for="top-p-slider" class="font-medium svelte-bric36">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).playground.topP)}</label> <span class="text-primary font-mono svelte-bric36">${escape_html(topP.toFixed(2))}</span></div> <input id="top-p-slider" type="range" min="0" max="1" step="0.05"${attr("value", topP)} class="custom-slider svelte-bric36"/> <p class="text-xs text-muted mt-1 svelte-bric36">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).playground.topPDesc)}</p></div> <div class="flex items-center justify-between"><span class="text-sm font-medium svelte-bric36">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).playground.retrievalTrace)}</span> <label class="toggle-switch svelte-bric36"><input type="checkbox" checked="" class="svelte-bric36"/> <span class="slider round svelte-bric36"></span></label></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      padding: "0",
      glass: true,
      className: "chat-pane flex-col",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="chat-history p-6 overflow-y-auto flex-1 flex-col gap-6 svelte-bric36"><!--[-->`);
        const each_array = ensure_array_like(messages);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let msg = each_array[$$index];
          $$renderer3.push(`<div${attr_class(`message-row ${stringify(msg.role === "user" ? "justify-end" : "justify-start")} flex`)}>`);
          if (msg.role === "assistant") {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<div class="avatar bg-primary text-white mr-3 mt-1 flex-shrink-0 svelte-bric36">`);
            Bot($$renderer3, { size: 16 });
            $$renderer3.push(`<!----></div>`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--> <div class="message-wrapper svelte-bric36"><div${attr_class(`message-bubble ${stringify(msg.role)}`, "svelte-bric36")}><p class="text-sm leading-relaxed whitespace-pre-wrap svelte-bric36">${escape_html(msg.content)}</p></div> `);
          if (msg.trace) {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<div class="trace-panel mt-2 p-3 text-xs border rounded flex-col gap-2 svelte-bric36"><div class="flex items-center gap-1 font-medium text-muted mb-1 svelte-bric36">`);
            List($$renderer3, { size: 12 });
            $$renderer3.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$dict", dict).playground.retrievalSteps)}</div> <div class="trace-step flex items-center justify-between"><span>${escape_html(store_get($$store_subs ??= {}, "$dict", dict).playground.step1)}</span> <span class="text-primary svelte-bric36">0.02s</span></div> <div class="trace-step flex items-center justify-between"><span>${escape_html(store_get($$store_subs ??= {}, "$dict", dict).playground.step2)}</span> <span class="text-primary svelte-bric36">0.14s</span></div> <div class="trace-step flex items-center justify-between text-muted svelte-bric36"><span>${escape_html(store_get($$store_subs ??= {}, "$dict", dict).playground.docsScored)} doc_1
                                            (0.89), doc_4 (0.62)</span></div></div>`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--></div> `);
          if (msg.role === "user") {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<div class="avatar bg-surface ml-3 mt-1 flex-shrink-0 svelte-bric36">`);
            User($$renderer3, { size: 16, class: "text-muted" });
            $$renderer3.push(`<!----></div>`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--></div>`);
        }
        $$renderer3.push(`<!--]--></div> <div class="chat-input-area p-4 border-t svelte-bric36"><div class="input-container relative flex items-end bg-surface border rounded-lg focus-within svelte-bric36"><textarea${attr("placeholder", store_get($$store_subs ??= {}, "$dict", dict).playground.typeMessage)} class="chat-textarea flex-1 p-3 bg-transparent text-sm w-full outline-none resize-none overflow-y-auto svelte-bric36" rows="1" style="min-height: 48px; max-height: 120px;">`);
        const $$body_1 = escape_html(inputMessage);
        if ($$body_1) {
          $$renderer3.push(`${$$body_1}`);
        }
        $$renderer3.push(`</textarea> <div class="p-2 svelte-bric36"><button${attr_class(`send-btn flex items-center justify-center ${stringify(inputMessage.trim() ? "active" : "")}`, "svelte-bric36")}>`);
        Send($$renderer3, {
          size: 18,
          class: store_get($$store_subs ??= {}, "$dict", dict).settings ? "rtl-flip" : ""
        });
        $$renderer3.push(`<!----></button></div></div> <div class="text-center mt-2 text-xs text-muted svelte-bric36">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).playground.pressEnter)}</div></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer) {
  Playground($$renderer);
}
export {
  _page as default
};
