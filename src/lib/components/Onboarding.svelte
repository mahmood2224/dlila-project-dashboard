<script>
    import { dict, currentProject } from "$lib/store.js";
    import { goto } from "$app/navigation";
    import Card from "./ui/Card.svelte";
    import Button from "./ui/Button.svelte";
    import Input from "./ui/Input.svelte";
    import {
        Building2,
        Globe2,
        MessageSquare,
        BookOpen,
        CheckCircle2,
        ArrowRight,
        ArrowLeft,
    } from "lucide-svelte";

    let step = 1;
    // Step 1 Details
    let projName = "";
    let projDomain = "";
    let projDesc = "";

    // Step 2 Details
    let selectedPersona = "support"; // support, internal

    // Validation
    $: projNameValid = projName.trim().length > 2;

    function nextStep() {
        if (step < 3) step++;
    }

    function prevStep() {
        if (step > 1) step--;
    }

    function finishOnboarding() {
        currentProject.set({
            name: projName,
            domain: projDomain,
            persona: selectedPersona,
            description: projDesc,
        });
        goto("/analytics"); // Route straight to analytics layout
    }
</script>

<div class="onboarding-container">
    <div class="max-w-2xl w-full flex-col gap-6 fade-in">
        <!-- Progress Indicator -->
        <div class="progress-bar-container">
            <div
                class="flex justify-between text-sm font-medium mb-2 pr-1 pl-1 text-muted"
            >
                <span>{$dict.onboarding.title}</span>
                <span>{step} / 3</span>
            </div>
            <div class="track">
                <div class="fill" style="width: {(step / 3) * 100}%"></div>
            </div>
        </div>

        <!-- Main Card -->
        <Card padding="3rem" className="flex-col gap-8">
            {#if step === 1}
                <div class="step-content fade-in">
                    <div class="text-center mb-8">
                        <div class="icon-circle mx-auto mb-4">
                            <Building2 size={24} class="text-primary" />
                        </div>
                        <h2 class="text-2xl font-bold mb-2">
                            {$dict.onboarding.pane1Title}
                        </h2>
                        <p class="text-muted">{$dict.onboarding.pane1Sub}</p>
                    </div>

                    <div class="flex-col gap-5">
                        <Input
                            id="projName"
                            label={$dict.onboarding.projectNameLabel}
                            placeholder={$dict.onboarding
                                .projectNamePlaceholder}
                            bind:value={projName}
                        />

                        <!-- Project Description with text-align: start fix -->
                        <div class="input-group">
                            <label
                                for="projectDesc"
                                class="text-sm font-medium mb-1 inline-block"
                                style="text-align: start;"
                            >
                                {$dict.onboarding.projectDescLabel}
                            </label>
                            <textarea
                                id="projectDesc"
                                class="custom-textarea w-full"
                                rows="3"
                                placeholder={$dict.onboarding
                                    .projectDescPlaceholder}
                                bind:value={projDesc}
                            ></textarea>
                        </div>

                        <Input
                            id="projDomain"
                            label={$dict.onboarding.projectDomainLabel}
                            placeholder={$dict.onboarding
                                .projectDomainPlaceholder}
                            bind:value={projDomain}
                            icon={Globe2}
                        />
                    </div>
                </div>
            {:else if step === 2}
                <div class="step-content fade-in">
                    <div class="text-center mb-8">
                        <div class="icon-circle mx-auto mb-4">
                            <MessageSquare size={24} class="text-primary" />
                        </div>
                        <h2 class="text-2xl font-bold mb-2">
                            {$dict.onboarding.pane2Title}
                        </h2>
                        <p class="text-muted">{$dict.onboarding.pane2Sub}</p>
                    </div>

                    <div class="grid gap-4">
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <div
                            class="selection-card {selectedPersona === 'support'
                                ? 'selected'
                                : ''}"
                            on:click={() => (selectedPersona = "support")}
                        >
                            <div class="radio-indicator"></div>
                            <div class="card-icon">
                                <MessageSquare size={20} />
                            </div>
                            <div class="card-text text-left">
                                <h3 class="font-semibold text-lg">
                                    {$dict.onboarding.personaSupport}
                                </h3>
                                <p class="text-sm text-muted">
                                    {$dict.onboarding.personaSupportDesc}
                                </p>
                            </div>
                        </div>

                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <div
                            class="selection-card {selectedPersona ===
                            'internal'
                                ? 'selected'
                                : ''}"
                            on:click={() => (selectedPersona = "internal")}
                        >
                            <div class="radio-indicator"></div>
                            <div class="card-icon"><BookOpen size={20} /></div>
                            <div class="card-text text-left">
                                <h3 class="font-semibold text-lg">
                                    {$dict.onboarding.personaInternal}
                                </h3>
                                <p class="text-sm text-muted">
                                    {$dict.onboarding.personaInternalDesc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            {:else}
                <div class="step-content fade-in text-center">
                    <div class="icon-circle success mx-auto mb-6">
                        <CheckCircle2 size={32} />
                    </div>
                    <h2 class="text-3xl font-bold mb-4">
                        {$dict.onboarding.pane3Title}
                    </h2>
                    <p
                        class="text-muted mb-8 max-w-md mx-auto line-height-relaxed"
                    >
                        {$dict.onboarding.pane3Sub}
                    </p>

                    <div class="summary-box mb-8 text-left mx-auto max-w-sm">
                        <div class="summary-item border-b">
                            <span class="text-muted">Project Name:</span>
                            <span class="font-semibold">{projName}</span>
                        </div>
                        <div class="summary-item">
                            <span class="text-muted">AI Role:</span>
                            <span class="font-semibold capitalize"
                                >{selectedPersona} Agent</span
                            >
                        </div>
                    </div>
                </div>
            {/if}

            <!-- Footer Controls -->
            <div class="flex justify-between mt-8 pt-6 border-t items-center">
                {#if step > 1}
                    <Button variant="ghost" on:click={prevStep}>
                        <ArrowLeft size={16} class="mr-2" />
                        {$dict.back}
                    </Button>
                {:else}
                    <div></div>
                {/if}

                {#if step < 3}
                    <Button
                        variant="primary"
                        on:click={nextStep}
                        class={!projNameValid && step === 1
                            ? "opacity-50 pointer-events-none"
                            : ""}
                    >
                        {$dict.continue}
                        <ArrowRight size={16} class="ml-2" />
                    </Button>
                {:else}
                    <Button
                        variant="primary"
                        on:click={finishOnboarding}
                        className="px-8"
                    >
                        {$dict.onboarding.goToDashboard}
                    </Button>
                {/if}
            </div>
        </Card>
    </div>
</div>

<style>
    .onboarding-container {
        width: 100%;
        height: 100%;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
    }

    .max-w-2xl {
        max-width: 42rem;
    }
    .max-w-md {
        max-width: 28rem;
    }
    .max-w-sm {
        max-width: 24rem;
    }

    .mx-auto {
        margin-left: auto;
        margin-right: auto;
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
    .mb-8 {
        margin-bottom: 2rem;
    }
    .mt-8 {
        margin-top: 2rem;
    }
    .pt-6 {
        padding-top: 1.5rem;
    }
    .px-8 {
        padding-left: 2rem;
        padding-right: 2rem;
    }
    .gap-4 {
        gap: 1rem;
    }
    .gap-5 {
        gap: 1.25rem;
    }
    .gap-6 {
        gap: 1.5rem;
    }
    .gap-8 {
        gap: 2rem;
    }

    .text-center {
        text-align: center;
    }
    .text-left {
        text-align: left;
    }

    .text-3xl {
        font-size: 1.875rem;
    }
    .text-2xl {
        font-size: 1.5rem;
    }
    .text-lg {
        font-size: 1.125rem;
    }
    .text-sm {
        font-size: 0.875rem;
    }

    .font-bold {
        font-weight: 700;
    }
    .font-semibold {
        font-weight: 600;
    }
    .font-medium {
        font-weight: 500;
    }

    .capitalize {
        text-transform: capitalize;
    }
    .line-height-relaxed {
        line-height: 1.625;
    }

    .border-t {
        border-top: 1px solid var(--surface-border);
    }
    .border-b {
        border-bottom: 1px solid var(--surface-border);
    }

    .text-muted {
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.6
        );
    }
    :global(.text-primary) {
        color: var(--primary-color);
    }

    .inline-block {
        display: inline-block;
    }

    /* Custom Textarea for Description */
    .input-group {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .custom-textarea {
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
        resize: vertical;
        transition: border-color var(--transition-fast);
        box-sizing: border-box;
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

    /* Progress Bar */
    .progress-bar-container {
        width: 100%;
    }
    .track {
        height: 6px;
        background: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.1
        );
        border-radius: var(--radius-full);
        overflow: hidden;
    }
    .fill {
        height: 100%;
        background: var(--primary-color);
        transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Icon Circles */
    .icon-circle {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: hsla(
            var(--c-primary-h),
            var(--c-primary-s),
            var(--c-primary-l),
            0.1
        );
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .icon-circle.success {
        background: hsla(142, 71%, 45%, 0.1);
        color: #22c55e;
    }

    /* Selection Cards */
    .grid {
        display: grid;
        grid-template-columns: 1fr;
    }
    @media (min-width: 640px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .selection-card {
        padding: 1.5rem;
        border: 2px solid var(--surface-border);
        border-radius: var(--radius-lg);
        background: var(--surface-bg);
        cursor: pointer;
        transition: all var(--transition-fast);
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: relative;
    }
    .selection-card:hover {
        border-color: hsla(
            var(--c-primary-h),
            var(--c-primary-s),
            var(--c-primary-l),
            0.4
        );
        transform: translateY(-2px);
    }

    .selection-card.selected {
        border-color: var(--primary-color);
        background: hsla(
            var(--c-primary-h),
            var(--c-primary-s),
            var(--c-primary-l),
            0.05
        );
    }

    .radio-indicator {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid var(--surface-border);
        transition: all var(--transition-fast);
    }
    :global([dir="rtl"]) .radio-indicator {
        right: auto;
        left: 1rem;
    }

    .selection-card.selected .radio-indicator {
        border-color: var(--primary-color);
        border-width: 6px;
    }

    .card-icon {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        background: var(--surface-border);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-color);
    }
    .selection-card.selected .card-icon {
        background: var(--primary-color);
        color: white;
    }

    /* Summary Box */
    .summary-box {
        background: var(--surface-bg);
        border: 1px solid var(--surface-border);
        border-radius: var(--radius-md);
        display: flex;
        flex-direction: column;
    }
    .summary-item {
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* RTL specific overrides */
    :global([dir="rtl"]) .text-left {
        text-align: right;
    }
    :global([dir="rtl"]) .mr-2 {
        margin-right: 0;
        margin-left: 0.5rem;
    }
    :global([dir="rtl"]) .ml-2 {
        margin-left: 0;
        margin-right: 0.5rem;
    }

    .fade-in {
        animation: fadeIn 0.4s ease-out;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
