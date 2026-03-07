import "clsx";
import { s as sanitize_props, a as spread_props, b as slot, e as escape_html, c as store_get, u as unsubscribe_stores, d as ensure_array_like } from "../../../../chunks/index2.js";
import { d as dict } from "../../../../chunks/store.js";
import { C as Card } from "../../../../chunks/Card.js";
import { Z as Zap, P as ProgressBar } from "../../../../chunks/ProgressBar.js";
import { B as Button } from "../../../../chunks/Button.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import { F as File_text } from "../../../../chunks/file-text.js";
import { C as Chart_pie } from "../../../../chunks/chart-pie.js";
function Arrow_up_right($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M7 7h10v10" }],
    ["path", { "d": "M7 17 17 7" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-up-right" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowUpRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNyA3aDEwdjEwIiAvPgogIDxwYXRoIGQ9Ik03IDE3IDE3IDciIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/arrow-up-right
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
function Usage($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let usageData, costHistory;
    usageData = {
      tokensUsed: "850,230",
      tokensMax: "1,000,000",
      tokenRatio: 85,
      filesUploaded: 1248,
      filesMax: 5e3,
      filesRatio: 24.9,
      estimatedCost: "$142.50",
      projectedCost: "$165.00",
      plan: "Pro"
    };
    costHistory = [
      { month: "Sep", cost: "$110.00" },
      { month: "Oct", cost: "$142.50" }
    ];
    $$renderer2.push(`<div class="usage-view h-full flex-col gap-6 fade-in pr-2 overflow-y-auto svelte-1l2l9ty"><div class="header-section flex justify-between items-end"><div><h2 class="text-xl font-semibold mb-1 svelte-1l2l9ty">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).nav.detailedUsage || "Detailed Usage & Quotas")}</h2> <p class="text-muted svelte-1l2l9ty">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).usageSub || "Track your consumption limits, token usage, and active file counts.")}</p></div> `);
    Button($$renderer2, {
      variant: "outline",
      size: "sm",
      children: ($$renderer3) => {
        Arrow_up_right($$renderer3, { size: 16, class: "mr-2" });
        $$renderer3.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$dict", dict).billing.upgrade || "Upgrade Plan")}`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> <div class="grid grid-cols-1 lg-grid-cols-3 gap-6 svelte-1l2l9ty">`);
    Card($$renderer2, {
      padding: "1.5rem",
      glass: true,
      className: "flex-col gap-2",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="flex items-center gap-2 text-muted mb-2 svelte-1l2l9ty">`);
        Zap($$renderer3, { size: 16 });
        $$renderer3.push(`<!----> <span class="text-sm font-medium svelte-1l2l9ty">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).billing.llmTokens || "Tokens Used")}</span></div> <div class="text-2xl font-bold flex items-baseline gap-2 svelte-1l2l9ty">${escape_html(usageData.tokensUsed)} <span class="text-sm font-normal text-muted svelte-1l2l9ty">/ ${escape_html(usageData.tokensMax)}</span></div> `);
        ProgressBar($$renderer3, { value: usageData.tokenRatio, max: 100, label: "" });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      padding: "1.5rem",
      glass: true,
      className: "flex-col gap-2",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="flex items-center gap-2 text-muted mb-2 svelte-1l2l9ty">`);
        File_text($$renderer3, { size: 16 });
        $$renderer3.push(`<!----> <span class="text-sm font-medium svelte-1l2l9ty">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).billing.kbDocs || "Documents Added")}</span></div> <div class="text-2xl font-bold flex items-baseline gap-2 svelte-1l2l9ty">${escape_html(usageData.filesUploaded.toLocaleString())} <span class="text-sm font-normal text-muted svelte-1l2l9ty">/ ${escape_html(usageData.filesMax.toLocaleString())}</span></div> `);
        ProgressBar($$renderer3, { value: usageData.filesRatio, max: 100, label: "" });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      padding: "1.5rem",
      glass: true,
      className: "flex-col gap-2 bg-gradient",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="flex items-center gap-2 text-primary font-medium mb-2 svelte-1l2l9ty">`);
        Chart_pie($$renderer3, { size: 16 });
        $$renderer3.push(`<!----> <span class="text-sm svelte-1l2l9ty">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).analytics.estCost || "Current Spend")}</span></div> <div class="text-3xl font-bold svelte-1l2l9ty">${escape_html(usageData.estimatedCost)}</div> <div class="text-xs text-muted mt-1 svelte-1l2l9ty">Projected end-of-month: ${escape_html(usageData.projectedCost)}</div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> <div class="grid grid-cols-1 lg-grid-cols-2 gap-6 mt-2 svelte-1l2l9ty">`);
    Card($$renderer2, {
      padding: "2rem",
      glass: true,
      className: "flex-col gap-4",
      children: ($$renderer3) => {
        $$renderer3.push(`<h3 class="text-lg font-semibold svelte-1l2l9ty">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).usageLimits || "Limit Details")}</h3> <p class="text-sm text-muted mb-4 svelte-1l2l9ty">Detailed breakdown of your ${escape_html(usageData.plan)} limits.</p> <div class="flex justify-between items-center py-3 border-b svelte-1l2l9ty"><span class="font-medium text-sm svelte-1l2l9ty">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).billing.llmTokens || "Token Allowances")}</span> <span class="text-sm text-muted svelte-1l2l9ty">${escape_html(usageData.tokensUsed)} / ${escape_html(usageData.tokensMax)}</span></div> <div class="flex justify-between items-center py-3 border-b svelte-1l2l9ty"><span class="font-medium text-sm svelte-1l2l9ty">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).billing.kbDocs || "File Storage")}</span> <span class="text-sm text-muted svelte-1l2l9ty">${escape_html(usageData.filesUploaded)} files</span></div> <div class="flex justify-between items-center py-3 border-b svelte-1l2l9ty"><span class="font-medium text-sm svelte-1l2l9ty">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).billing.indexedPages || "Indexed Pages")}</span> <span class="text-sm text-muted svelte-1l2l9ty">45,302 / 100,000</span></div> <div class="flex justify-between items-center py-3 svelte-1l2l9ty"><span class="font-medium text-sm svelte-1l2l9ty">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).features.conversations || "Total Conversations")}</span> <span class="text-sm text-muted svelte-1l2l9ty">45,210 ($0.003/msg avg)</span></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      padding: "2rem",
      glass: true,
      className: "flex-col gap-4",
      children: ($$renderer3) => {
        $$renderer3.push(`<h3 class="text-lg font-semibold svelte-1l2l9ty">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).billing.billingCycle || "Cost History")}</h3> <p class="text-sm text-muted mb-4 svelte-1l2l9ty">Your past 2 months token spending.</p> <!--[-->`);
        const each_array = ensure_array_like(costHistory);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let record = each_array[$$index];
          $$renderer3.push(`<div class="flex justify-between items-center py-3 border-b last-border-none svelte-1l2l9ty"><span class="font-medium text-sm svelte-1l2l9ty">${escape_html(record.month)} 2024</span> <span class="font-semibold text-primary svelte-1l2l9ty">${escape_html(record.cost)}</span></div>`);
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer) {
  Usage($$renderer);
}
export {
  _page as default
};
