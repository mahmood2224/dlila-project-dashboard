<script>
    export let type = "text";
    export let id = "";
    export let placeholder = "";
    export let value = "";
    export let label = "";
    export let icon = null;
</script>

<div class="input-group">
    {#if label}
        <label
            for={id}
            class="text-sm font-medium mb-1 inline-block"
            style="text-align: start;">{label}</label
        >
    {/if}
    <div class="input-wrapper">
        {#if icon}
            <div class="icon-container">
                <svelte:component this={icon} size={18} />
            </div>
        {/if}
        <input
            {type}
            {id}
            {placeholder}
            bind:value
            class="custom-input {icon ? 'has-icon' : ''}"
        />
    </div>
</div>

<style>
    .input-group {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 1rem;
    }

    .input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
    }

    .icon-container {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.5
        );
    }

    /* LTR Support */
    :global([dir="ltr"]) .icon-container {
        left: 1rem;
    }
    :global([dir="ltr"]) .has-icon {
        padding-left: 2.75rem !important;
    }

    /* RTL Support */
    :global([dir="rtl"]) .icon-container {
        right: 1rem;
    }
    :global([dir="rtl"]) .has-icon {
        padding-right: 2.75rem !important;
    }

    .custom-input {
        width: 100%;
        padding: 0.75rem 1rem;
        font-family: inherit;
        font-size: 1rem;
        color: var(--text-color);
        background: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.05
        );
        border: 1px solid var(--surface-border);
        border-radius: var(--radius-md);
        outline: none;
        transition: border-color var(--transition-fast);
        box-sizing: border-box;
    }

    .custom-input:focus {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 2px
            hsla(
                var(--c-primary-h),
                var(--c-primary-s),
                var(--c-primary-l),
                0.2
            );
    }
</style>
