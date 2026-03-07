import "clsx";
import { s as sanitize_props, a as spread_props, b as slot, e as escape_html, c as store_get, h as attr_class, f as attr, u as unsubscribe_stores, i as stringify } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/state.svelte.js";
import { d as dict } from "../../../chunks/store.js";
import { C as Card } from "../../../chunks/Card.js";
import { I as Input, A as Arrow_right } from "../../../chunks/Input.js";
import { B as Button } from "../../../chunks/Button.js";
import { I as Icon } from "../../../chunks/Icon.js";
function Rocket($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" }],
    [
      "path",
      {
        "d": "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"
      }
    ],
    [
      "path",
      {
        "d": "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"
      }
    ],
    [
      "path",
      { "d": "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "rocket" },
    $$sanitized_props,
    {
      /**
       * @component @name Rocket
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTV2NXMzLjAzLS41NSA0LTJjMS4wOC0xLjYyIDAtNSAwLTUiIC8+CiAgPHBhdGggZD0iTTQuNSAxNi41Yy0xLjUgMS4yNi0yIDUtMiA1czMuNzQtLjUgNS0yYy43MS0uODQuNy0yLjEzLS4wOS0yLjkxYTIuMTggMi4xOCAwIDAgMC0yLjkxLS4wOSIgLz4KICA8cGF0aCBkPSJNOSAxMmEyMiAyMiAwIDAgMSAyLTMuOTVBMTIuODggMTIuODggMCAwIDEgMjIgMmMwIDIuNzItLjc4IDcuNS02IDExYTIyLjQgMjIuNCAwIDAgMS00IDJ6IiAvPgogIDxwYXRoIGQ9Ik05IDEySDRzLjU1LTMuMDMgMi00YzEuNjItMS4wOCA1IC4wNSA1IC4wNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/rocket
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
function Onboarding($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let projectName = "";
    let projectDomain = "";
    let projectDesc = "";
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="onboarding-container svelte-19g92rv"><div class="wizard-layout grid svelte-19g92rv"><div class="wizard-sidebar glass-panel svelte-19g92rv"><div class="brand mb-8 flex items-center gap-3">`);
      Rocket($$renderer3, { color: "var(--primary-color)" });
      $$renderer3.push(`<!----> <span class="font-semibold text-lg">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).onboarding.title)}</span></div> <ul class="steps-list svelte-19g92rv"><li${attr_class(`step-item ${stringify("active")}`, "svelte-19g92rv")}><div class="step-circle svelte-19g92rv">1</div> <div class="step-text svelte-19g92rv"><h4 class="svelte-19g92rv">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).onboarding.step1)}</h4> <p class="svelte-19g92rv">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).onboarding.step1Desc)}</p></div></li> <li${attr_class(`step-item ${stringify("")}`, "svelte-19g92rv")}><div class="step-circle svelte-19g92rv">2</div> <div class="step-text svelte-19g92rv"><h4 class="svelte-19g92rv">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).onboarding.step2)}</h4> <p class="svelte-19g92rv">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).onboarding.step2Desc)}</p></div></li> <li${attr_class(`step-item ${stringify("")}`, "svelte-19g92rv")}><div class="step-circle svelte-19g92rv">3</div> <div class="step-text svelte-19g92rv"><h4 class="svelte-19g92rv">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).onboarding.step3)}</h4> <p class="svelte-19g92rv">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).onboarding.step3Desc)}</p></div></li></ul></div> <div class="wizard-content svelte-19g92rv">`);
      Card($$renderer3, {
        padding: "3rem",
        glass: true,
        className: "content-card h-full flex-col justify-center relative",
        children: ($$renderer4) => {
          {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="step-pane text-center svelte-19g92rv"><h2 class="mb-2 svelte-19g92rv">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).onboarding.pane1Title)}</h2> <p class="subtitle mb-8 svelte-19g92rv">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).onboarding.pane1Sub)}</p> <form class="flex-col gap-6"><div class="text-left">`);
            Input($$renderer4, {
              label: store_get($$store_subs ??= {}, "$dict", dict).onboarding.projectNameLabel,
              placeholder: store_get($$store_subs ??= {}, "$dict", dict).onboarding.projectNamePlaceholder,
              required: true,
              get value() {
                return projectName;
              },
              set value($$value) {
                projectName = $$value;
                $$settled = false;
              }
            });
            $$renderer4.push(`<!----></div> <div class="text-left input-group"><label for="projectDesc" class="block text-sm font-medium mb-1" style="text-align: start;">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).onboarding.projectDescLabel)}</label> <textarea id="projectDesc" class="custom-textarea w-full svelte-19g92rv" rows="2"${attr("placeholder", store_get($$store_subs ??= {}, "$dict", dict).onboarding.projectDescPlaceholder)}>`);
            const $$body = escape_html(projectDesc);
            if ($$body) {
              $$renderer4.push(`${$$body}`);
            }
            $$renderer4.push(`</textarea></div> <div class="text-left">`);
            Input($$renderer4, {
              label: store_get($$store_subs ??= {}, "$dict", dict).onboarding.projectDomainLabel,
              placeholder: store_get($$store_subs ??= {}, "$dict", dict).onboarding.projectDomainPlaceholder,
              get value() {
                return projectDomain;
              },
              set value($$value) {
                projectDomain = $$value;
                $$settled = false;
              }
            });
            $$renderer4.push(`<!----></div> <div class="flex justify-between items-center mt-4"><span class="step-indicator svelte-19g92rv">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).onboarding.step1of3)}</span> `);
            Button($$renderer4, {
              type: "submit",
              variant: "primary",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$dict", dict).continue)} `);
                Arrow_right($$renderer5, { size: 18, class: "rtl-flip" });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div></form></div>`);
          }
          $$renderer4.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer) {
  $$renderer.push(`<div class="onboarding-layout-wrapper min-h-screen w-full flex items-center justify-center svelte-fpvdp2">`);
  Onboarding($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _page as default
};
