<script>
    import { dict } from "$lib/store.js";
    import Card from "../ui/Card.svelte";
    import Button from "../ui/Button.svelte";
    import ProgressBar from "../ui/ProgressBar.svelte";
    import { Check, Zap, Building2, Package } from "lucide-svelte";

    // Simple reactive mock data
    let currentPlan = "starter"; // starter, pro, enterprise

    const plans = [
        {
            id: "starter",
            icon: Package,
            name: "Starter",
            price: "$0",
            features: [
                "1 Project",
                "500 Documents",
                "Basic Analytics",
                "Community Support",
            ],
        },
        {
            id: "pro",
            icon: Zap,
            name: "Pro Plan",
            price: "$49",
            features: [
                "Unlimited Projects",
                "5,000 Documents",
                "Advanced Analytics",
                "Priority Support",
                "Custom Branding",
            ],
        },
        {
            id: "enterprise",
            icon: Building2,
            name: "Enterprise",
            price: "Custom",
            features: [
                "Unlimited Everything",
                "Dedicated Success Manager",
                "SLA Guarantee",
                "On-Premise Option",
            ],
        },
    ];
</script>

<div class="billing-container fade-in">
    <div class="header mb-8">
        <h2 class="text-2xl font-bold mb-2">{$dict.billing.title}</h2>
        <p class="text-muted">{$dict.billing.subTitle}</p>
    </div>

    <!-- Usage Quotas Section -->
    <section class="mb-10">
        <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                ><path d="M12 20V10"></path><path d="M18 20V4"></path><path
                    d="M6 20v-4"
                ></path></svg
            >
            {$dict.billing.quotaMonitoring}
        </h3>

        <div class="quota-grid">
            <Card padding="1.5rem" className="flex-col gap-4">
                <div
                    class="flex justify-between items-center bg-surface p-3 rounded disabled"
                >
                    <span class="font-semibold">{$dict.billing.docUploads}</span
                    >
                    <span class="text-sm">420 / 500</span>
                </div>
                <ProgressBar
                    value={420}
                    max={500}
                    showPercent={false}
                    color="#f59e0b"
                />
                <p class="text-xs text-muted">
                    {$dict.billing.remaining}
                    <span class="text-primary font-bold">80</span> docs under current
                    plan.
                </p>
            </Card>

            <Card padding="1.5rem" className="flex-col gap-4">
                <div
                    class="flex justify-between items-center bg-surface p-3 rounded disabled"
                >
                    <span class="font-semibold"
                        >{$dict.billing.vectorStorage}</span
                    >
                    <span class="text-sm">1.2GB / 5GB</span>
                </div>
                <ProgressBar
                    value={1.2}
                    max={5.0}
                    showPercent={false}
                    color="#22c55e"
                />
                <p class="text-xs text-muted">
                    {$dict.billing.limit} 5GB. Consider upgrading for more knowledge
                    capacity.
                </p>
            </Card>
        </div>
    </section>

    <!-- Subscription Plans Section -->
    <section>
        <h3 class="text-xl font-bold mb-6">{$dict.billing.availablePlans}</h3>

        <div class="plan-grid">
            {#each plans as plan}
                <Card
                    padding="2rem"
                    className="plan-card flex-col h-full {currentPlan ===
                    plan.id
                        ? 'active-plan'
                        : ''} {plan.id === 'pro' ? 'pro-highlight' : ''}"
                >
                    {#if currentPlan === plan.id}
                        <div
                            class="current-badge text-xs font-bold uppercase tracking-wider"
                        >
                            {$dict.billing.currentPlan}
                        </div>
                    {/if}

                    <div class="mb-6">
                        <svelte:component
                            this={plan.icon}
                            size={32}
                            class="mb-4 {plan.id === 'pro'
                                ? 'text-primary'
                                : 'text-muted'}"
                        />
                        <h4 class="text-xl font-bold mb-1">{plan.name}</h4>
                        <div class="flex items-end gap-1">
                            <span class="text-3xl font-extrabold"
                                >{plan.price}</span
                            >
                            {#if plan.price !== "Custom"}
                                <span class="text-muted text-sm mb-1"
                                    >{$dict.billing.perMonth}</span
                                >
                            {/if}
                        </div>
                    </div>

                    <div class="border-t pt-4 mb-8 flex-1">
                        <p class="text-sm font-semibold mb-3">
                            {$dict.billing.features}:
                        </p>
                        <ul class="feature-list flex-col gap-3">
                            {#each plan.features as feature}
                                <li
                                    class="flex items-start gap-2 text-sm text-muted"
                                >
                                    <Check
                                        size={16}
                                        class="text-success shrink-0 mt-0.5"
                                    />
                                    <span>{feature}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>

                    <div class="mt-auto">
                        {#if currentPlan === plan.id}
                            <Button
                                variant="secondary"
                                fullWidth
                                className="pointer-events-none opacity-50"
                                >Active</Button
                            >
                        {:else if plan.id === "enterprise"}
                            <Button variant="outline" fullWidth
                                >{$dict.billing.contactSales}</Button
                            >
                        {:else}
                            <Button variant="primary" fullWidth
                                >{$dict.billing.upgrade}</Button
                            >
                        {/if}
                    </div>
                </Card>
            {/each}
        </div>
    </section>
</div>

<style>
    .billing-container {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
    }

    .header {
        flex-shrink: 0;
    }

    .mb-10 {
        margin-bottom: 2.5rem;
    }
    .mb-8 {
        margin-bottom: 2rem;
    }
    .mb-6 {
        margin-bottom: 1.5rem;
    }
    .mb-4 {
        margin-bottom: 1rem;
    }
    .mb-3 {
        margin-bottom: 0.75rem;
    }
    .mb-2 {
        margin-bottom: 0.5rem;
    }
    .mb-1 {
        margin-bottom: 0.25rem;
    }
    .pt-4 {
        padding-top: 1rem;
    }
    .p-3 {
        padding: 0.75rem;
    }
    .mt-auto {
        margin-top: auto;
    }
    .mt-0\.5 {
        margin-top: 0.125rem;
    }

    .gap-1 {
        gap: 0.25rem;
    }
    .gap-2 {
        gap: 0.5rem;
    }
    .gap-3 {
        gap: 0.75rem;
    }
    .gap-4 {
        gap: 1rem;
    }

    .text-3xl {
        font-size: 1.875rem;
    }
    .text-2xl {
        font-size: 1.5rem;
    }
    .text-xl {
        font-size: 1.25rem;
    }
    .text-sm {
        font-size: 0.875rem;
    }
    .text-xs {
        font-size: 0.75rem;
    }

    .font-bold {
        font-weight: 700;
    }
    .font-semibold {
        font-weight: 600;
    }
    .font-extrabold {
        font-weight: 800;
    }

    .uppercase {
        text-transform: uppercase;
    }
    .tracking-wider {
        letter-spacing: 0.05em;
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
    :global(.text-success) {
        color: #22c55e;
    }
    .shrink-0 {
        flex-shrink: 0;
    }

    .border-t {
        border-top: 1px solid var(--surface-border);
    }
    .bg-surface {
        background: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.03
        );
    }
    .rounded {
        border-radius: var(--radius-md);
    }

    .quota-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    @media (min-width: 768px) {
        .quota-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .plan-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        align-items: stretch;
    }
    @media (min-width: 768px) {
        .plan-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    /* Plan Cards Styling */
    :global(.plan-card) {
        position: relative;
        overflow: visible !important; /* Allow badge to pop out */
        display: flex;
        flex-direction: column;
    }

    :global(.active-plan) {
        border-color: var(--primary-color) !important;
        box-shadow: 0 0 0 1px var(--primary-color) !important;
    }

    :global(.pro-highlight) {
        background: linear-gradient(
            180deg,
            hsla(
                    var(--c-primary-h),
                    var(--c-primary-s),
                    var(--c-primary-l),
                    0.05
                )
                0%,
            var(--surface-bg) 100%
        ) !important;
        border-color: hsla(
            var(--c-primary-h),
            var(--c-primary-s),
            var(--c-primary-l),
            0.3
        ) !important;
    }

    .current-badge {
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary-color);
        color: white;
        padding: 0.25rem 1rem;
        border-radius: var(--radius-full);
        box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.2);
    }

    .feature-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
    }

    .pointer-events-none {
        pointer-events: none;
    }
    .opacity-50 {
        opacity: 0.5;
    }
    .flex-1 {
        flex: 1;
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
