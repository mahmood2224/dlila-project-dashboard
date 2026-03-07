import "clsx";
import { s as sanitize_props, a as spread_props, b as slot, c as store_get, e as escape_html, d as ensure_array_like, i as stringify, u as unsubscribe_stores } from "../../../../chunks/index2.js";
import { C as Card } from "../../../../chunks/Card.js";
import { d as dict } from "../../../../chunks/store.js";
import { B as Button } from "../../../../chunks/Button.js";
import { Z as Zap, P as ProgressBar } from "../../../../chunks/ProgressBar.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import { S as Shield } from "../../../../chunks/shield.js";
import { C as Credit_card } from "../../../../chunks/credit-card.js";
function Check($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "M20 6 9 17l-5-5" }]];
  Icon($$renderer, spread_props([
    { name: "check" },
    $$sanitized_props,
    {
      /**
       * @component @name Check
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/check
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
function Billing($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let plans;
    let currentPlan = "Pro";
    const usageStats = {
      documents: { current: 1248, max: 5e3 },
      pages: { current: 45200, max: 1e5 },
      tokens: { current: 85e4, max: 1e6 }
    };
    plans = [
      {
        name: store_get($$store_subs ??= {}, "$dict", dict).billing.freePlan,
        price: "$0",
        period: store_get($$store_subs ??= {}, "$dict", dict).billing.forever,
        description: store_get($$store_subs ??= {}, "$dict", dict).billing.freeDesc,
        features: [
          store_get($$store_subs ??= {}, "$dict", dict).billing.fDocs50,
          store_get($$store_subs ??= {}, "$dict", dict).billing.fPages1k,
          store_get($$store_subs ??= {}, "$dict", dict).billing.fTokens10k,
          store_get($$store_subs ??= {}, "$dict", dict).billing.fCommunity
        ],
        icon: Check,
        padding: "2rem"
      },
      {
        name: store_get($$store_subs ??= {}, "$dict", dict).billing.proPlan,
        price: "$49",
        period: store_get($$store_subs ??= {}, "$dict", dict).billing.perMonth,
        description: store_get($$store_subs ??= {}, "$dict", dict).billing.proDesc,
        features: [
          store_get($$store_subs ??= {}, "$dict", dict).billing.pDocs5k,
          store_get($$store_subs ??= {}, "$dict", dict).billing.pPages100k,
          store_get($$store_subs ??= {}, "$dict", dict).billing.pTokens1m,
          store_get($$store_subs ??= {}, "$dict", dict).billing.pAudit
        ],
        icon: Zap,
        popular: true,
        padding: "1.5rem"
        // Less padding requested by user for pro package
      },
      {
        name: store_get($$store_subs ??= {}, "$dict", dict).billing.entPlan,
        price: store_get($$store_subs ??= {}, "$dict", dict).billing.customPrice,
        period: store_get($$store_subs ??= {}, "$dict", dict).billing.contactUs,
        description: store_get($$store_subs ??= {}, "$dict", dict).billing.entDesc,
        features: [
          store_get($$store_subs ??= {}, "$dict", dict).billing.eDocsUnl,
          store_get($$store_subs ??= {}, "$dict", dict).billing.ePagesUnl,
          store_get($$store_subs ??= {}, "$dict", dict).billing.eVector,
          store_get($$store_subs ??= {}, "$dict", dict).billing.ePriority
        ],
        icon: Shield,
        padding: "2rem"
      }
    ];
    $$renderer2.push(`<div class="billing-view h-full overflow-y-auto fade-in pr-2 svelte-ve6hgm"><div class="header-section mb-6 svelte-ve6hgm"><h2 class="text-xl font-semibold mb-1 svelte-ve6hgm">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).billing.title)}</h2> <p class="text-muted svelte-ve6hgm">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).billing.sub)}</p></div> <div class="grid grid-cols-1 lg-grid-cols-3 gap-6 mb-8 svelte-ve6hgm">`);
    Card($$renderer2, {
      padding: "2rem",
      glass: true,
      className: "usage-card lg-col-span-2",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="flex justify-between items-center mb-6 border-b pb-4 svelte-ve6hgm"><div><h3 class="text-lg font-semibold svelte-ve6hgm">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).billing.currentQuota)}</h3> <p class="text-sm text-muted svelte-ve6hgm">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).billing.billingCycle)}</p></div> <div class="badge-outline svelte-ve6hgm">Pro
                    ${escape_html(store_get($$store_subs ??= {}, "$dict", dict).billing.plan)}</div></div> <div class="flex-col gap-6 svelte-ve6hgm">`);
        ProgressBar($$renderer3, {
          label: store_get($$store_subs ??= {}, "$dict", dict).billing.kbDocs,
          value: usageStats.documents.current,
          max: usageStats.documents.max
        });
        $$renderer3.push(`<!----> `);
        ProgressBar($$renderer3, {
          label: store_get($$store_subs ??= {}, "$dict", dict).billing.indexedPages,
          value: usageStats.pages.current,
          max: usageStats.pages.max
        });
        $$renderer3.push(`<!----> `);
        ProgressBar($$renderer3, {
          label: store_get($$store_subs ??= {}, "$dict", dict).billing.llmTokens,
          value: usageStats.tokens.current,
          max: usageStats.tokens.max
        });
        $$renderer3.push(`<!----></div> <div class="mt-8 pt-4 border-t flex justify-between items-center bg-surface-subtle p-4 rounded-md svelte-ve6hgm"><div class="flex items-center gap-3">`);
        Credit_card($$renderer3, { class: "text-primary" });
        $$renderer3.push(`<!----> <div><p class="font-medium text-sm svelte-ve6hgm">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).billing.paymentMethod)}</p> <p class="text-xs text-muted svelte-ve6hgm">Visa ending in 4242</p></div></div> `);
        Button($$renderer3, {
          variant: "outline",
          size: "sm",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$dict", dict).billing.update)}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> <h3 class="text-lg font-semibold mb-4 svelte-ve6hgm">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).billing.subTiers)}</h3> <div class="plans-grid svelte-ve6hgm"><!--[-->`);
    const each_array = ensure_array_like(plans);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let plan = each_array[$$index_1];
      Card($$renderer2, {
        padding: plan.padding,
        glass: true,
        className: `plan-card ${stringify(plan.popular ? "popular" : "")} ${stringify(currentPlan === plan.name ? "current" : "")}`,
        children: ($$renderer3) => {
          if (plan.popular) {
            $$renderer3.push("<!--[0-->");
            $$renderer3.push(`<div class="popular-badge svelte-ve6hgm">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).billing.mostPopular)}</div>`);
          } else {
            $$renderer3.push("<!--[-1-->");
          }
          $$renderer3.push(`<!--]--> <div class="plan-header mb-6 svelte-ve6hgm">`);
          if (plan.icon) {
            $$renderer3.push("<!--[-->");
            plan.icon($$renderer3, {
              size: 24,
              class: `mb-4 ${stringify(plan.popular ? "text-primary" : "text-muted")}`
            });
            $$renderer3.push("<!--]-->");
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push("<!--]-->");
          }
          $$renderer3.push(` <h4 class="text-xl font-semibold svelte-ve6hgm">${escape_html(plan.name)}</h4> <div class="price-line mt-2 svelte-ve6hgm"><span class="text-2xl font-bold svelte-ve6hgm">${escape_html(plan.price)}</span> <span class="text-sm text-muted svelte-ve6hgm">/${escape_html(plan.period)}</span></div> <p class="text-sm text-muted mt-2 h-10 svelte-ve6hgm">${escape_html(plan.description)}</p></div> <ul class="features-list mb-8 flex-col gap-3 svelte-ve6hgm"><!--[-->`);
          const each_array_1 = ensure_array_like(plan.features);
          for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
            let feature = each_array_1[$$index];
            $$renderer3.push(`<li class="flex items-center gap-2 text-sm svelte-ve6hgm">`);
            Check($$renderer3, { size: 16, class: "text-primary flex-shrink-0" });
            $$renderer3.push(`<!----> <span>${escape_html(feature)}</span></li>`);
          }
          $$renderer3.push(`<!--]--></ul> <div class="mt-auto">`);
          if (currentPlan === plan.name) {
            $$renderer3.push("<!--[0-->");
            Button($$renderer3, {
              variant: "secondary",
              fullWidth: true,
              disabled: true,
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$dict", dict).billing.currentPlanBtn)}`);
              },
              $$slots: { default: true }
            });
          } else {
            $$renderer3.push("<!--[-1-->");
            Button($$renderer3, {
              variant: plan.popular ? "primary" : "outline",
              fullWidth: true,
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->${escape_html(plan.price === store_get($$store_subs ??= {}, "$dict", dict).billing.customPrice ? store_get($$store_subs ??= {}, "$dict", dict).billing.contactSales : store_get($$store_subs ??= {}, "$dict", dict).billing.upgradeTo + " " + plan.name)}`);
              },
              $$slots: { default: true }
            });
          }
          $$renderer3.push(`<!--]--></div>`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]--></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer) {
  Billing($$renderer);
}
export {
  _page as default
};
