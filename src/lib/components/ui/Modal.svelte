<script>
    import { createEventDispatcher } from "svelte";
    import { fade, scale } from "svelte/transition";
    import Card from "./Card.svelte";
    import Button from "./Button.svelte";

    export let title = "";
    export let description = "";
    export let confirmText = "Confirm";
    export let cancelText = "Cancel";
    export let confirmVariant = "primary";
    export let open = false;
    export let width = "max-w-md"; // e.g., max-w-sm, max-w-md

    const dispatch = createEventDispatcher();

    function handleConfirm() {
        dispatch("confirm");
        open = false;
    }

    function handleCancel() {
        dispatch("cancel");
        open = false;
    }

    function handleBackdropClick(e) {
        if (e.target.classList.contains("modal-backdrop")) {
            handleCancel();
        }
    }
</script>

{#if open}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="modal-backdrop"
        transition:fade={{ duration: 150 }}
        on:click={handleBackdropClick}
    >
        <div
            class="modal-wrapper {width}"
            transition:scale={{ duration: 150, start: 0.95 }}
        >
            <Card padding="2rem" className="w-full flex-col">
                {#if $$slots.icon}
                    <div class="icon-wrapper mb-4">
                        <slot name="icon" />
                    </div>
                {/if}

                <h2 class="text-xl font-bold mb-2">{title}</h2>
                {#if description}
                    <p class="text-muted text-sm mb-6">{description}</p>
                {/if}

                <slot />

                <div class="flex flex-row gap-3 justify-end mt-6">
                    <Button variant="ghost" on:click={handleCancel}>
                        {cancelText}
                    </Button>
                    <Button variant={confirmVariant} on:click={handleConfirm}>
                        {confirmText}
                    </Button>
                </div>
            </Card>
        </div>
    </div>
{/if}

<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        background: hsla(0, 0%, 0%, 0.6);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
    }

    .modal-wrapper {
        width: 100%;
    }

    .max-w-sm {
        max-width: 24rem;
    }
    .max-w-md {
        max-width: 28rem;
    }
    .max-w-lg {
        max-width: 32rem;
    }

    .icon-wrapper {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.05
        );
    }

    .w-full {
        width: 100%;
    }
    .flex-col {
        display: flex;
        flex-direction: column;
    }
    .flex-row {
        display: flex;
        flex-direction: row;
    }
    .justify-end {
        justify-content: flex-end;
    }

    .gap-3 {
        gap: 0.75rem;
    }
    .mb-2 {
        margin-bottom: 0.5rem;
    }
    .mb-4 {
        margin-bottom: 1rem;
    }
    .mb-6 {
        margin-bottom: 1.5rem;
    }
    .mt-6 {
        margin-top: 1.5rem;
    }

    .text-xl {
        font-size: 1.25rem;
    }
    .text-sm {
        font-size: 0.875rem;
    }
    .font-bold {
        font-weight: 700;
    }

    .text-muted {
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.6
        );
        line-height: 1.5;
    }
</style>
