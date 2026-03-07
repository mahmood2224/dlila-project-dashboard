import "clsx";
import { s as sanitize_props, a as spread_props, b as slot, c as store_get, e as escape_html, u as unsubscribe_stores, h as attr_class, i as stringify, d as ensure_array_like } from "../../../../chunks/index2.js";
import { C as Card } from "../../../../chunks/Card.js";
import { B as Button } from "../../../../chunks/Button.js";
import { d as dict } from "../../../../chunks/store.js";
import { I as Icon } from "../../../../chunks/Icon.js";
function Circle_alert($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["line", { "x1": "12", "x2": "12", "y1": "8", "y2": "12" }],
    [
      "line",
      { "x1": "12", "x2": "12.01", "y1": "16", "y2": "16" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "circle-alert" },
    $$sanitized_props,
    {
      /**
       * @component @name CircleAlert
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjgiIHkyPSIxMiIgLz4KICA8bGluZSB4MT0iMTIiIHgyPSIxMi4wMSIgeTE9IjE2IiB5Mj0iMTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/circle-alert
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
function Circle_check_big($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M21.801 10A10 10 0 1 1 17 3.335" }],
    ["path", { "d": "m9 11 3 3L22 4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "circle-check-big" },
    $$sanitized_props,
    {
      /**
       * @component @name CircleCheckBig
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEuODAxIDEwQTEwIDEwIDAgMSAxIDE3IDMuMzM1IiAvPgogIDxwYXRoIGQ9Im05IDExIDMgM0wyMiA0IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/circle-check-big
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
function Clock($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M12 6v6l4 2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "clock" },
    $$sanitized_props,
    {
      /**
       * @component @name Clock
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNMTIgNnY2bDQgMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/clock
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
function Cloud_upload($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 13v8" }],
    [
      "path",
      {
        "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
      }
    ],
    ["path", { "d": "m8 17 4-4 4 4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "cloud-upload" },
    $$sanitized_props,
    {
      /**
       * @component @name CloudUpload
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTN2OCIgLz4KICA8cGF0aCBkPSJNNCAxNC44OTlBNyA3IDAgMSAxIDE1LjcxIDhoMS43OWE0LjUgNC41IDAgMCAxIDIuNSA4LjI0MiIgLz4KICA8cGF0aCBkPSJtOCAxNyA0LTQgNCA0IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/cloud-upload
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
function File($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
      }
    ],
    ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "file" },
    $$sanitized_props,
    {
      /**
       * @component @name File
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNiAyMmEyIDIgMCAwIDEtMi0yVjRhMiAyIDAgMCAxIDItMmg4YTIuNCAyLjQgMCAwIDEgMS43MDQuNzA2bDMuNTg4IDMuNTg4QTIuNCAyLjQgMCAwIDEgMjAgOHYxMmEyIDIgMCAwIDEtMiAyeiIgLz4KICA8cGF0aCBkPSJNMTQgMnY1YTEgMSAwIDAgMCAxIDFoNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/file
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
function Trash_2($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M10 11v6" }],
    ["path", { "d": "M14 11v6" }],
    ["path", { "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }],
    ["path", { "d": "M3 6h18" }],
    ["path", { "d": "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "trash-2" },
    $$sanitized_props,
    {
      /**
       * @component @name Trash2
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMTF2NiIgLz4KICA8cGF0aCBkPSJNMTQgMTF2NiIgLz4KICA8cGF0aCBkPSJNMTkgNnYxNGEyIDIgMCAwIDEtMiAySDdhMiAyIDAgMCAxLTItMlY2IiAvPgogIDxwYXRoIGQ9Ik0zIDZoMTgiIC8+CiAgPHBhdGggZD0iTTggNlY0YTIgMiAwIDAgMSAyLTJoNGEyIDIgMCAwIDEgMiAydjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/trash-2
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
function KnowledgeBase($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let documents;
    documents = [
      {
        id: "doc_1",
        name: "employee_handbook_2024.pdf",
        size: "2.4 MB",
        department: store_get($$store_subs ??= {}, "$dict", dict).kb.deptHR,
        status: "completed",
        date: "Oct 24"
      },
      {
        id: "doc_2",
        name: "sales_playbook_v3.docx",
        size: "1.1 MB",
        department: store_get($$store_subs ??= {}, "$dict", dict).kb.deptSales,
        status: "completed",
        date: "Oct 22"
      },
      {
        id: "doc_3",
        name: "api_reference_v2.md",
        size: "450 KB",
        department: store_get($$store_subs ??= {}, "$dict", dict).kb.deptEng,
        status: "processing",
        date: store_get($$store_subs ??= {}, "$dict", dict).kb.justNow
      },
      {
        id: "doc_4",
        name: "corrupted_file.pdf",
        size: "0 B",
        department: store_get($$store_subs ??= {}, "$dict", dict).kb.deptGen,
        status: "failed",
        date: "2 hours ago"
      }
    ];
    $$renderer2.push(`<div class="kb-view h-full flex-col gap-4 fade-in pr-2 overflow-y-auto svelte-r861jk"><div class="header-section svelte-r861jk"><h2 class="text-xl font-semibold mb-1 svelte-r861jk">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.title)}</h2> <p class="text-muted svelte-r861jk">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.sub)}</p></div> <div class="grid grid-cols-1 lg-grid-cols-3 gap-4 svelte-r861jk"><div class="upload-section lg-col-span-1 flex-col gap-4 svelte-r861jk">`);
    Card($$renderer2, {
      padding: "2rem",
      glass: true,
      className: "text-center dropzone-card h-64 flex-col justify-center items-center",
      children: ($$renderer3) => {
        $$renderer3.push(`<div${attr_class(`dropzone ${stringify("")} w-full h-full flex items-center justify-center flex-col relative`, "svelte-r861jk")}><input type="file" class="hidden-file-input svelte-r861jk" multiple="" accept=".pdf,.docx,.txt"/> <div class="upload-icon-wrapper mb-4 text-primary svelte-r861jk">`);
        Cloud_upload($$renderer3, { size: 40 });
        $$renderer3.push(`<!----></div> <h3 class="font-medium text-lg mb-1 svelte-r861jk">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.uploadDocs)}</h3> <p class="text-sm text-muted mb-4 px-4 svelte-r861jk">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.dragDrop)}</p> `);
        Button($$renderer3, {
          variant: "secondary",
          size: "sm",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.selectFiles)}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      padding: "1.5rem",
      glass: true,
      children: ($$renderer3) => {
        $$renderer3.push(`<h4 class="font-medium mb-3 svelte-r861jk">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.uploadSettings)}</h4> <div class="flex-col gap-4 svelte-r861jk"><div class="input-group svelte-r861jk"><label for="targetDept" class="text-sm font-medium mb-1 block svelte-r861jk">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.targetDept)}</label> <select id="targetDept"${attr_class(`custom-select w-full ${stringify(store_get($$store_subs ??= {}, "$dict", dict).settings ? "rtl-pad" : "")}`, "svelte-r861jk")}>`);
        $$renderer3.option(
          { value: "general", class: "" },
          ($$renderer4) => {
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.deptGen)}`);
          },
          "svelte-r861jk"
        );
        $$renderer3.option(
          { value: "hr", class: "" },
          ($$renderer4) => {
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.deptHR)}`);
          },
          "svelte-r861jk"
        );
        $$renderer3.option(
          { value: "sales", class: "" },
          ($$renderer4) => {
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.deptSales)}`);
          },
          "svelte-r861jk"
        );
        $$renderer3.option(
          { value: "eng", class: "" },
          ($$renderer4) => {
            $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.deptEng)}`);
          },
          "svelte-r861jk"
        );
        $$renderer3.push(`</select></div> <div class="text-xs text-muted svelte-r861jk">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.deptHelper)}</div></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> `);
    Card($$renderer2, {
      padding: "0",
      glass: true,
      className: "list-section lg-col-span-2 flex-col",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="p-4 border-b flex justify-between items-center svelte-r861jk"><h3 class="font-medium svelte-r861jk">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.indexedFiles)} (${escape_html(documents.length)})</h3> `);
        Button($$renderer3, {
          variant: "ghost",
          size: "sm",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.refreshStatus)}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div> <div class="table-container w-full overflow-x-auto svelte-r861jk"><table class="w-full text-left svelte-r861jk"><thead class="svelte-r861jk"><tr class="svelte-r861jk"><th class="svelte-r861jk">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.fileName)}</th><th class="svelte-r861jk">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.dept)}</th><th class="svelte-r861jk">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.status)}</th><th class="svelte-r861jk">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.date)}</th><th class="text-right svelte-r861jk">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.actions)}</th></tr></thead><tbody class="svelte-r861jk">`);
        if (documents.length === 0) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<tr class="svelte-r861jk"><td colspan="5" class="text-center py-8 text-muted svelte-r861jk">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.noDocs)}</td></tr>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--><!--[-->`);
        const each_array = ensure_array_like(documents);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let doc = each_array[$$index];
          $$renderer3.push(`<tr class="table-row transition-colors svelte-r861jk"><td class="svelte-r861jk"><div class="flex items-center gap-3 svelte-r861jk">`);
          File($$renderer3, { size: 16, class: "text-muted" });
          $$renderer3.push(`<!----> <div class="svelte-r861jk"><p class="font-medium text-sm svelte-r861jk">${escape_html(doc.name)}</p> <p class="text-xs text-muted svelte-r861jk">${escape_html(doc.size)}</p></div></div></td><td class="svelte-r861jk"><span class="badge badge-outline svelte-r861jk">${escape_html(doc.department)}</span></td><td class="svelte-r861jk">`);
          if (doc.status === "completed") {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<span class="status-indicator success svelte-r861jk">`);
            Circle_check_big($$renderer3, { size: 14 });
            $$renderer3.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.statusReady)}</span>`);
          } else if (doc.status === "processing") {
            $$renderer3.push("<!--[1-->");
            $$renderer3.push(`<span class="status-indicator warning svelte-r861jk">`);
            Clock($$renderer3, { size: 14, class: "spin" });
            $$renderer3.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.statusProc)}</span>`);
          } else if (doc.status === "pending") {
            $$renderer3.push("<!--[2-->");
            $$renderer3.push(`<span class="status-indicator muted svelte-r861jk">`);
            Clock($$renderer3, { size: 14 });
            $$renderer3.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.statusPend)}</span>`);
          } else {
            $$renderer3.push("<!--[-1-->");
            $$renderer3.push(`<span class="status-indicator danger svelte-r861jk">`);
            Circle_alert($$renderer3, { size: 14 });
            $$renderer3.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$dict", dict).kb.statusFail)}</span>`);
          }
          $$renderer3.push(`<!--]--></td><td class="text-sm text-muted svelte-r861jk">${escape_html(doc.date)}</td><td class="text-right svelte-r861jk"><button class="icon-btn text-muted hover-danger svelte-r861jk" title="Delete file">`);
          Trash_2($$renderer3, { size: 16 });
          $$renderer3.push(`<!----></button></td></tr>`);
        }
        $$renderer3.push(`<!--]--></tbody></table></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer) {
  KnowledgeBase($$renderer);
}
export {
  _page as default
};
