<script>
    import { dict } from "$lib/store.js";
    import Card from "../ui/Card.svelte";
    import { Search, Filter, ShieldCheck, Cpu, User } from "lucide-svelte";

    let searchQuery = "";

    const sessions = [
        {
            id: "SES-8A1b2",
            user: "john.doe@email.com",
            time: "10 mins ago",
            messages: 4,
            cost: "$0.02",
            status: "verified",
        },
        {
            id: "SES-9C4x1",
            user: "sarah.smith@email.com",
            time: "1 hour ago",
            messages: 12,
            cost: "$0.08",
            status: "verified",
        },
        {
            id: "SES-2F8p0",
            user: "Guest_2941",
            time: "3 hours ago",
            messages: 2,
            cost: "$0.01",
            status: "flagged", // e.g., low confidence
        },
    ];

    let selectedSession = sessions[0];
</script>

<div class="audit-container fade-in">
    <div class="header mb-6">
        <h2 class="text-2xl font-bold mb-2">{$dict.audit.title}</h2>
        <p class="text-muted">{$dict.audit.subTitle}</p>
    </div>

    <div class="audit-grid">
        <!-- Sidebar: Session List -->
        <Card padding="0" className="session-list-card flex-col">
            <div class="p-4 border-b">
                <div class="search-box mb-3">
                    <Search size={16} class="search-icon" />
                    <input
                        type="text"
                        placeholder={$dict.audit.searchPlaceholder}
                        class="search-input"
                        bind:value={searchQuery}
                    />
                </div>
                <div
                    class="flex justify-between items-center text-xs font-medium text-muted"
                >
                    <span>{$dict.audit.recentSessions}</span>
                    <button class="filter-btn flex items-center gap-1">
                        <Filter size={12} />
                        {$dict.audit.filters}
                    </button>
                </div>
            </div>

            <div class="sessions-scroll">
                {#each sessions as session}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div
                        class="session-item {selectedSession.id === session.id
                            ? 'active'
                            : ''}"
                        on:click={() => (selectedSession = session)}
                    >
                        <div class="flex justify-between items-start mb-1">
                            <span class="font-semibold text-sm truncate"
                                >{session.user}</span
                            >
                            <span class="text-xs text-muted whitespace-nowrap"
                                >{session.time}</span
                            >
                        </div>
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-muted"
                                >{session.messages} msgs</span
                            >
                            <span class="cost-badge">{session.cost}</span>
                        </div>
                    </div>
                {/each}
            </div>
        </Card>

        <!-- Main Area: Chat Transcript -->
        <Card padding="0" className="transcript-card flex-col">
            {#if selectedSession}
                <div
                    class="p-4 border-b bg-surface flex justify-between items-center sticky top-0 z-10"
                >
                    <div>
                        <h3 class="font-bold">{$dict.audit.sessionDetails}</h3>
                        <p
                            class="text-xs text-muted flex items-center gap-2 mt-1"
                        >
                            {selectedSession.id} • {selectedSession.user}
                        </p>
                    </div>
                    <div class="text-right rtl-flip">
                        <p class="text-xs text-muted">
                            {$dict.audit.sessionCost}
                        </p>
                        <p class="font-semibold text-primary">
                            {selectedSession.cost}
                        </p>
                    </div>
                </div>

                <div class="chat-transcript p-6">
                    <!-- Client Message -->
                    <div class="message-bubble client">
                        <div class="message-avatar"><User size={14} /></div>
                        <div class="message-content">
                            <p class="text-sm">
                                What is the company policy on remote work
                                equipment reimbursement?
                            </p>
                        </div>
                    </div>

                    <!-- AI Response -->
                    <div class="message-bubble ai">
                        <div class="message-avatar ai-avatar">
                            <Cpu size={14} />
                        </div>
                        <div class="message-content">
                            <p class="text-sm mb-3">
                                According to the Remote Work Guidelines (2023),
                                employees are eligible for a one-time $500
                                stipend to purchase home office equipment.
                            </p>

                            <!-- Traceability Popover Demo -->
                            <div class="source-grounding text-xs">
                                <div
                                    class="flex items-center gap-1 mb-1 font-semibold text-success"
                                >
                                    <ShieldCheck size={14} />
                                    {$dict.audit.verified}
                                </div>
                                <p class="text-muted">
                                    {$dict.audit.groundedIn}:
                                    <span
                                        class="text-primary cursor-pointer hover-link"
                                        >HR_Guidelines_v3.pdf (Page 12)</span
                                    >
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            {:else}
                <div class="h-full flex items-center justify-center text-muted">
                    <p>{$dict.audit.selectSession}</p>
                </div>
            {/if}
        </Card>
    </div>
</div>

<style>
    .audit-container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .header {
        flex-shrink: 0;
    }

    .audit-grid {
        display: grid;
        grid-template-columns: 320px 1fr;
        gap: 1.5rem;
        flex: 1;
        min-height: 0; /* Important for scrollable children */
    }

    .mb-6 {
        margin-bottom: 1.5rem;
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
    .mt-1 {
        margin-top: 0.25rem;
    }
    .p-4 {
        padding: 1rem;
    }
    .p-6 {
        padding: 1.5rem;
    }
    .gap-1 {
        gap: 0.25rem;
    }
    .gap-2 {
        gap: 0.5rem;
    }

    .text-2xl {
        font-size: 1.5rem;
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
    .font-medium {
        font-weight: 500;
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
    .text-success {
        color: #22c55e;
    }

    .border-b {
        border-bottom: 1px solid var(--surface-border);
    }
    .bg-surface {
        background: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.02
        );
    }

    .truncate {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .whitespace-nowrap {
        white-space: nowrap;
    }
    .text-right {
        text-align: right;
    }

    /* Session List Sidebar */
    :global(.session-list-card) {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 180px); /* Adjust based on header height */
        overflow: hidden;
    }

    .search-box {
        position: relative;
        display: flex;
        align-items: center;
    }
    :global(.search-icon) {
        position: absolute;
        left: 0.75rem;
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.5
        );
    }
    :global([dir="rtl"]) :global(.search-icon) {
        left: auto;
        right: 0.75rem;
    }
    .search-input {
        width: 100%;
        padding: 0.5rem 0.5rem 0.5rem 2.25rem;
        background: var(--surface-bg);
        border: 1px solid var(--surface-border);
        border-radius: var(--radius-md);
        color: var(--text-color);
        font-size: 0.875rem;
        outline: none;
    }
    :global([dir="rtl"]) .search-input {
        padding-left: 0.5rem;
        padding-right: 2.25rem;
    }
    .search-input:focus {
        border-color: var(--primary-color);
    }

    .filter-btn {
        background: transparent;
        border: none;
        color: var(--text-color);
        cursor: pointer;
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius-sm);
    }
    .filter-btn:hover {
        background: var(--surface-hover);
    }

    .sessions-scroll {
        flex: 1;
        overflow-y: auto;
    }

    .session-item {
        padding: 1rem;
        border-bottom: 1px solid var(--surface-border);
        cursor: pointer;
        transition: background var(--transition-fast);
    }
    .session-item:hover {
        background: var(--surface-hover);
    }
    .session-item.active {
        background: hsla(
            var(--c-primary-h),
            var(--c-primary-s),
            var(--c-primary-l),
            0.1
        );
        border-left: 3px solid var(--primary-color);
    }
    :global([dir="rtl"]) .session-item.active {
        border-left: none;
        border-right: 3px solid var(--primary-color);
    }

    .cost-badge {
        background: var(--surface-border);
        padding: 0.1rem 0.4rem;
        border-radius: var(--radius-sm);
        font-family: monospace;
    }

    /* Transcript Area */
    :global(.transcript-card) {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 180px);
        overflow: hidden;
    }

    .chat-transcript {
        flex: 1;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .message-bubble {
        display: flex;
        gap: 1rem;
        max-width: 85%;
    }
    .message-bubble.client {
        align-self: flex-end;
        flex-direction: row-reverse;
    }
    .message-bubble.ai {
        align-self: flex-start;
    }

    .message-avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: var(--surface-border);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    .message-avatar.ai-avatar {
        background: linear-gradient(
            135deg,
            var(--primary-color),
            hsla(var(--c-primary-h), var(--c-primary-s), 40%)
        );
        color: white;
    }

    .message-content {
        background: var(--surface-bg);
        border: 1px solid var(--surface-border);
        padding: 1rem;
        border-radius: var(--radius-lg);
    }
    .message-bubble.client .message-content {
        background: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.08
        );
        border-top-right-radius: 4px;
    }
    :global([dir="rtl"]) .message-bubble.client .message-content {
        border-top-right-radius: var(--radius-lg);
        border-top-left-radius: 4px;
    }

    .message-bubble.ai .message-content {
        border-top-left-radius: 4px;
    }
    :global([dir="rtl"]) .message-bubble.ai .message-content {
        border-top-left-radius: var(--radius-lg);
        border-top-right-radius: 4px;
    }

    .source-grounding {
        padding: 0.75rem;
        background: hsla(var(--c-base-h), var(--c-base-s), 0%, 0.2);
        border-radius: var(--radius-md);
        border-left: 2px solid #22c55e;
    }
    :global([dir="rtl"]) .source-grounding {
        border-left: none;
        border-right: 2px solid #22c55e;
    }

    .cursor-pointer {
        cursor: pointer;
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
