import "clsx";
import { c as store_get, e as escape_html, u as unsubscribe_stores, h as attr_class, f as attr, i as stringify } from "../../../../chunks/index2.js";
import { c as currentProject, d as dict } from "../../../../chunks/store.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/root.js";
import "../../../../chunks/state.svelte.js";
import { B as Button } from "../../../../chunks/Button.js";
import { C as Card } from "../../../../chunks/Card.js";
import { S as Settings } from "../../../../chunks/settings.js";
import { U as Users } from "../../../../chunks/users.js";
import { S as Shield } from "../../../../chunks/shield.js";
function Settings_1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let projectName = store_get($$store_subs ??= {}, "$currentProject", currentProject)?.name || "";
    let description = "Description of the AI agent for managing knowledge documents.";
    $$renderer2.push(`<div class="settings-view h-full flex-col gap-6 fade-in pr-2 overflow-y-auto svelte-f76bta"><div class="header-section"><h2 class="text-xl font-semibold mb-1 svelte-f76bta">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).settingsView.title || "Project Settings")}</h2> <p class="text-muted svelte-f76bta">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).settingsView.subTitle || "Manage your project details, users, and security configuration.")}</p></div> <div class="grid grid-cols-1 lg-grid-cols-4 gap-6 svelte-f76bta">`);
    Card($$renderer2, {
      padding: "1rem",
      glass: true,
      className: "tabs-card lg-col-span-1 flex-col gap-2",
      children: ($$renderer3) => {
        $$renderer3.push(`<button${attr_class(`tab-btn ${stringify("active")}`, "svelte-f76bta")}>`);
        Settings($$renderer3, { size: 18 });
        $$renderer3.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$dict", dict).settingsView.general || "General")}</span></button> <button${attr_class(`tab-btn ${stringify("")}`, "svelte-f76bta")}>`);
        Users($$renderer3, { size: 18 });
        $$renderer3.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$dict", dict).settingsView.members || "Members")}</span></button> <button${attr_class(`tab-btn ${stringify("")}`, "svelte-f76bta")}>`);
        Shield($$renderer3, { size: 18 });
        $$renderer3.push(`<!----> <span>${escape_html(store_get($$store_subs ??= {}, "$dict", dict).settingsView.security || "Security")}</span></button>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> <div class="settings-content lg-col-span-3 svelte-f76bta">`);
    {
      $$renderer2.push("<!--[0-->");
      Card($$renderer2, {
        padding: "2rem",
        glass: true,
        className: "flex-col gap-6 fade-in",
        children: ($$renderer3) => {
          $$renderer3.push(`<div><h3 class="text-lg font-semibold mb-1 svelte-f76bta">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).settingsView.general || "General Settings")}</h3> <p class="text-sm text-muted svelte-f76bta">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).settingsView.generalSub || "Update fundamental project details.")}</p></div> <div class="form-group flex-col gap-2 svelte-f76bta"><label for="projName" class="text-sm font-medium svelte-f76bta">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).onboarding.projectTitle)}</label> <input type="text" id="projName"${attr("value", projectName)}${attr_class(`custom-input ${stringify(store_get($$store_subs ??= {}, "$dict", dict).settings ? "rtl-pad" : "")}`, "svelte-f76bta")} placeholder="My Project"/></div> <div class="form-group flex-col gap-2 svelte-f76bta"><label for="projDesc" class="text-sm font-medium svelte-f76bta">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).onboarding.projectDesc)}</label> <textarea id="projDesc"${attr_class(`custom-textarea ${stringify(store_get($$store_subs ??= {}, "$dict", dict).settings ? "rtl-pad" : "")}`, "svelte-f76bta")} rows="4" placeholder="Enter description...">`);
          const $$body = escape_html(description);
          if ($$body) {
            $$renderer3.push(`${$$body}`);
          }
          $$renderer3.push(`</textarea> <p class="text-xs text-muted svelte-f76bta">${escape_html(store_get($$store_subs ??= {}, "$dict", dict).settingsView.descHelper || "Maximum 50 words about the purpose of this AI.")}</p></div> <div class="flex justify-end pt-4 border-t svelte-f76bta">`);
          Button($$renderer3, {
            variant: "primary",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$dict", dict).billing.update)}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----></div>`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer) {
  Settings_1($$renderer);
}
export {
  _page as default
};
