<script>
    import { onMount } from "svelte";
    import { theme, locale } from "$lib/store.js";
    import { Globe } from "lucide-svelte";
    import "../app.css";

    onMount(() => {
        // Enforce the theme attribute on the document element for global CSS bridging
        const unsubscribeTheme = theme.subscribe((val) => {
            if (typeof document !== "undefined") {
                document.documentElement.setAttribute("data-theme", val);
            }
        });

        // Enforce language RTL/LTR dynamically
        const unsubscribeLocale = locale.subscribe((val) => {
            if (typeof document !== "undefined") {
                document.documentElement.setAttribute("lang", val);
                document.documentElement.setAttribute(
                    "dir",
                    val === "ar" ? "rtl" : "ltr",
                );
            }
        });

        return () => {
            unsubscribeTheme();
            unsubscribeLocale();
        };
    });
</script>

<div class="app-shell min-h-screen text-base">
    <slot />

    <!-- Global Floating Controls (Theme & Lang) -->
    <div class="floating-controls">
        <!-- Language Toggle -->
        <button
            class="control-btn glass-panel text-sm font-bold flex flex-col gap-1 items-center"
            style="width: 3.5rem; height: 3.5rem; padding: 0.5rem;"
            on:click={() => locale.update((l) => (l === "en" ? "ar" : "en"))}
            aria-label="Toggle Language"
        >
            <Globe size={18} />
            <span style="font-size: 0.75rem;">
                {#if $locale === "en"}
                    العربية
                {:else}
                    English
                {/if}
            </span>
        </button>

        <!-- Global Theme Toggle Widget -->
        <button
            class="control-btn glass-panel"
            on:click={() =>
                theme.update((t) => (t === "light" ? "dark" : "light"))}
            aria-label="Toggle Theme"
            style="width: 3.5rem; height: 3.5rem;"
        >
            {#if $theme === "light"}
                <!-- Moon icon for 'Switch to Dark' -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg
                >
            {:else}
                <!-- Sun icon for 'Switch to Light' -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    ><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"
                    ></path><path d="M12 20v2"></path><path
                        d="m4.93 4.93 1.41 1.41"
                    ></path><path d="m17.66 17.66 1.41 1.41"></path><path
                        d="M2 12h2"
                    ></path><path d="M20 12h2"></path><path
                        d="m6.34 17.66-1.41 1.41"
                    ></path><path d="m19.07 4.93-1.41 1.41"></path></svg
                >
            {/if}
        </button>
    </div>
</div>

<style>
    .app-shell {
        display: flex;
        flex-direction: column;
        background: var(--bg-color);
        color: var(--text-color);
    }
    .min-h-screen {
        min-height: 100vh;
    }
    .text-base {
        font-size: 1rem;
    }
    .floating-controls {
        position: fixed;
        bottom: 1.5rem;
        right: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        z-index: 100;
    }
    :global([dir="rtl"]) .floating-controls {
        right: auto;
        left: 1.5rem;
    }
    .control-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: var(--text-color);
        transition: all var(--transition-fast);
    }
    .control-btn:hover {
        background: var(--surface-hover);
        transform: scale(1.05);
    }
</style>
