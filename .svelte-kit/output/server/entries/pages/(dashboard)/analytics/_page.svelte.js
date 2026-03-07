import "clsx";
import { s as sanitize_props, a as spread_props, b as slot, c as store_get, e as escape_html, d as ensure_array_like, u as unsubscribe_stores, f as attr, i as stringify } from "../../../../chunks/index2.js";
import { C as Card } from "../../../../chunks/Card.js";
import { d as dict } from "../../../../chunks/store.js";
import { F as File_text } from "../../../../chunks/file-text.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import { U as Users } from "../../../../chunks/users.js";
function Layers($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
      }
    ],
    [
      "path",
      {
        "d": "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"
      }
    ],
    [
      "path",
      {
        "d": "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "layers" },
    $$sanitized_props,
    {
      /**
       * @component @name Layers
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIuODMgMi4xOGEyIDIgMCAwIDAtMS42NiAwTDIuNiA2LjA4YTEgMSAwIDAgMCAwIDEuODNsOC41OCAzLjkxYTIgMiAwIDAgMCAxLjY2IDBsOC41OC0zLjlhMSAxIDAgMCAwIDAtMS44M3oiIC8+CiAgPHBhdGggZD0iTTIgMTJhMSAxIDAgMCAwIC41OC45MWw4LjYgMy45MWEyIDIgMCAwIDAgMS42NSAwbDguNTgtMy45QTEgMSAwIDAgMCAyMiAxMiIgLz4KICA8cGF0aCBkPSJNMiAxN2ExIDEgMCAwIDAgLjU4LjkxbDguNiAzLjkxYTIgMiAwIDAgMCAxLjY1IDBsOC41OC0zLjlBMSAxIDAgMCAwIDIyIDE3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/layers
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
function Message_circle($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "message-circle" },
    $$sanitized_props,
    {
      /**
       * @component @name MessageCircle
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMi45OTIgMTYuMzQyYTIgMiAwIDAgMSAuMDk0IDEuMTY3bC0xLjA2NSAzLjI5YTEgMSAwIDAgMCAxLjIzNiAxLjE2OGwzLjQxMy0uOTk4YTIgMiAwIDAgMSAxLjA5OS4wOTIgMTAgMTAgMCAxIDAtNC43NzctNC43MTkiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/message-circle
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
function Analytics($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let kpis;
    const mockChartPoints = "0,100 20,80 40,85 60,60 80,75 100,40 120,45 140,20 160,30 180,5 200,10";
    kpis = [
      {
        label: store_get($$store_subs ??= {}, "$dict", dict).analytics.kpis.totalDocs,
        value: "1,248",
        trend: store_get($$store_subs ??= {}, "$dict", dict).analytics.kpis.totalDocsTrend,
        icon: File_text,
        color: "var(--primary-color)"
      },
      {
        label: store_get($$store_subs ??= {}, "$dict", dict).analytics.kpis.departments,
        value: "6",
        trend: store_get($$store_subs ??= {}, "$dict", dict).analytics.kpis.departmentsTrend,
        icon: Layers,
        color: "var(--primary-color)"
      },
      {
        label: store_get($$store_subs ??= {}, "$dict", dict).analytics.kpis.uniqueClients,
        value: "8,432",
        trend: store_get($$store_subs ??= {}, "$dict", dict).analytics.kpis.uniqueClientsTrend,
        icon: Users,
        color: "var(--primary-color)"
      },
      {
        label: store_get($$store_subs ??= {}, "$dict", dict).analytics.kpis.totalConvs,
        value: "45.2k",
        trend: store_get($$store_subs ??= {}, "$dict", dict).analytics.kpis.totalConvsTrend,
        icon: Message_circle,
        color: "var(--primary-color)"
      }
    ];
    $$renderer2.push(`<div class="analytics-view fade-in svelte-6jttyl"><div class="header-section mb-6 svelte-6jttyl"><h2 class="text-xl font-semibold mb-1 svelte-6jttyl">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).analytics.overviewTitle)}</h2> <p class="text-muted svelte-6jttyl">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).analytics.overviewSub)}</p></div> <div class="kpi-grid mb-8 svelte-6jttyl"><!--[-->`);
    const each_array = ensure_array_like(kpis);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let kpi = each_array[$$index];
      Card($$renderer2, {
        padding: "1.5rem",
        glass: true,
        hoverable: true,
        className: "kpi-card",
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="flex justify-between items-start mb-4 svelte-6jttyl"><div class="icon-wrapper glass-layer svelte-6jttyl">`);
          if (kpi.icon) {
            $$renderer3.push("<!--[-->");
            kpi.icon($$renderer3, { size: 20, color: kpi.color });
            $$renderer3.push("<!--]-->");
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push("<!--]-->");
          }
          $$renderer3.push(`</div> <span class="trend badge svelte-6jttyl">${escape_html(kpi.trend)}</span></div> <div class="kpi-info"><p class="kpi-label svelte-6jttyl">${escape_html(kpi.label)}</p> <h3 class="kpi-value svelte-6jttyl">${escape_html(kpi.value)}</h3></div>`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]--></div> <div class="charts-grid svelte-6jttyl">`);
    Card($$renderer2, {
      padding: "2rem",
      glass: true,
      className: "chart-card",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="flex justify-between items-center mb-6 svelte-6jttyl"><div><h3 class="text-lg font-semibold mb-1 svelte-6jttyl">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).analytics.tokenConsumption)}</h3> <p class="text-muted text-sm svelte-6jttyl">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).analytics.estCost)} <span class="text-primary font-semibold svelte-6jttyl">$142.50</span></p></div> <div class="chart-actions"><span class="badge active svelte-6jttyl">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).analytics.days30)}</span></div></div> <div class="mock-chart-container svelte-6jttyl"><div class="y-axis svelte-6jttyl"><span>100k</span> <span>75k</span> <span>50k</span> <span>25k</span> <span>0</span></div> <div class="chart-area svelte-6jttyl"><svg viewBox="0 0 200 100" class="svg-graph svelte-6jttyl" preserveAspectRatio="none"><line x1="0" y1="25" x2="200" y2="25" class="grid-line svelte-6jttyl"></line><line x1="0" y1="50" x2="200" y2="50" class="grid-line svelte-6jttyl"></line><line x1="0" y1="75" x2="200" y2="75" class="grid-line svelte-6jttyl"></line><polygon${attr("points", `0,100 ${stringify(mockChartPoints)} 200,100`)} class="graph-fill svelte-6jttyl"></polygon><polyline${attr("points", mockChartPoints)} class="graph-line svelte-6jttyl"></polyline></svg> <div class="x-axis flex justify-between mt-2 text-xs text-muted svelte-6jttyl"><span>Oct 1</span> <span>Oct 8</span> <span>Oct 15</span> <span>Oct 22</span> <span>Now</span></div></div></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      padding: "1rem 1.5rem",
      glass: true,
      className: "recent-activity-card",
      children: ($$renderer3) => {
        $$renderer3.push(`<h3 class="text-lg font-semibold mb-4 svelte-6jttyl">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).analytics.recentActivity)}</h3> <div class="activity-list flex-col gap-3"><div class="activity-item flex items-center gap-3 svelte-6jttyl"><div class="dot new-doc svelte-6jttyl"></div> <div class="flex-1"><p class="text-sm font-medium svelte-6jttyl">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).analytics.activityNewDoc)}</p> <p class="text-xs text-muted svelte-6jttyl">knowledge_base_q3.pdf</p></div> <span class="text-xs text-muted svelte-6jttyl">2m ago</span></div> <div class="activity-item flex items-center gap-3 svelte-6jttyl"><div class="dot alert svelte-6jttyl"></div> <div class="flex-1"><p class="text-sm font-medium svelte-6jttyl">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).analytics.activityQuota)}</p> <p class="text-xs text-muted svelte-6jttyl">Nearing 80% of monthly token limit</p></div> <span class="text-xs text-muted svelte-6jttyl">1h ago</span></div> <div class="activity-item flex items-center gap-3 svelte-6jttyl"><div class="dot route svelte-6jttyl"></div> <div class="flex-1"><p class="text-sm font-medium svelte-6jttyl">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).analytics.activityDept)}</p> <p class="text-xs text-muted svelte-6jttyl">HR Policies routing group added</p></div> <span class="text-xs text-muted svelte-6jttyl">1d ago</span></div></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer) {
  Analytics($$renderer);
}
export {
  _page as default
};
