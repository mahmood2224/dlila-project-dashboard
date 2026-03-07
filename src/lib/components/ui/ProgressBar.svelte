<script>
    export let value = 0;
    export let max = 100;
    export let label = "";
    export let showPercent = true;
    export let color = "var(--primary-color)";
    export let height = "8px";

    $: percentage = Math.min(Math.max((value / max) * 100, 0), 100);
</script>

<div class="progress-wrapper">
    {#if label || showPercent}
        <div class="progress-labels">
            {#if label}
                <span class="progress-label">{label}</span>
            {/if}
            {#if showPercent}
                <span class="progress-percent">{Math.round(percentage)}%</span>
            {/if}
        </div>
    {/if}
    <div class="progress-track" style="height: {height};">
        <div
            class="progress-fill"
            style="width: {percentage}%; background-color: {color};"
        ></div>
    </div>
</div>

<style>
    .progress-wrapper {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
    }

    .progress-labels {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.875rem;
        font-weight: 500;
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.8
        );
    }

    .progress-track {
        width: 100%;
        background: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.1
        );
        border-radius: var(--radius-full);
        overflow: hidden;
    }

    .progress-fill {
        height: 100%;
        border-radius: var(--radius-full);
        transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
    }
</style>
