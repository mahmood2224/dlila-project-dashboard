<script>
    import { dict } from "$lib/store.js";
    import Card from "../ui/Card.svelte";
    import ProgressBar from "../ui/ProgressBar.svelte";
    import {
        Activity,
        HardDrive,
        Files,
        DollarSign,
        AlertTriangle,
    } from "lucide-svelte";
    import { onMount } from "svelte";

    // Chart mock data setup
    let bars = [];
    const DAYS = 7;

    onMount(() => {
        // Generate random data for the bar chart
        for (let i = 0; i < DAYS; i++) {
            const val = Math.floor(Math.random() * 80) + 20; // 20-100% capacity
            bars.push({
                height: val,
                label: `Day ${i + 1}`,
                tokens: Math.floor((val / 100) * 15000),
            });
        }
        bars = [...bars]; // trigger reactivity
    });
</script>

<div class="usage-container fade-in">
    <div class="header mb-8">
        <h2 class="text-2xl font-bold mb-2">{$dict.usageView.title}</h2>
        <p class="text-muted">{$dict.usageView.subTitle}</p>
    </div>

    <!-- Top Stats -->
    <div class="stats-grid mb-8">
        <Card padding="1.5rem" className="flex items-center gap-4">
            <div class="stat-icon bg-primary-light">
                <Activity size={24} class="text-primary" />
            </div>
            <div>
                <p class="text-sm text-muted mb-1">Total Tokens Used</p>
                <div class="flex items-baseline gap-2">
                    <h3 class="text-2xl font-bold">128.4k</h3>
                    <span class="text-xs text-muted">/ 1M Limit</span>
                </div>
            </div>
        </Card>

        <Card padding="1.5rem" className="flex items-center gap-4">
            <div class="stat-icon bg-success-light">
                <DollarSign size={24} class="text-success" />
            </div>
            <div>
                <p class="text-sm text-muted mb-1">Estimated Cost</p>
                <div class="flex items-baseline gap-2">
                    <h3 class="text-2xl font-bold">$42.50</h3>
                    <span class="text-xs text-success font-medium"
                        >+$1.20 this week</span
                    >
                </div>
            </div>
        </Card>

        <Card padding="1.5rem" className="flex items-center gap-4">
            <div class="stat-icon bg-warning-light">
                <Files size={24} class="text-warning" />
            </div>
            <div>
                <p class="text-sm text-muted mb-1">Documents Indexed</p>
                <div class="flex items-baseline gap-2">
                    <h3 class="text-2xl font-bold">420</h3>
                    <span class="text-xs text-muted">/ 500 limit</span>
                </div>
            </div>
        </Card>
    </div>

    <div class="main-grid">
        <!-- Daily Consumption Chart -->
        <Card padding="2rem" className="chart-card">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-lg font-bold">Daily Token Consumption</h3>
                <span class="badge">Last 7 Days</span>
            </div>

            <div class="bar-chart-container">
                <div class="chart-y-axis">
                    <span>15k</span>
                    <span>10k</span>
                    <span>5k</span>
                    <span>0</span>
                </div>

                <div class="chart-bars">
                    {#each bars as bar}
                        <div class="bar-wrapper">
                            <!-- Tooltip mock -->
                            <div class="bar-tooltip text-xs">
                                {bar.tokens} tokens
                            </div>
                            <div
                                class="bar"
                                style="height: {bar.height}%"
                            ></div>
                            <span class="bar-label">{bar.label}</span>
                        </div>
                    {/each}
                </div>
            </div>
        </Card>

        <!-- Hard Quotas -->
        <Card padding="2rem" className="quotas-card bg-surface flex-col gap-6">
            <h3 class="text-lg font-bold flex items-center gap-2 border-b pb-4">
                <HardDrive size={18} /> Hard Quotas
            </h3>

            <!-- Quota Item -->
            <div>
                <div class="flex justify-between items-center mb-2">
                    <span class="font-semibold text-sm"
                        >Monthly Token Operations</span
                    >
                    <span
                        class="text-xs font-medium text-warning flex items-center gap-1"
                    >
                        <AlertTriangle size={12} /> Approaching Limit
                    </span>
                </div>
                <ProgressBar
                    value={850000}
                    max={1000000}
                    showPercent={false}
                    color="#f59e0b"
                />
                <p class="text-xs text-muted mt-2">
                    850k / 1M. If you hit this limit, API calls will be
                    rejected.
                </p>
            </div>

            <!-- Quota Item -->
            <div>
                <div class="flex justify-between items-center mb-2">
                    <span class="font-semibold text-sm"
                        >Vector Database Storage</span
                    >
                    <span class="text-xs text-muted">1.2 GB / 5 GB</span>
                </div>
                <ProgressBar
                    value={1.2}
                    max={5.0}
                    showPercent={false}
                    color="#22c55e"
                />
                <p class="text-xs text-muted mt-2">
                    Delete old documents to free up space.
                </p>
            </div>
        </Card>
    </div>
</div>

<style>
    .usage-container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }

    .stats-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    @media (min-width: 768px) {
        .stats-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .main-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    @media (min-width: 1024px) {
        .main-grid {
            grid-template-columns: 2fr 1fr;
        }
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
    .mb-2 {
        margin-bottom: 0.5rem;
    }
    .mb-1 {
        margin-bottom: 0.25rem;
    }
    .mt-2 {
        margin-top: 0.5rem;
    }
    .pb-4 {
        padding-bottom: 1rem;
    }
    .gap-1 {
        gap: 0.25rem;
    }
    .gap-2 {
        gap: 0.5rem;
    }
    .gap-4 {
        gap: 1rem;
    }
    .gap-6 {
        gap: 1.5rem;
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
    .text-xs {
        font-size: 0.75rem;
    }

    .font-bold {
        font-weight: 700;
    }
    .font-medium {
        font-weight: 500;
    }
    .font-semibold {
        font-weight: 600;
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
    :global(.text-warning) {
        color: #f59e0b;
    }

    .bg-primary-light {
        background: hsla(
            var(--c-primary-h),
            var(--c-primary-s),
            var(--c-primary-l),
            0.1
        );
    }
    .bg-success-light {
        background: hsla(142, 71%, 45%, 0.1);
    }
    .bg-warning-light {
        background: hsla(38, 92%, 50%, 0.1);
    }
    .bg-surface {
        background: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.02
        );
    }

    .border-b {
        border-bottom: 1px solid var(--surface-border);
    }

    .stat-icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .badge {
        padding: 0.25rem 0.75rem;
        background: var(--surface-bg);
        border: 1px solid var(--surface-border);
        border-radius: var(--radius-full);
        font-size: 0.75rem;
        font-weight: 600;
    }

    /* Bar Chart Custom Implementation */
    .bar-chart-container {
        display: flex;
        height: 240px;
        gap: 1rem;
        margin-top: 1.5rem;
    }

    .chart-y-axis {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 2rem; /* Save space for x-axis labels */
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.5
        );
        font-size: 0.75rem;
        text-align: right;
        width: 30px;
        flex-shrink: 0;
    }

    .chart-bars {
        flex: 1;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        position: relative;
        padding-bottom: 2rem;
        border-bottom: 1px solid var(--surface-border);
    }
    /* Grid Lines Overlay */
    .chart-bars::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 2rem;
        background-image: linear-gradient(
            to bottom,
            var(--surface-border) 1px,
            transparent 1px
        );
        background-size: 100% 33.33%;
        pointer-events: none;
        z-index: 0;
    }

    .bar-wrapper {
        position: relative;
        width: 10%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        z-index: 1;
    }

    .bar {
        width: 100%;
        max-width: 32px;
        background: var(--primary-color);
        border-radius: 4px 4px 0 0;
        transition:
            height 1s cubic-bezier(0.4, 0, 0.2, 1),
            background 0.2s;
        cursor: pointer;
    }
    .bar:hover {
        background: hsla(var(--c-primary-h), var(--c-primary-s), 75%);
    }

    .bar-label {
        position: absolute;
        bottom: -2rem;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.75rem;
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.6
        );
        white-space: nowrap;
    }

    .bar-tooltip {
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--text-color);
        color: var(--bg-color);
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius-sm);
        opacity: 0;
        transition: opacity var(--transition-fast);
        pointer-events: none;
        font-weight: 600;
        white-space: nowrap;
    }
    .bar-wrapper:hover .bar-tooltip {
        opacity: 1;
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
