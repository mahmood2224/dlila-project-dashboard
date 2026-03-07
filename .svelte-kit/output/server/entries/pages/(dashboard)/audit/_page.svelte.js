import "clsx";
import { s as sanitize_props, a as spread_props, b as slot, e as escape_html, c as store_get, u as unsubscribe_stores, f as attr, h as attr_class, i as stringify, d as ensure_array_like } from "../../../../chunks/index2.js";
import { C as Card } from "../../../../chunks/Card.js";
import { d as dict } from "../../../../chunks/store.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import { D as Database } from "../../../../chunks/database.js";
import { B as Bot } from "../../../../chunks/bot.js";
import { F as File_text } from "../../../../chunks/file-text.js";
import { U as User } from "../../../../chunks/user.js";
function Circle_question_mark($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
    ["path", { "d": "M12 17h.01" }]
  ];
  Icon($$renderer, spread_props([
    { name: "circle-question-mark" },
    $$sanitized_props,
    {
      /**
       * @component @name CircleQuestionMark
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiIC8+CiAgPHBhdGggZD0iTTEyIDE3aC4wMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/circle-question-mark
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
function Dollar_sign($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["line", { "x1": "12", "x2": "12", "y1": "2", "y2": "22" }],
    [
      "path",
      { "d": "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "dollar-sign" },
    $$sanitized_props,
    {
      /**
       * @component @name DollarSign
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjIiIHkyPSIyMiIgLz4KICA8cGF0aCBkPSJNMTcgNUg5LjVhMy41IDMuNSAwIDAgMCAwIDdoNWEzLjUgMy41IDAgMCAxIDAgN0g2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/dollar-sign
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
function Funnel($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "funnel" },
    $$sanitized_props,
    {
      /**
       * @component @name Funnel
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMjBhMSAxIDAgMCAwIC41NTMuODk1bDIgMUExIDEgMCAwIDAgMTQgMjF2LTdhMiAyIDAgMCAxIC41MTctMS4zNDFMMjEuNzQgNC42N0ExIDEgMCAwIDAgMjEgM0gzYTEgMSAwIDAgMC0uNzQyIDEuNjdsNy4yMjUgNy45ODlBMiAyIDAgMCAxIDEwIDE0eiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/funnel
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
function Search($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m21 21-4.34-4.34" }],
    ["circle", { "cx": "11", "cy": "11", "r": "8" }]
  ];
  Icon($$renderer, spread_props([
    { name: "search" },
    $$sanitized_props,
    {
      /**
       * @component @name Search
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjEgMjEtNC4zNC00LjM0IiAvPgogIDxjaXJjbGUgY3g9IjExIiBjeT0iMTEiIHI9IjgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/search
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
function ChatAudit($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let activeSession;
    const chatSessions = [
      {
        id: "cs_1",
        user: "anon_4812",
        topic: "How to reset password",
        tokens: 1450,
        cost: "$0.003",
        time: "10 mins ago",
        active: true
      },
      {
        id: "cs_2",
        user: "j.doe@example.com",
        topic: "API Documentation query",
        tokens: 8200,
        cost: "$0.016",
        time: "1 hour ago",
        active: false
      },
      {
        id: "cs_3",
        user: "anon_9921",
        topic: "Billing issue routing",
        tokens: 410,
        cost: "$0.001",
        time: "3 hours ago",
        active: false
      },
      {
        id: "cs_4",
        user: "m.smith",
        topic: "Integration with Salesforce",
        tokens: 12400,
        cost: "$0.024",
        time: "Yesterday",
        active: false
      },
      {
        id: "cs_5",
        user: "anon_112",
        topic: "General product inquiry",
        tokens: 950,
        cost: "$0.002",
        time: "Yesterday",
        active: false
      }
    ];
    let selectedSessionId = chatSessions[0].id;
    const mockTranscript = [
      {
        role: "user",
        content: "Hi, I forgot my password and cannot log in."
      },
      {
        role: "assistant",
        content: 'Hello! I can help you with that. To reset your password, please go to the login page and click on the "Forgot Password" link. You will receive an email with instructions.',
        sources: ["kb_auth_guide.pdf"]
      },
      {
        role: "user",
        content: "I tried that, but I didn't get the email."
      },
      {
        role: "assistant",
        content: "Currently, password reset emails can take up to 5 minutes to arrive. Please also check your spam or junk folder. If it has been more than 15 minutes, please let me know and I can escalate this to support.",
        sources: ["kb_troubleshooting.docx"]
      }
    ];
    activeSession = chatSessions.find((s) => s.id === selectedSessionId) || chatSessions[0];
    $$renderer2.push(`<div class="chat-audit-view h-full fade-in svelte-9j48jw"><div class="header-section mb-6 svelte-9j48jw"><h2 class="text-xl font-semibold mb-1 svelte-9j48jw">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).audit.title)}</h2> <p class="text-muted svelte-9j48jw">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).audit.sub)}</p></div> <div class="audit-layout gap-6 svelte-9j48jw">`);
    Card($$renderer2, {
      padding: "0",
      glass: true,
      className: "feed-card flex-col",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="feed-header p-4 border-b svelte-9j48jw"><div class="search-bar mb-3 svelte-9j48jw">`);
        Search($$renderer3, { size: 16, class: "search-icon" });
        $$renderer3.push(`<!----> <input type="text"${attr("placeholder", store_get($$store_subs ??= {}, "$dict", dict).audit.searchPlaceholder)}${attr_class(`search-input ${stringify(store_get($$store_subs ??= {}, "$dict", dict).settings ? "rtl-pad" : "")}`, "svelte-9j48jw")}/></div> <div class="flex justify-between items-center text-sm font-medium svelte-9j48jw"><span class="text-muted svelte-9j48jw">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).audit.recentSessions)}</span> <button class="flex items-center gap-1 text-primary hover-text svelte-9j48jw">`);
        Funnel($$renderer3, { size: 14 });
        $$renderer3.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$dict", dict).audit.filter)}</button></div></div> <div class="feed-list overflow-y-auto pointer-events-auto svelte-9j48jw"><!--[-->`);
        const each_array = ensure_array_like(chatSessions);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let session = each_array[$$index];
          $$renderer3.push(`<button type="button"${attr_class(`session-item text-left ${stringify(session.id === selectedSessionId ? "selected" : "")}`, "svelte-9j48jw")}><div class="flex justify-between items-start mb-1 svelte-9j48jw"><span class="font-medium truncate flex-1 pr-2 svelte-9j48jw">${escape_html(session.user)}</span> <span class="text-xs text-muted whitespace-nowrap svelte-9j48jw">${escape_html(session.time)}</span></div> <p class="text-sm text-muted truncate svelte-9j48jw">${escape_html(session.topic)}</p></button>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      padding: "0",
      glass: true,
      className: "detail-card flex-col flex-1",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="detail-header p-4 border-b flex justify-between items-center svelte-9j48jw"><div><h3 class="font-semibold svelte-9j48jw">${escape_html(activeSession.topic)}</h3> <p class="text-sm text-muted svelte-9j48jw">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).audit.client)}: ${escape_html(activeSession.user)}</p></div> <div class="flex gap-3"><div class="metric text-right"><span class="text-xs text-muted flex items-center justify-end gap-1 svelte-9j48jw">`);
        Database($$renderer3, { size: 12 });
        $$renderer3.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$dict", dict).audit.tokens)}</span> <span class="font-medium text-sm svelte-9j48jw">${escape_html(activeSession.tokens.toLocaleString())}</span></div> <div class="metric text-right pl-3 border-l svelte-9j48jw"><span class="text-xs text-muted flex items-center justify-end gap-1 svelte-9j48jw">`);
        Dollar_sign($$renderer3, { size: 12 });
        $$renderer3.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$dict", dict).audit.cost)}</span> <span class="font-medium text-sm text-primary svelte-9j48jw">${escape_html(activeSession.cost)}</span></div></div></div> <div class="transcript-area p-6 overflow-y-auto flex-1 flex-col gap-6 svelte-9j48jw"><!--[-->`);
        const each_array_1 = ensure_array_like(mockTranscript);
        for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
          let msg = each_array_1[$$index_2];
          $$renderer3.push(`<div${attr_class(`message-row ${stringify(msg.role === "user" ? "justify-end" : "justify-start")} flex`)}>`);
          if (msg.role === "assistant") {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<div class="avatar bg-primary text-white mr-3 mt-1 svelte-9j48jw">`);
            Bot($$renderer3, { size: 16 });
            $$renderer3.push(`<!----></div>`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--> <div${attr_class(`message-bubble ${stringify(msg.role)}`, "svelte-9j48jw")}><p class="text-sm leading-relaxed svelte-9j48jw">${escape_html(msg.content)}</p> `);
          if (msg.sources && msg.sources.length > 0) {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<div class="sources mt-3 pt-3 border-t-bubble svelte-9j48jw"><span class="text-xs font-medium mb-1 block svelte-9j48jw">Sources verified:</span> <div class="flex gap-2"><!--[-->`);
            const each_array_2 = ensure_array_like(msg.sources);
            for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
              let source = each_array_2[$$index_1];
              $$renderer3.push(`<span class="source-tag text-xs flex items-center gap-1 svelte-9j48jw">`);
              File_text($$renderer3, { size: 10 });
              $$renderer3.push(`<!----> ${escape_html(source)}</span>`);
            }
            $$renderer3.push(`<!--]--></div></div>`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--></div> `);
          if (msg.role === "user") {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<div class="avatar bg-surface ml-3 mt-1 svelte-9j48jw">`);
            User($$renderer3, { size: 16, class: "text-muted" });
            $$renderer3.push(`<!----></div>`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--></div>`);
        }
        $$renderer3.push(`<!--]--></div> <div class="p-4 border-t text-center text-xs text-muted flex items-center justify-center gap-2 svelte-9j48jw">`);
        Circle_question_mark($$renderer3, { size: 14 });
        $$renderer3.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$dict", dict).audit.readOnly)}</div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer) {
  ChatAudit($$renderer);
}
export {
  _page as default
};
