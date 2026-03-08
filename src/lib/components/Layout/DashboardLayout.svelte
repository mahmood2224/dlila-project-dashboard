<script>
    import { currentProject, currentUser, dict } from "$lib/store.js";
    import Sidebar from "./Sidebar.svelte";
    import {
        Bell,
        Search,
        Settings,
        AlertTriangle,
        LogOut,
    } from "lucide-svelte";
    import { goto } from "$app/navigation";
    import Modal from "../ui/Modal.svelte";
    import Notifications from "../Views/Notifications.svelte";

    // If somehow a direct routing hits dashboard and user/project is missing
    if (!$currentProject) {
        currentProject.set({
            name: "Demo Project v1",
            domain: "demo.com",
            persona: "support",
        });
    }
    if (!$currentUser) {
        currentUser.set({ name: "Demo User", email: "demo@example.com" });
    }

    let showLogoutModal = false;
    let showNotifications = false;

    function confirmLogout() {
        goto("/auth");
    }
</script>

<div class="dashboard-layout h-screen">
    <Sidebar />

    <div class="main-content">
        <!-- Top Header Bar -->
        <header
            class="topbar glass-layer flex justify-between items-center mb-6"
        >
            <div class="project-info">
                <h1 class="text-xl font-bold">{$currentProject?.name}</h1>
                <span class="badge">{$currentProject?.persona}</span>
            </div>

            <div class="header-actions flex items-center gap-4">
                <div class="search-bar">
                    <Search size={16} class="search-icon" />
                    <input
                        type="text"
                        placeholder="Search..."
                        class="search-input"
                    />
                </div>

                <div class="relative flex items-center">
                    <button
                        class="icon-btn"
                        title={$dict.notifications?.title || "Notifications"}
                        on:click={() =>
                            (showNotifications = !showNotifications)}
                    >
                        <Bell size={20} />
                        <span class="notification-dot"></span>
                    </button>

                    {#if showNotifications}
                        <Notifications />
                    {/if}
                </div>

                <button
                    class="icon-btn"
                    title={$dict.settingsMenu}
                    on:click={() => goto("/settings")}
                >
                    <Settings size={20} />
                </button>

                <div
                    class="user-profile border-l pl-4 ml-2 flex items-center gap-3"
                >
                    <div class="text-right rtl-flip mr-3">
                        <p class="text-sm font-semibold">
                            {$currentUser?.name}
                        </p>
                        <p class="text-xs text-muted">{$dict.owner}</p>
                    </div>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div
                        class="avatar"
                        on:click={() => (showLogoutModal = true)}
                    >
                        {$currentUser?.name.charAt(0)}
                    </div>
                </div>
            </div>
        </header>

        <!-- Route Render Area -->
        <main class="content-area fade-in">
            <slot />
        </main>
    </div>
</div>

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
    .dashboard-layout {
        display: flex;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    .main-content {
        flex: 1;
        margin-left: 260px; /* Sidebar width */
        padding: 1rem 1rem 1rem 2rem;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
    }
    :global([dir="rtl"]) .main-content {
        margin-left: 0;
        margin-right: 260px;
        padding: 1rem 2rem 1rem 1rem;
    }

    .topbar {
        padding: 1rem 1.5rem;
        border-radius: var(--radius-lg);
        border: 1px solid var(--surface-border);
        position: sticky;
        top: 0;
        z-index: 30;
    }

    .mb-6 {
        margin-bottom: 1.5rem;
    }
    .pl-4 {
        padding-left: 1rem;
    }
    .ml-2 {
        margin-left: 0.5rem;
    }
    .mr-3 {
        margin-right: 0.75rem;
    }
    .gap-3 {
        gap: 0.75rem;
    }
    .gap-4 {
        gap: 1rem;
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

    .badge {
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius-full);
        background: hsla(
            var(--c-primary-h),
            var(--c-primary-s),
            var(--c-primary-l),
            0.1
        );
        color: var(--primary-color);
        font-weight: 600;
        text-transform: capitalize;
        margin-top: 0.25rem;
        display: inline-block;
    }

    .search-bar {
        position: relative;
        display: flex;
        align-items: center;
    }
    :global(.search-icon) {
        position: absolute;
        left: 1rem;
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.5
        );
    }
    :global([dir="rtl"]) :global(.search-icon) {
        left: auto;
        right: 1rem;
    }

    .relative {
        position: relative;
    }

    .search-input {
        padding: 0.5rem 1rem 0.5rem 2.5rem;
        border-radius: var(--radius-full);
        border: 1px solid var(--surface-border);
        background: var(--surface-bg);
        color: var(--text-color);
        outline: none;
        transition: all var(--transition-fast);
        width: 200px;
    }
    :global([dir="rtl"]) .search-input {
        padding-left: 1rem;
        padding-right: 2.5rem;
    }
    .search-input:focus {
        width: 250px;
        border-color: var(--primary-color);
    }

    .icon-btn {
        background: transparent;
        border: 1px solid var(--surface-border);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-color);
        position: relative;
    }
    .icon-btn:hover {
        background: var(--surface-hover);
    }

    .notification-dot {
        position: absolute;
        top: 8px;
        right: 10px;
        width: 8px;
        height: 8px;
        background: #ef4444;
        border-radius: 50%;
        border: 2px solid var(--bg-color);
    }

    .border-l {
        border-left: 1px solid var(--surface-border);
    }

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: linear-gradient(
            135deg,
            var(--primary-color),
            hsla(var(--c-primary-h), var(--c-primary-s), 40%)
        );
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.25rem;
        cursor: pointer;
        transition: transform var(--transition-fast);
    }
    .avatar:hover {
        transform: scale(1.05);
    }

    .content-area {
        flex: 1;
        padding-bottom: 2rem;
    }

    .text-muted {
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.6
        );
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
