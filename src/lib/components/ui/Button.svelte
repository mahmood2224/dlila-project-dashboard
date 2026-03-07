<script>
    export let variant = "primary"; // primary, secondary, outline, ghost
    export let size = "md"; // sm, md, lg
    export let type = "button";
    export let className = "";
    export let fullWidth = false;
</script>

<button
    {type}
    class="btn btn-{variant} btn-{size} {fullWidth ? 'w-full' : ''} {className}"
    on:click
>
    <slot />
</button>

<style>
    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-family: inherit;
        font-weight: 500;
        border-radius: var(--radius-md);
        transition: all var(--transition-fast);
        cursor: pointer;
        outline: none;
        box-sizing: border-box;
    }

    .w-full {
        width: 100%;
    }

    /* Sizes */
    .btn-sm {
        padding: 0.5rem 0.75rem;
        font-size: 0.875rem;
    }
    .btn-md {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
    }
    .btn-lg {
        padding: 1rem 2rem;
        font-size: 1.125rem;
    }

    /* Variants */
    .btn-primary {
        background: var(--primary-color);
        color: white;
        border: 1px solid transparent;
    }
    .btn-primary:hover {
        background: hsla(var(--c-primary-h), var(--c-primary-s), 75%);
        box-shadow: 0 4px 12px -2px hsla(var(--c-primary-h), var(--c-primary-s), var(--c-primary-l), 0.4);
    }

    .btn-secondary {
        background: var(--surface-bg);
        color: var(--text-color);
        border: 1px solid var(--surface-border);
    }
    .btn-secondary:hover {
        background: var(--surface-hover);
    }

    .btn-outline {
        background: transparent;
        color: var(--text-color);
        border: 1px solid var(--surface-border);
    }
    .btn-outline:hover {
        background: var(--surface-hover);
    }

    .btn-ghost {
        background: transparent;
        color: var(--text-color);
        border: 1px solid transparent;
    }
    .btn-ghost:hover {
        background: var(--surface-bg);
    }
</style>
