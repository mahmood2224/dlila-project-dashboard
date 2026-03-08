<script>
    export let id = "";
    export let placeholder = "";
    export let value = "";
    export let label = "";
    export let rows = 4;
</script>

<div class="input-group">
    {#if label}
        <label
            for={id}
            class="text-sm font-medium mb-2 inline-block"
            style="text-align: start;">{label}</label
        >
    {/if}
    <div class="input-wrapper">
        <textarea {id} {placeholder} {rows} bind:value class="custom-textarea"
        ></textarea>
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
        width: 100%;
    }

    .custom-textarea {
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
        resize: vertical;
        min-height: 80px;
    }

    .custom-textarea:focus {
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
