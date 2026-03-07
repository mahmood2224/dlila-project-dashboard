<script>
    export let padding = "1.5rem";
    export let glass = true;
    export let className = "";
    export let hoverable = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="card {className}"
    class:glass-panel={glass}
    class:hoverable
    style="padding: {padding};"
    on:click
    on:keydown
>
    <slot />
</div>

<style>
    .card {
        border-radius: var(--radius-lg);
        background: var(--surface-bg);
        border: 1px solid var(--surface-border);
        transition: all var(--transition-smooth);
        position: relative;
        overflow: hidden;
    }

    .card:not(.glass-panel) {
        box-shadow: var(--shadow-sm);
    }

    .hoverable {
        cursor: pointer;
    }
    .hoverable:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-lg);
        border-color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.2
        );
    }
</style>
