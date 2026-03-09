<script>
    import { dict, currentProject } from "$lib/store.js";
    import { api } from "$lib/api.js";
    import Card from "../ui/Card.svelte";
    import {
        Files,
        Network,
        Users,
        MessageSquare,
        TrendingUp,
        Clock,
        AlertCircle,
        FilePlus,
        Building,
    } from "lucide-svelte";

    let stats = {
        total_documents: 0,
        total_departments: 0,
        unique_clients: 0,
        total_conversations: 0,
        total_messages: 0,
        total_tokens_used: 0,
        total_cost_usd: 0.0,
    };
    let isLoading = true;

    async function loadAnalytics(projectId) {
        if (!projectId) return;
        isLoading = true;
        try {
            const data = await api.get(`/projects/${projectId}/analytics`);
            if (data) stats = data;
        } catch (e) {
            console.error("Failed to load analytics:", e);
        } finally {
            isLoading = false;
        }
    }

    $: if ($currentProject?.id) {
        loadAnalytics($currentProject.id);
    }
</script>

<div class="analytics-container fade-in">
    <div class="header mb-8">
        <h2 class="text-2xl font-bold mb-2">{$dict.analytics.overviewTitle}</h2>
        <p class="text-muted">{$dict.analytics.overviewSub}</p>
    </div>

    <!-- KPI Grid -->
    <div class="kpi-grid mb-8">
        <Card padding="1.5rem">
            <div class="flex justify-between items-start mb-4">
                <div class="kpi-icon">
                    <Files size={20} class="text-primary" />
                </div>
                <div class="trend positive">
                    <TrendingUp size={14} class="mr-1 inline" />
                    <span class="text-xs"
                        >{$dict.analytics.kpis.totalDocsTrend}</span
                    >
                </div>
            </div>
            <h3 class="text-3xl font-bold mb-1">
                {isLoading ? "..." : stats.total_documents.toLocaleString()}
            </h3>
            <p class="text-sm text-muted">{$dict.analytics.kpis.totalDocs}</p>
        </Card>

        <Card padding="1.5rem">
            <div class="flex justify-between items-start mb-4">
                <div class="kpi-icon">
                    <Network size={20} class="text-primary" />
                </div>
                <div class="trend text-muted">
                    <span class="text-xs"
                        >{$dict.analytics.kpis.departmentsTrend}</span
                    >
                </div>
            </div>
            <h3 class="text-3xl font-bold mb-1">
                {isLoading ? "..." : stats.total_departments.toLocaleString()}
            </h3>
            <p class="text-sm text-muted">{$dict.analytics.kpis.departments}</p>
        </Card>

        <Card padding="1.5rem">
            <div class="flex justify-between items-start mb-4">
                <div class="kpi-icon">
                    <Users size={20} class="text-primary" />
                </div>
                <div class="trend positive">
                    <TrendingUp size={14} class="mr-1 inline" />
                    <span class="text-xs"
                        >{$dict.analytics.kpis.uniqueClientsTrend}</span
                    >
                </div>
            </div>
            <h3 class="text-3xl font-bold mb-1">
                {isLoading ? "..." : stats.unique_clients.toLocaleString()}
            </h3>
            <p class="text-sm text-muted">
                {$dict.analytics.kpis.uniqueClients}
            </p>
        </Card>

        <Card padding="1.5rem">
            <div class="flex justify-between items-start mb-4">
                <div class="kpi-icon">
                    <MessageSquare size={20} class="text-primary" />
                </div>
                <div class="trend positive">
                    <TrendingUp size={14} class="mr-1 inline" />
                    <span class="text-xs"
                        >{$dict.analytics.kpis.totalConvsTrend}</span
                    >
                </div>
            </div>
            <h3 class="text-3xl font-bold mb-1">
                {isLoading ? "..." : stats.total_conversations.toLocaleString()}
            </h3>
            <p class="text-sm text-muted">{$dict.analytics.kpis.totalConvs}</p>
        </Card>
    </div>

    <!-- Main Content Grid -->
    <div class="main-grid">
        <!-- Token/Cost Chart View -->
        <Card padding="1.5rem" className="col-span-2 chart-card">
            <div class="flex justify-between items-center border-b pb-4 mb-4">
                <div>
                    <h3 class="font-bold">
                        {$dict.analytics.tokenConsumption}
                    </h3>
                    <p class="text-sm text-muted">{$dict.analytics.days30}</p>
                </div>
                <div class="text-right">
                    <p class="text-xs text-muted">{$dict.analytics.estCost}</p>
                    <h4 class="text-xl font-bold text-primary">
                        {isLoading
                            ? "..."
                            : `$${stats.total_cost_usd.toFixed(2)}`}
                    </h4>
                </div>
            </div>

            <div class="mock-chart mt-4">
                <!-- SVG Mock Chart -->
                <svg
                    width="100%"
                    height="200"
                    viewBox="0 0 600 200"
                    preserveAspectRatio="none"
                >
                    <!-- Grid Lines -->
                    <line
                        x1="0"
                        y1="180"
                        x2="600"
                        y2="180"
                        stroke="var(--surface-border)"
                        stroke-width="1"
                    />
                    <line
                        x1="0"
                        y1="135"
                        x2="600"
                        y2="135"
                        stroke="var(--surface-border)"
                        stroke-width="1"
                        stroke-dasharray="4"
                    />
                    <line
                        x1="0"
                        y1="90"
                        x2="600"
                        y2="90"
                        stroke="var(--surface-border)"
                        stroke-width="1"
                        stroke-dasharray="4"
                    />
                    <line
                        x1="0"
                        y1="45"
                        x2="600"
                        y2="45"
                        stroke="var(--surface-border)"
                        stroke-width="1"
                        stroke-dasharray="4"
                    />

                    <!-- Gradient Definition -->
                    <defs>
                        <linearGradient
                            id="chartGrad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="0%"
                                stop-color="var(--primary-color)"
                                stop-opacity="0.3"
                            />
                            <stop
                                offset="100%"
                                stop-color="var(--primary-color)"
                                stop-opacity="0"
                            />
                        </linearGradient>
                    </defs>

                    <!-- Chart Line & Fill -->
                    <path
                        class="chart-path-fill"
                        d="M0,150 Q50,170 100,120 T200,80 T300,100 T400,40 T500,60 T600,20 L600,180 L0,180 Z"
                        fill="url(#chartGrad)"
                    />
                    <path
                        class="chart-path-line"
                        d="M0,150 Q50,170 100,120 T200,80 T300,100 T400,40 T500,60 T600,20"
                        fill="none"
                        stroke="var(--primary-color)"
                        stroke-width="3"
                        stroke-linecap="round"
                    />
                </svg>
            </div>
        </Card>

        <!-- Recent Activity Feed -->
        <Card padding="1.5rem" className="activity-card">
            <div class="flex justify-between items-center border-b pb-4 mb-4">
                <h3 class="font-bold">{$dict.analytics.recentActivity}</h3>
                <button class="text-xs text-primary font-semibold hover-link">
                    {$dict.analytics.viewAll}
                </button>
            </div>

            <div class="activity-feed">
                <!-- Activity Item 1 -->
                <div class="activity-item">
                    <div class="activity-icon info text-primary">
                        <FilePlus size={16} />
                    </div>
                    <div class="activity-content">
                        <div class="flex justify-between">
                            <span class="badge"
                                >{$dict.analytics.activityNewDoc}</span
                            >
                            <span
                                class="text-xs text-muted flex items-center gap-1"
                                ><Clock size={12} /> 2m ago</span
                            >
                        </div>
                        <p class="text-sm mt-1">
                            {$dict.analytics.activityTypes.pdfParsed}
                        </p>
                    </div>
                </div>

                <!-- Activity Item 2 -->
                <div class="activity-item">
                    <div class="activity-icon warning">
                        <AlertCircle size={16} />
                    </div>
                    <div class="activity-content">
                        <div class="flex justify-between">
                            <span class="badge warning"
                                >{$dict.analytics.activityQuota}</span
                            >
                            <span
                                class="text-xs text-muted flex items-center gap-1"
                                ><Clock size={12} /> 14m ago</span
                            >
                        </div>
                        <p class="text-sm mt-1">
                            {$dict.analytics.activityTypes.costLimit}
                        </p>
                    </div>
                </div>

                <!-- Activity Item 3 -->
                <div class="activity-item pb-0 border-none">
                    <div class="activity-icon success">
                        <Building size={16} />
                    </div>
                    <div class="activity-content">
                        <div class="flex justify-between">
                            <span class="badge success"
                                >{$dict.analytics.activityDept}</span
                            >
                            <span
                                class="text-xs text-muted flex items-center gap-1"
                                ><Clock size={12} /> 1hr ago</span
                            >
                        </div>
                        <p class="text-sm mt-1">
                            Created isolated "Sales Q3" silo.
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    </div>
</div>

<style>
    .analytics-container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }

    .kpi-grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1.5rem;
    }
    @media (min-width: 640px) {
        .kpi-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (min-width: 1024px) {
        .kpi-grid {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    .main-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    @media (min-width: 1024px) {
        .main-grid {
            grid-template-columns: repeat(3, 1fr);
        }
        :global(.col-span-2) {
            grid-column: span 2;
        }
    }

    .mb-8 {
        margin-bottom: 2rem;
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
    .mt-4 {
        margin-top: 1rem;
    }
    .mt-1 {
        margin-top: 0.25rem;
    }
    .pb-4 {
        padding-bottom: 1rem;
    }

    .gap-1 {
        gap: 0.25rem;
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
    :global(.text-primary) {
        color: var(--primary-color);
    }
    .text-muted {
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.6
        );
    }

    .border-b {
        border-bottom: 1px solid var(--surface-border);
    }

    .kpi-icon {
        width: 40px;
        height: 40px;
        border-radius: 12px;
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

    .trend {
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius-full);
        background: var(--surface-bg);
        display: flex;
        align-items: center;
    }
    .trend.positive {
        color: #22c55e;
        background: hsla(142, 71%, 45%, 0.1);
    }
    :global(.inline) {
        display: inline-block;
    }
    :global(.mr-1) {
        margin-right: 0.25rem;
    }
    :global([dir="rtl"]) :global(.mr-1) {
        margin-right: 0;
        margin-left: 0.25rem;
    }

    .text-right {
        text-align: right;
    }
    :global([dir="rtl"]) .text-right {
        text-align: left;
    }

    /* Mock Chart Rendering */
    .mock-chart {
        width: 100%;
        position: relative;
    }
    .chart-path-line {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: drawLine 2s ease-out forwards;
    }
    @keyframes drawLine {
        to {
            stroke-dashoffset: 0;
        }
    }

    .chart-path-fill {
        opacity: 0;
        animation: fadeFill 1s ease-out 1s forwards;
    }
    @keyframes fadeFill {
        to {
            opacity: 1;
        }
    }

    /* Activity Feed */
    .activity-feed {
        display: flex;
        flex-direction: column;
    }
    .activity-item {
        display: flex;
        gap: 1rem;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        border-bottom: 1px dashed var(--surface-border);
    }
    .border-none {
        border-bottom: none;
        margin-bottom: 0;
    }
    .pb-0 {
        padding-bottom: 0;
    }

    .activity-icon {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    .activity-icon.info {
        background: hsla(
            var(--c-primary-h),
            var(--c-primary-s),
            var(--c-primary-l),
            0.1
        );
    }
    .activity-icon.warning {
        background: hsla(38, 92%, 50%, 0.1);
        color: #f59e0b;
    }
    .activity-icon.success {
        background: hsla(142, 71%, 45%, 0.1);
        color: #22c55e;
    }

    .activity-content {
        flex: 1;
    }

    .badge {
        font-size: 0.7rem;
        padding: 0.15rem 0.6rem;
        border-radius: var(--radius-full);
        background: hsla(
            var(--c-primary-h),
            var(--c-primary-s),
            var(--c-primary-l),
            0.1
        );
        color: var(--primary-color);
        font-weight: 600;
        white-space: nowrap;
    }
    .badge.warning {
        background: hsla(38, 92%, 50%, 0.1);
        color: #f59e0b;
    }
    .badge.success {
        background: hsla(142, 71%, 45%, 0.1);
        color: #22c55e;
    }

    .hover-link {
        cursor: pointer;
        padding: 0;
        background: transparent;
        border: none;
    }
    .hover-link:hover {
        text-decoration: underline;
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
