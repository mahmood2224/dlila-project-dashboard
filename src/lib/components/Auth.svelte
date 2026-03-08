<script>
    import { dict, currentUser } from "$lib/store.js";
    import { goto } from "$app/navigation";
    import Button from "./ui/Button.svelte";
    import Input from "./ui/Input.svelte";
    import {
        Mail,
        Lock,
        Phone,
        Facebook,
        Apple,
        ArrowRight,
        CheckCircle2,
    } from "lucide-svelte";

    let view = "login"; // login, register, phone-login
    let email = "";
    let password = "";
    let phone = "";
    let loading = false;

    async function handleAuth() {
        loading = true;
        await new Promise((r) => setTimeout(r, 800));
        currentUser.set({
            name: "Demo User",
            email: email || "demo@example.com",
        });
        goto("/onboarding");
    }
</script>

<div class="auth-layout fade-in">
    <!-- Left Promotional Panel -->
    <div class="promo-panel hidden-mobile">
        <div class="background-mesh">
            <div class="mesh-blob blob-1"></div>
            <div class="mesh-blob blob-2"></div>
        </div>
        <div class="content-wrapper">
            <div class="brand-logo mb-12">
                <div class="logo-box">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                        />
                    </svg>
                </div>
                <span class="brand-name">Nexus AI</span>
            </div>

            <div class="main-copy">
                <h2 class="text-4xl font-bold mb-6 text-white leading-tight">
                    Scale your operations with intelligent agents.
                </h2>
                <p class="text-lg text-white/70 mb-10 max-w-md">
                    Join thousands of teams automating their workflows,
                    analyzing data, and delivering better support.
                </p>

                <div class="features-list">
                    <div class="feature-item">
                        <CheckCircle2 class="text-emerald-400 mr-3" size={20} />
                        <span>Advanced Analytics Dashboard</span>
                    </div>
                    <div class="feature-item">
                        <CheckCircle2 class="text-emerald-400 mr-3" size={20} />
                        <span>Custom AI Personas</span>
                    </div>
                    <div class="feature-item">
                        <CheckCircle2 class="text-emerald-400 mr-3" size={20} />
                        <span>Seamless Knowledge Ingestion</span>
                    </div>
                </div>
            </div>

            <div class="testimonial">
                <p class="quote">
                    "Nexus has completely transformed how we interact with our
                    own documentation. It's magic."
                </p>
                <div class="author flex items-center mt-4">
                    <div class="avatar-small mr-3">S</div>
                    <div>
                        <p class="font-medium text-white text-sm">
                            Sarah Jenkins
                        </p>
                        <p class="text-xs text-white/50">CTO, TechFlow</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Right Login Form Panel -->
    <div class="form-panel mt-12 sm:mt-0">
        <div class="form-wrapper">
            <div class="mb-10 text-center sm:text-left">
                {#if view === "login"}
                    <h1 class="text-3xl font-bold mb-2">
                        {$dict.auth.welcomeBack}
                    </h1>
                    <p class="text-muted">{$dict.auth.loginSubtitle}</p>
                {:else if view === "register"}
                    <h1 class="text-3xl font-bold mb-2">
                        {$dict.auth.createAccount}
                    </h1>
                    <p class="text-muted">{$dict.auth.registerSubtitle}</p>
                {:else}
                    <h1 class="text-3xl font-bold mb-2">
                        {$dict.auth.loginPhoneTitle}
                    </h1>
                    <p class="text-muted">{$dict.auth.phoneSubtitle}</p>
                {/if}
            </div>

            <div class="auth-form flex-col gap-5">
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
                        className="mt-2 text-md py-3 shadow-lg shadow-primary/20 transition-all hover:-translate-y-1"
                    >
                        {loading ? "..." : $dict.auth.sendOtpBtn}
                        <ArrowRight class="ml-2" size={18} />
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

                    {#if view === "login"}
                        <div class="text-right -mt-2 mb-2">
                            <a
                                href="#"
                                class="text-sm text-primary hover:underline transition-all"
                                >Forgot password?</a
                            >
                        </div>
                    {/if}

                    <Button
                        variant="primary"
                        fullWidth
                        on:click={handleAuth}
                        className="mt-2 text-md py-3 shadow-lg shadow-primary/20 transition-all hover:bg-opacity-90"
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
                    <div class="line"></div>
                    <span>{$dict.auth.orContinueWith || "OR"}</span>
                    <div class="line"></div>
                </div>

                <div class="social-grid">
                    <Button
                        variant="outline"
                        on:click={handleAuth}
                        className="social-btn py-3"
                    >
                        <svg
                            class="mr-2"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            ><path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            /><path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            /><path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            /><path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            /></svg
                        >
                        Google
                    </Button>
                    <Button
                        variant="outline"
                        on:click={handleAuth}
                        className="social-btn py-3"
                    >
                        <Apple size={20} class="mr-2" />
                        Apple
                    </Button>
                    <Button
                        variant="outline"
                        on:click={handleAuth}
                        className="social-btn py-3"
                    >
                        <Facebook
                            size={20}
                            class="mr-2"
                            style="color: #1877F2"
                        />
                        Facebook
                    </Button>
                    <Button
                        variant="outline"
                        on:click={() => (view = "phone-login")}
                        className="social-btn py-3"
                    >
                        <Phone size={20} class="mr-2 text-muted" />
                        Phone
                    </Button>
                </div>
            {/if}

            <div class="mt-10 text-center text-sm">
                {#if view === "login"}
                    <span class="text-muted">{$dict.auth.noAccountQ}</span>
                    <button
                        class="link-btn font-semibold"
                        on:click={() => (view = "register")}
                    >
                        {$dict.auth.signUpLink}
                    </button>
                {:else}
                    <span class="text-muted">{$dict.auth.hasAccountQ}</span>
                    <button
                        class="link-btn font-semibold"
                        on:click={() => (view = "login")}
                    >
                        {$dict.auth.logInLink}
                    </button>
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
    /* Full Split Layout */
    .auth-layout {
        display: flex;
        width: 100%;
        height: 100%; /* Adapts to routes/auth/+page.svelte h-full */
        margin: 0;
        padding: 0;
        overflow: hidden;
        border-radius: var(--radius-xl);
    }

    /* Left Panel - Promo */
    .promo-panel {
        flex: 1.2;
        position: relative;
        background: #0f172a; /* Deep slate */
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 4rem;
        overflow: hidden;
        color: white;
    }

    .background-mesh {
        position: absolute;
        inset: 0;
        z-index: 0;
        overflow: hidden;
        opacity: 0.8;
    }

    .mesh-blob {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        z-index: 0;
    }

    .blob-1 {
        width: 600px;
        height: 600px;
        background: hsla(
            var(--c-primary-h),
            var(--c-primary-s),
            var(--c-primary-l),
            0.4
        );
        top: -100px;
        left: -100px;
        animation: pulse 10s infinite alternate;
    }

    .blob-2 {
        width: 500px;
        height: 500px;
        background: hsla(280, 80%, 60%, 0.3); /* Purple hue */
        bottom: -150px;
        right: -100px;
        animation: pulse 12s infinite alternate-reverse;
    }

    @keyframes pulse {
        0% {
            transform: scale(1) translate(0, 0);
        }
        100% {
            transform: scale(1.1) translate(20px, 20px);
        }
    }

    .content-wrapper {
        position: relative;
        z-index: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 600px;
        margin: 0 auto;
    }

    .brand-logo {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .logo-box {
        width: 48px;
        height: 48px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }

    .brand-name {
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: -0.02em;
    }

    .main-copy {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .features-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .feature-item {
        display: flex;
        align-items: center;
        font-size: 1.05rem;
        color: rgba(255, 255, 255, 0.9);
        background: rgba(255, 255, 255, 0.05);
        padding: 0.75rem 1rem;
        border-radius: 8px;
        backdrop-filter: blur(5px);
        width: fit-content;
    }

    .testimonial {
        margin-top: auto;
        padding-top: 3rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .quote {
        font-size: 1.1rem;
        font-style: italic;
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
    }

    .avatar-small {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: white;
    }

    /* Right Panel - Form */
    .form-panel {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--surface-bg);
        padding: 2rem;
        position: relative;
    }

    .form-wrapper {
        width: 100%;
        max-width: 440px;
    }

    .gap-5 {
        gap: 1.25rem;
    }
    .mb-10 {
        margin-bottom: 2.5rem;
    }
    .mb-6 {
        margin-bottom: 1.5rem;
    }
    .mb-2 {
        margin-bottom: 0.5rem;
    }
    .mb-12 {
        margin-bottom: 3rem;
    }
    .mt-10 {
        margin-top: 2.5rem;
    }
    .mt-4 {
        margin-top: 1rem;
    }
    .mt-2 {
        margin-top: 0.5rem;
    }
    .-mt-2 {
        margin-top: -0.5rem;
    }
    :global(.mr-3) {
        margin-inline-end: 0.75rem;
    }
    :global(.mr-2) {
        margin-inline-end: 0.5rem;
    }
    :global(.ml-2) {
        margin-inline-start: 0.5rem;
    }
    .py-3 {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
    }

    .text-4xl {
        font-size: 2.5rem;
    }
    .text-3xl {
        font-size: 2rem;
        letter-spacing: -0.02em;
    }
    .text-lg {
        font-size: 1.125rem;
    }
    .text-md {
        font-size: 1rem;
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

    .text-center {
        text-align: center;
    }
    .text-right {
        text-align: right;
    }
    .leading-tight {
        line-height: 1.2;
    }

    .text-muted {
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.6
        );
    }
    .text-white {
        color: white;
    }
    :global(.text-emerald-400) {
        color: #34d399;
    }
    :global(.text-primary) {
        color: var(--primary-color);
    }

    .flex {
        display: flex;
    }
    .flex-col {
        display: flex;
        flex-direction: column;
    }
    .items-center {
        align-items: center;
    }

    .transition-all {
        transition: all 0.2s ease;
    }
    .hover\:-translate-y-1:hover {
        transform: translateY(-2px);
    }

    .divider {
        display: flex;
        align-items: center;
        margin: 2.5rem 0;
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.5
        );
        font-size: 0.875rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .divider .line {
        flex: 1;
        height: 1px;
        background: var(--surface-border);
    }
    .divider span {
        padding: 0 1rem;
    }

    .social-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    .link-btn {
        all: unset;
        color: var(--primary-color);
        cursor: pointer;
        margin-left: 0.5rem;
        transition: opacity var(--transition-fast);
    }
    .link-btn:hover {
        text-decoration: underline;
    }

    .fade-in {
        animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(15px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Responsive */
    @media (max-width: 900px) {
        .promo-panel {
            display: none;
        }
        .form-panel {
            padding: 1.5rem;
            border-radius: inherit;
        }
        .text-center.sm\:text-left {
            text-align: center;
        }
        .social-grid {
            grid-template-columns: 1fr;
        }
    }
    @media (min-width: 901px) {
        .text-center.sm\:text-left {
            text-align: left;
        }
    }
</style>
