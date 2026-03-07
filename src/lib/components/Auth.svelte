<script>
    import { dict, currentUser } from "$lib/store.js";
    import { goto } from "$app/navigation";
    import Card from "./ui/Card.svelte";
    import Button from "./ui/Button.svelte";
    import Input from "./ui/Input.svelte";
    import { Mail, Lock, Phone } from "lucide-svelte";

    let view = "login"; // login, register, phone-login
    let email = "";
    let password = "";
    let phone = "";
    let loading = false;

    async function handleAuth() {
        loading = true;
        // Mock network delay
        await new Promise((r) => setTimeout(r, 800));

        currentUser.set({
            name: "Demo User",
            email: email || "demo@example.com",
        });
        // Since project is null by default, redirecting to dashboard will handle onboarding
        goto("/onboarding");
    }
</script>

<div class="auth-container">
    <Card padding="2.5rem" className="w-full max-w-md auth-card">
        <div class="text-center mb-8">
            <!-- Mock Logo -->
            <div class="logo-wrapper mx-auto mb-4">
                <svg
                    width="32"
                    height="32"
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

            <!-- Headers -->
            {#if view === "login"}
                <h1 class="text-2xl font-bold mb-2">
                    {$dict.auth.welcomeBack}
                </h1>
                <p class="text-muted text-sm">{$dict.auth.loginSubtitle}</p>
            {:else if view === "register"}
                <h1 class="text-2xl font-bold mb-2">
                    {$dict.auth.createAccount}
                </h1>
                <p class="text-muted text-sm">{$dict.auth.registerSubtitle}</p>
            {:else}
                <h1 class="text-2xl font-bold mb-2">
                    {$dict.auth.loginPhoneTitle}
                </h1>
                <p class="text-muted text-sm">{$dict.auth.phoneSubtitle}</p>
            {/if}
        </div>

        <!-- Forms -->
        <div class="form-container fade-in flex-col">
            {#if view === "phone-login"}
                <Input
                    type="tel"
                    id="phone"
                    label={$dict.auth.phoneLabel}
                    placeholder={$dict.auth.phonePlaceholder}
                    bind:value={phone}
                    icon={Phone}
                />
                <Button
                    variant="primary"
                    fullWidth
                    on:click={handleAuth}
                    className="mt-4"
                >
                    {loading ? "..." : $dict.auth.sendOtpBtn}
                </Button>
            {:else}
                <Input
                    type="email"
                    id="email"
                    label={$dict.auth.emailLabel}
                    placeholder={$dict.auth.emailPlaceholder}
                    bind:value={email}
                    icon={Mail}
                />
                <Input
                    type="password"
                    id="password"
                    label={$dict.auth.passwordLabel}
                    placeholder={$dict.auth.passwordPlaceholder}
                    bind:value={password}
                    icon={Lock}
                />
                <Button
                    variant="primary"
                    fullWidth
                    on:click={handleAuth}
                    className="mt-4"
                >
                    {loading
                        ? "..."
                        : view === "login"
                          ? $dict.auth.signInBtn
                          : $dict.auth.signUpBtn}
                </Button>
            {/if}
        </div>

        {#if view === "login"}
            <div class="divider">
                <span>{$dict.auth.orContinueWith}</span>
            </div>

            <div class="social-login gap-3">
                <Button
                    variant="outline"
                    fullWidth
                    on:click={() => (view = "phone-login")}
                >
                    <Phone size={18} class="mr-2" />
                    {$dict.auth.loginPhoneLink}
                </Button>
            </div>
        {/if}

        <!-- Toggle Links -->
        <div class="text-center mt-6 text-sm">
            {#if view === "login"}
                <span class="text-muted">{$dict.auth.noAccountQ}</span>
                <button class="link-btn" on:click={() => (view = "register")}>
                    {$dict.auth.signUpLink}
                </button>
            {:else}
                <span class="text-muted">{$dict.auth.hasAccountQ}</span>
                <button class="link-btn" on:click={() => (view = "login")}>
                    {$dict.auth.logInLink}
                </button>
            {/if}
        </div>
    </Card>
</div>

<style>
    .auth-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .max-w-md {
        max-width: 28rem;
    }
    .mx-auto {
        margin-left: auto;
        margin-right: auto;
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
    .mt-4 {
        margin-top: 1rem;
    }
    .mt-6 {
        margin-top: 1.5rem;
    }
    .text-center {
        text-align: center;
    }

    .text-2xl {
        font-size: 1.5rem;
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
    }
    :global(.text-primary) {
        color: var(--primary-color);
    }

    .logo-wrapper {
        width: 64px;
        height: 64px;
        border-radius: 16px;
        background: hsla(
            var(--c-primary-h),
            var(--c-primary-s),
            var(--c-primary-l),
            0.1
        );
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid
            hsla(
                var(--c-primary-h),
                var(--c-primary-s),
                var(--c-primary-l),
                0.2
            );
    }

    .divider {
        margin: 2rem 0;
        text-align: center;
        position: relative;
    }
    .divider::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--surface-border);
        z-index: 0;
    }
    .divider span {
        position: relative;
        background: var(--surface-bg);
        padding: 0 1rem;
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.5
        );
        font-size: 0.875rem;
        z-index: 1;
    }

    .social-login {
        display: flex;
        flex-direction: column;
    }
    .gap-3 {
        gap: 0.75rem;
    }

    :global(.mr-2) {
        margin-right: 0.5rem;
    }

    .link-btn {
        all: unset;
        color: var(--primary-color);
        font-weight: 500;
        cursor: pointer;
        margin-left: 0.5rem;
        transition: opacity var(--transition-fast);
    }
    .link-btn:hover {
        opacity: 0.8;
    }

    .fade-in {
        animation: fadeIn 0.3s ease-out;
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
