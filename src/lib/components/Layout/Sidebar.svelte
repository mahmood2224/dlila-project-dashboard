<script>
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { dict } from "$lib/store.js";
    import ProgressBar from "../ui/ProgressBar.svelte";
    import Modal from "../ui/Modal.svelte";
    import {
        LayoutDashboard,
        MessageSquareQuote,
        FolderKanban,
        Box,
        CreditCard,
        LogOut,
        Activity,
        AlertTriangle,
    } from "lucide-svelte";

    let showLogoutModal = false;

    // Reconstruct Sidebar menu items pointing directly to actual SvelteKit routes
    const menuItems = [
        { id: "/analytics", icon: LayoutDashboard, dictKey: "analytics" },
        { id: "/audit", icon: MessageSquareQuote, dictKey: "audit" },
        { id: "/knowledge", icon: FolderKanban, dictKey: "knowledge" },
        { id: "/playground", icon: Box, dictKey: "playground" },
        { id: "/usage", icon: Activity, dictKey: "usage" },
        { id: "/billing", icon: CreditCard, dictKey: "billing" },
    ];

    $: currentRoute = $page.url.pathname;

    function handleNav(id) {
        goto(id);
    }

    function confirmLogout() {
        goto("/auth");
    }
</script>

<aside class="sidebar glass-panel flex-col justify-between">
    <div class="nav-section">
        <!-- Logo Area -->
        <div class="logo-area mb-8 px-2 flex items-center gap-3">
            <div class="logo-icon">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="text-primary"
                >
                    <path
                        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
            <span class="font-bold text-lg">Nexus AI</span>
        </div>

        <!-- Navigation Links -->
        <nav class="flex-col gap-2">
            {#each menuItems as item}
                <a
                    href={item.id}
                    class="nav-item {currentRoute === item.id ? 'active' : ''}"
                    on:click|preventDefault={() => handleNav(item.id)}
                >
                    <svelte:component
                        this={item.icon}
                        size={20}
                        class="icon mr-3"
                    />
                    <span>{$dict.nav[item.dictKey]}</span>
                </a>
            {/each}
        </nav>
    </div>

    <div class="bottom-section">
        <!-- Quota Monitor Mini (Links to usage route) -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            class="quota-mini mb-6 p-4 rounded-lg bg-surface cursor-pointer usage-hover"
            on:click={() => handleNav("/usage")}
        >
            <ProgressBar value={85} label={$dict.nav.planUsage} showPercent />
            <p class="text-xs text-muted mt-2">15% tokens remaining</p>
        </div>

        <!-- Logout -->
        <button
            class="nav-item logout w-full"
            on:click={() => (showLogoutModal = true)}
        >
            <LogOut size={20} class="icon mr-3" />
            <span>{$dict.logout}</span>
        </button>
    </div>
</aside>

<Modal
    bind:open={showLogoutModal}
    title={$dict.logout}
    description="Are you sure you want to sign out? Your active session will be closed."
    confirmText="Sign Out"
    cancelText={$dict.cancel || "Cancel"}
    confirmVariant="danger"
    on:confirm={confirmLogout}
>
    <div slot="icon" style="color: #ef4444;">
        <AlertTriangle size={24} />
    </div>
</Modal>

<style>
    .sidebar {
        width: 260px;
        height: calc(100vh - 2rem);
        margin: 1rem 0 1rem 1rem;
        padding: 1.5rem;
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        z-index: 40;
    }
    :global([dir="rtl"]) .sidebar {
        left: auto;
        right: 0;
        margin: 1rem 1rem 1rem 0;
    }

    .logo-icon {
        width: 36px;
        height: 36px;
        border-radius: 10px;
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

    .px-2 {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
    .mb-8 {
        margin-bottom: 2rem;
    }
    .mb-6 {
        margin-bottom: 1.5rem;
    }
    .mt-2 {
        margin-top: 0.5rem;
    }
    :global(.mr-3) {
        margin-inline-end: 0.75rem;
    }
    .gap-3 {
        gap: 0.75rem;
    }

    .font-bold {
        font-weight: 700;
    }
    .text-lg {
        font-size: 1.125rem;
    }
    .text-xs {
        font-size: 0.75rem;
    }

    .nav-item {
        display: flex;
        align-items: center;
        padding: 0.75rem 1rem;
        border-radius: var(--radius-md);
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.7
        );
        text-decoration: none;
        transition: all var(--transition-fast);
        font-weight: 500;
        font-size: 0.95rem;
        border: 1px solid transparent;
        cursor: pointer;
    }

    .nav-item:hover {
        background: var(--surface-hover);
        color: var(--text-color);
    }

    .nav-item.active {
        background: hsla(
            var(--c-primary-h),
            var(--c-primary-s),
            var(--c-primary-l),
            0.1
        );
        color: var(--primary-color);
        border-color: hsla(
            var(--c-primary-h),
            var(--c-primary-s),
            var(--c-primary-l),
            0.2
        );
    }

    :global(.nav-item .icon) {
        transition: transform var(--transition-fast);
    }
    .nav-item:hover :global(.icon) {
        transform: scale(1.1);
    }

    .logout {
        color: hsla(0, 84%, 60%, 0.8);
    }
    .logout:hover {
        background: hsla(0, 84%, 60%, 0.1);
        color: hsla(0, 84%, 60%, 1);
    }

    .bg-surface {
        background: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.03
        );
        border: 1px solid var(--surface-border);
    }
    .rounded-lg {
        border-radius: var(--radius-lg);
    }
    .p-4 {
        padding: 1rem;
    }

    .usage-hover {
        transition: border-color var(--transition-fast);
    }
    .usage-hover:hover {
        border-color: hsla(
            var(--c-primary-h),
            var(--c-primary-s),
            var(--c-primary-l),
            0.4
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
    :global(.text-primary) {
        color: var(--primary-color);
    }
</style>
