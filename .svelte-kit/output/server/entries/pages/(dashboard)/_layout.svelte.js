import { s as sanitize_props, a as spread_props, b as slot, g as getContext, e as escape_html, c as store_get, d as ensure_array_like, f as attr, h as attr_class, u as unsubscribe_stores } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/state.svelte.js";
import "clsx";
import { d as dict, c as currentProject, a as currentUser } from "../../../chunks/store.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { D as Database } from "../../../chunks/database.js";
import { B as Bot } from "../../../chunks/bot.js";
import { C as Chart_pie } from "../../../chunks/chart-pie.js";
import { C as Credit_card } from "../../../chunks/credit-card.js";
import { S as Settings } from "../../../chunks/settings.js";
function Activity($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "activity" },
    $$sanitized_props,
    {
      /**
       * @component @name Activity
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjIgMTJoLTIuNDhhMiAyIDAgMCAwLTEuOTMgMS40NmwtMi4zNSA4LjM2YS4yNS4yNSAwIDAgMS0uNDggMEw5LjI0IDIuMThhLjI1LjI1IDAgMCAwLS40OCAwbC0yLjM1IDguMzZBMiAyIDAgMCAxIDQuNDkgMTJIMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/activity
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
function Log_out($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m16 17 5-5-5-5" }],
    ["path", { "d": "M21 12H9" }],
    ["path", { "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "log-out" },
    $$sanitized_props,
    {
      /**
       * @component @name LogOut
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTYgMTcgNS01LTUtNSIgLz4KICA8cGF0aCBkPSJNMjEgMTJIOSIgLz4KICA8cGF0aCBkPSJNOSAyMUg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/log-out
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
function Message_square($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "message-square" },
    $$sanitized_props,
    {
      /**
       * @component @name MessageSquare
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjIgMTdhMiAyIDAgMCAxLTIgMkg2LjgyOGEyIDIgMCAwIDAtMS40MTQuNTg2bC0yLjIwMiAyLjIwMkEuNzEuNzEgMCAwIDEgMiAyMS4yODZWNWEyIDIgMCAwIDEgMi0yaDE2YTIgMiAwIDAgMSAyIDJ6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/message-square
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
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Sidebar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const menuItems = [
      {
        id: "/analytics",
        label: "Analytics",
        icon: Activity,
        dictKey: "analytics"
      },
      {
        id: "/audit",
        label: "Chat Audit",
        icon: Message_square,
        dictKey: "audit"
      },
      {
        id: "/knowledge",
        label: "Knowledge Base",
        icon: Database,
        dictKey: "knowledge"
      },
      {
        id: "/playground",
        label: "Playground",
        icon: Bot,
        dictKey: "playground"
      },
      {
        id: "/usage",
        label: "Detailed Usage",
        icon: Chart_pie,
        dictKey: "usage"
      },
      {
        id: "/billing",
        label: "Billing & Plans",
        icon: Credit_card,
        dictKey: "billing"
      },
      {
        id: "/settings",
        label: "Settings",
        icon: Settings,
        dictKey: "settings"
      }
    ];
    $$renderer2.push(`<aside class="sidebar glass-panel svelte-nn8l0n"><div class="logo-area svelte-nn8l0n"><div class="logo-icon glass-layer svelte-nn8l0n">`);
    Activity($$renderer2, { size: 24, color: "var(--primary-color)" });
    $$renderer2.push(`<!----></div> <h2 class="svelte-nn8l0n">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).dashboard)}</h2></div> <nav class="nav-menu svelte-nn8l0n"><!--[-->`);
    const each_array = ensure_array_like(menuItems);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<a${attr("href", item.id)}${attr_class("nav-item svelte-nn8l0n", void 0, {
        "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === item.id
      })}>`);
      if (item.icon) {
        $$renderer2.push("<!--[-->");
        item.icon($$renderer2, { size: 20, class: "icon" });
        $$renderer2.push("<!--]-->");
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push("<!--]-->");
      }
      $$renderer2.push(` <span>${escape_html(store_get($$store_subs ??= {}, "$dict", dict).nav[item.dictKey] || item.label)}</span></a>`);
    }
    $$renderer2.push(`<!--]--></nav> <div class="sidebar-footer svelte-nn8l0n"><div class="usage-mini cursor-pointer svelte-nn8l0n"><div class="flex justify-between items-center" style="font-size: 0.8rem; margin-bottom: 0.3rem;"><span>${escape_html(store_get($$store_subs ??= {}, "$dict", dict).nav.planUsage)}</span> <span style="color: var(--primary-color);">68%</span></div> <div class="progress-bar-bg svelte-nn8l0n"><div class="progress-bar-fill svelte-nn8l0n" style="width: 68%;"></div></div></div></div></aside>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function DashboardLayout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<div class="dashboard-wrapper svelte-ep42d5">`);
    Sidebar($$renderer2);
    $$renderer2.push(`<!----> <main class="main-content svelte-ep42d5"><header class="top-header glass-panel svelte-ep42d5"><div class="header-left"><h1 class="page-title svelte-ep42d5">`);
    if (store_get($$store_subs ??= {}, "$currentProject", currentProject)) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`${escape_html(store_get($$store_subs ??= {}, "$currentProject", currentProject).name)}`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`${escape_html(store_get($$store_subs ??= {}, "$dict", dict).dashboard)}`);
    }
    $$renderer2.push(`<!--]--></h1></div> <div class="header-right flex items-center gap-4"><div class="user-profile flex items-center gap-2 cursor-pointer"${attr("title", store_get($$store_subs ??= {}, "$dict", dict).logout)}><div class="avatar svelte-ep42d5">${escape_html(store_get($$store_subs ??= {}, "$currentUser", currentUser) ? store_get($$store_subs ??= {}, "$currentUser", currentUser).name.charAt(0) : "U")}</div> <div class="user-info svelte-ep42d5"><span class="name svelte-ep42d5">${escape_html(store_get($$store_subs ??= {}, "$currentUser", currentUser) ? store_get($$store_subs ??= {}, "$currentUser", currentUser).name : store_get($$store_subs ??= {}, "$dict", dict).owner)}</span> <span class="role svelte-ep42d5">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).admin)}</span></div></div> <button class="icon-btn svelte-ep42d5"${attr("title", store_get($$store_subs ??= {}, "$dict", dict).settingsMenu)}>`);
    Settings($$renderer2, { size: 20 });
    $$renderer2.push(`<!----></button> <button class="icon-btn svelte-ep42d5"${attr("title", store_get($$store_subs ??= {}, "$dict", dict).logout)}>`);
    Log_out($$renderer2, { size: 20 });
    $$renderer2.push(`<!----></button></div></header> <div class="content-area svelte-ep42d5"><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></div></main></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _layout($$renderer, $$props) {
  DashboardLayout($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!--[-->`);
      slot($$renderer2, $$props, "default", {});
      $$renderer2.push(`<!--]-->`);
    },
    $$slots: { default: true }
  });
}
export {
  _layout as default
};
