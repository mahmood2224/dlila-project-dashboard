import { j as fallback, f as attr, h as attr_class, b as slot, l as bind_props, i as stringify } from "./index2.js";
function Button($$renderer, $$props) {
  let variant = fallback(
    $$props["variant"],
    "primary"
    // primary, secondary, outline, ghost
  );
  let size = fallback(
    $$props["size"],
    "md"
    // sm, md, lg
  );
  let type = fallback($$props["type"], "button");
  let disabled = fallback($$props["disabled"], false);
  let fullWidth = fallback($$props["fullWidth"], false);
  let className = fallback(
    $$props["className"],
    ""
    // expose external classes if needed
  );
  $$renderer.push(`<button${attr("type", type)}${attr("disabled", disabled, true)}${attr_class(`btn btn-${stringify(variant)} btn-${stringify(size)} ${stringify(className)}`, "svelte-1xko78n", { "w-full": fullWidth })}><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></button>`);
  bind_props($$props, { variant, size, type, disabled, fullWidth, className });
}
export {
  Button as B
};
