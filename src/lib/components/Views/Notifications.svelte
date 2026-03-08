<script>
    import { dict } from "$lib/store.js";
    import {
        Bell,
        CheckCircle2,
        AlertTriangle,
        CreditCard,
        Activity,
        Check,
    } from "lucide-svelte";
    import Button from "../ui/Button.svelte";

    let notifications = [
        {
            id: 1,
            type: "alert",
            icon: AlertTriangle,
            title: "Token Quota Warning",
            message:
                "Your project 'Acme Corp Support' has reached 90% of its monthly token limit. Please consider upgrading your plan to avoid service interruption during peak hours.",
            timeAgo: "justNow",
            read: false,
            expanded: false,
            color: "text-warning",
            bg: "bg-warning-light",
        },
        {
            id: 2,
            type: "success",
            icon: CheckCircle2,
            title: "Knowledge Base Updated",
            message:
                "Successfully indexed 'Employee_Handbook_2023.pdf' with 0 errors.",
            timeAgo: "minsAgo",
            timeVal: 45,
            read: false,
            expanded: false,
            color: "text-success",
            bg: "bg-success-light",
        },
        {
            id: 3,
            type: "billing",
            icon: CreditCard,
            title: "Pro Plan Upgraded",
            message:
                "Your account has been successfully upgraded to the Pro Tier. You now have access to advanced analytics and priority support.",
            timeAgo: "hoursAgo",
            timeVal: 2,
            read: true,
            expanded: false,
            color: "text-primary",
            bg: "bg-primary-light",
        },
        {
            id: 4,
            type: "system",
            icon: Activity,
            title: "System Maintenance Scheduled",
            message:
                "Nexus AI will undergo brief maintenance on Sunday at 2:00 AM UTC. Expected downtime is approximately 15 minutes.",
            timeAgo: "daysAgo",
            timeVal: 1,
            read: true,
            expanded: false,
            color: "text-muted",
            bg: "bg-surface",
        },
    ];

    function markAllAsRead() {
        notifications = notifications.map((n) => ({ ...n, read: true }));
    }

    /** @param {number|string} id */
    function toggleReadStatus(id) {
        notifications = notifications.map((n) =>
            n.id === id ? { ...n, read: !n.read } : n,
        );
    }

    /** @param {number|string} id */
    function toggleExpand(id) {
        notifications = notifications.map((n) =>
            n.id === id ? { ...n, expanded: !n.expanded } : n,
        );
    }
</script>

<div class="notifications-popover glass-layer">
    <div class="popover-header">
        <h3 class="font-bold text-base m-0">{$dict.notifications.title}</h3>
        <Button
            variant="ghost"
            size="sm"
            on:click={markAllAsRead}
            className="px-2 py-1"
        >
            <Check size={16} class="mr-1" />
            <span class="text-xs">{$dict.notifications.markAllRead}</span>
        </Button>
    </div>

    {#if notifications.length === 0}
        <div class="empty-state">
            <Bell size={48} class="text-muted mb-4 opacity-50" />
            <p class="text-muted">{$dict.notifications.emptyState}</p>
        </div>
    {:else}
        <div class="notifications-list">
            {#each notifications as note}
                <div
                    class="notification-item {note.read
                        ? 'is-read'
                        : 'is-unread'}"
                >
                    <div class="icon-col">
                        <div class="icon-circle {note.color} {note.bg}">
                            <svelte:component this={note.icon} size={18} />
                        </div>
                    </div>

                    <div class="content-col">
                        <div class="title-row">
                            <h4
                                class="note-title {note.read
                                    ? 'text-muted'
                                    : ''}"
                            >
                                {note.title}
                            </h4>
                            <span class="note-time">
                                {note.timeVal ? note.timeVal + " " : ""}{$dict
                                    .notifications.timeAgo[note.timeAgo]}
                            </span>
                        </div>

                        <div class="note-body">
                            <p
                                class="note-message {!note.expanded
                                    ? 'line-clamp-2'
                                    : ''}"
                            >
                                {note.message}
                            </p>
                            {#if note.message.length > 50}
                                <!-- svelte-ignore a11y-click-events-have-key-events -->
                                <!-- svelte-ignore a11y-no-static-element-interactions -->
                                <button
                                    class="expand-btn"
                                    on:click={() => toggleExpand(note.id)}
                                >
                                    {note.expanded
                                        ? $dict.notifications.showLess
                                        : $dict.notifications.showMore}
                                </button>
                            {/if}
                        </div>
                    </div>

                    <div class="action-col">
                        <button
                            class="status-btn"
                            title="Toggle status"
                            on:click={() => toggleReadStatus(note.id)}
                        >
                            <div
                                class="status-indicator {note.read
                                    ? 'read'
                                    : 'unread'}"
                            ></div>
                        </button>
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .notifications-popover {
        position: absolute;
        top: calc(100% + 0.5rem);
        right: -1rem; /* align roughly with the bell */
        width: 380px;
        background: var(--bg-color);
        border: 1px solid var(--surface-border);
        border-radius: var(--radius-lg);
        box-shadow: 0 10px 25px -5px hsla(0, 0%, 0%, 0.3);
        z-index: 50;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    :global([dir="rtl"]) .notifications-popover {
        right: auto;
        left: -1rem;
    }

    .popover-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.25rem;
        border-bottom: 1px solid var(--surface-border);
        background: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.02
        );
    }

    .empty-state {
        padding: 3rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .notifications-list {
        max-height: 400px;
        overflow-y: auto;
        overscroll-behavior: contain;
    }

    /* Custom Scrollbar for list */
    .notifications-list::-webkit-scrollbar {
        width: 6px;
    }
    .notifications-list::-webkit-scrollbar-track {
        background: transparent;
    }
    .notifications-list::-webkit-scrollbar-thumb {
        background: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.2
        );
        border-radius: 4px;
    }

    .notification-item {
        display: flex;
        padding: 1rem 1.25rem;
        border-bottom: 1px solid var(--surface-border);
        transition: background-color var(--transition-fast);
        gap: 1rem;
    }
    .notification-item:last-child {
        border-bottom: none;
    }
    .notification-item:hover {
        background: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.02
        );
    }
    .notification-item.is-unread {
        background: hsla(
            var(--c-primary-h),
            var(--c-primary-s),
            var(--c-primary-l),
            0.03
        );
    }

    .icon-col {
        flex-shrink: 0;
    }

    .icon-circle {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content-col {
        flex: 1;
        min-width: 0; /* Important for flex children to truncate */
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .title-row {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 0.5rem;
    }

    .note-title {
        font-size: 0.875rem;
        font-weight: 600;
        margin: 0;
        color: var(--text-color);
        line-height: 1.2;
    }

    .note-time {
        font-size: 0.75rem;
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.5
        );
        white-space: nowrap;
        flex-shrink: 0;
    }

    .note-body {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .note-message {
        font-size: 0.8125rem;
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.7
        );
        margin: 0;
        line-height: 1.4;
        width: 100%;
        word-break: break-word; /* Ensure long words break */
    }

    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .expand-btn {
        background: transparent;
        border: none;
        padding: 0;
        margin-top: 0.25rem;
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--primary-color);
        cursor: pointer;
    }
    .expand-btn:hover {
        text-decoration: underline;
    }

    .action-col {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 0.25rem; /* Align with title */
    }

    .status-btn {
        background: transparent;
        border: none;
        padding: 0.25rem;
        cursor: pointer;
        display: flex;
    }

    .status-indicator {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transition: all var(--transition-fast);
        border: 2px solid transparent;
    }
    .status-indicator.unread {
        background: var(--primary-color);
        box-shadow: 0 0 8px
            hsla(
                var(--c-primary-h),
                var(--c-primary-s),
                var(--c-primary-l),
                0.4
            );
    }
    .status-indicator.read {
        background: transparent;
        border-color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.3
        );
    }

    /* Helper Colors */
    .text-warning {
        color: #f59e0b;
    }
    .bg-warning-light {
        background: rgba(245, 158, 11, 0.1);
    }

    .text-success {
        color: #10b981;
    }
    .bg-success-light {
        background: rgba(16, 185, 129, 0.1);
    }

    .text-primary {
        color: var(--primary-color);
    }
    .bg-primary-light {
        background: hsla(
            var(--c-primary-h),
            var(--c-primary-s),
            var(--c-primary-l),
            0.1
        );
    }

    .text-muted {
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.6
        );
    }
    .bg-surface {
        background: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.05
        );
    }

    .m-0 {
        margin: 0;
    }
    .mr-1 {
        margin-right: 0.25rem;
    }
    :global([dir="rtl"]) .mr-1 {
        margin-right: 0;
        margin-left: 0.25rem;
    }
    .text-base {
        font-size: 1rem;
    }
    .font-bold {
        font-weight: 700;
    }
</style>
