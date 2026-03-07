<script>
    import { dict } from "$lib/store.js";
    import Card from "../ui/Card.svelte";
    import Button from "../ui/Button.svelte";
    import Input from "../ui/Input.svelte";
    import { Users, ShieldAlert, KeyRound, Save, Plus } from "lucide-svelte";

    // Config mocks
    let projName = "Nexus AI";
    let aiPersona = "Customer Support";
    let description =
        "AI Assistant handling tier-1 troubleshooting for Acme Corp.";

    // Password mocks
    let currentPass = "";
    let newPass = "";
    let confirmPass = "";

    // Team members
    let team = [
        { email: "admin@acme.com", role: "Owner", status: "active" },
        { email: "sarah.m@acme.com", role: "Editor", status: "active" },
        { email: "dev_team@acme.com", role: "Viewer", status: "invited" },
    ];
</script>

<div class="settings-container fade-in">
    <div class="header mb-8">
        <h2 class="text-2xl font-bold mb-2">{$dict.settingsView.title}</h2>
        <p class="text-muted">{$dict.settingsView.subTitle}</p>
    </div>

    <div class="settings-grid">
        <!-- Main Form Column -->
        <div class="form-column flex-col gap-6">
            <!-- General Settings -->
            <Card padding="2rem" className="flex-col">
                <h3 class="text-lg font-bold border-b pb-4 mb-6">
                    {$dict.settingsView.general}
                </h3>

                <div class="flex-col gap-5">
                    <Input label="Project Name" bind:value={projName} />
                    <Input label="AI Persona" bind:value={aiPersona} />

                    <div class="input-group">
                        <label
                            for="desc"
                            class="text-sm font-medium mb-1 inline-block text-left w-full"
                            >Description</label
                        >
                        <textarea
                            id="desc"
                            bind:value={description}
                            class="custom-textarea"
                            rows="3"
                        ></textarea>
                        <p class="text-xs text-muted mt-2">
                            {$dict.settingsView.descHelper}
                        </p>
                    </div>

                    <div class="flex justify-end mt-2">
                        <Button variant="primary">
                            <Save size={16} class="mr-2" />
                            {$dict.saveChanges}
                        </Button>
                    </div>
                </div>
            </Card>

            <!-- Password / Security -->
            <Card padding="2rem" className="flex-col border-warning">
                <h3
                    class="text-lg font-bold border-b pb-4 mb-6 flex items-center gap-2 text-warning"
                >
                    <ShieldAlert size={18} />
                    {$dict.settingsView.security}
                </h3>

                <div class="flex-col gap-5">
                    <Input
                        type="password"
                        label={$dict.settingsView.currentPass}
                        bind:value={currentPass}
                        icon={KeyRound}
                    />

                    <div class="split-inputs">
                        <Input
                            type="password"
                            label={$dict.settingsView.newPass}
                            bind:value={newPass}
                        />
                        <Input
                            type="password"
                            label={$dict.settingsView.confirmPass}
                            bind:value={confirmPass}
                        />
                    </div>

                    <div class="flex justify-end mt-2">
                        <Button
                            variant="outline"
                            className="text-warning border-warning hover-warning"
                        >
                            {$dict.settingsView.updatePass}
                        </Button>
                    </div>
                </div>
            </Card>
        </div>

        <!-- Sidebar Column: Team Members -->
        <div class="sidebar-column">
            <Card padding="1.5rem" className="h-full flex-col bg-surface">
                <div
                    class="flex justify-between items-center mb-6 border-b pb-4"
                >
                    <h3 class="text-lg font-bold flex items-center gap-2">
                        <Users size={18} />
                        {$dict.settingsView.members}
                    </h3>
                    <span class="badge">{team.length}</span>
                </div>

                <div class="add-member mb-6">
                    <label class="text-sm font-medium mb-2 block text-left"
                        >Invite New Member</label
                    >
                    <div class="flex gap-2">
                        <div class="flex-1">
                            <input
                                type="email"
                                placeholder="email@company.com"
                                class="custom-input p-sm"
                            />
                        </div>
                        <Button variant="primary" size="sm"
                            ><Plus size={16} /></Button
                        >
                    </div>
                </div>

                <div class="team-list flex-1">
                    {#each team as member}
                        <div class="team-member pb-4 mb-4 border-b">
                            <div class="flex justify-between items-start mb-2">
                                <span class="font-semibold text-sm truncate"
                                    >{member.email}</span
                                >
                                <span class="role-badge">{member.role}</span>
                            </div>
                            <div
                                class="flex justify-between items-center text-xs"
                            >
                                <span class="status-indicator {member.status}">
                                    <span class="dot"></span>
                                    {member.status}
                                </span>
                                {#if member.role !== "Owner"}
                                    <button class="remove-btn text-danger"
                                        >Remove</button
                                    >
                                {:else}
                                    <span class="text-muted italic"
                                        >Cannot remove</span
                                    >
                                {/if}
                            </div>
                        </div>
                    {/each}
                </div>
            </Card>
        </div>
    </div>
</div>

<style>
    .settings-container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }

    .settings-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        align-items: start;
    }
    @media (min-width: 1024px) {
        .settings-grid {
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
    .gap-2 {
        gap: 0.5rem;
    }
    .gap-5 {
        gap: 1.25rem;
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
    .italic {
        font-style: italic;
    }

    .text-muted {
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.6
        );
    }
    .text-warning {
        color: #f59e0b;
    }
    .text-danger {
        color: #ef4444;
    }

    .border-b {
        border-bottom: 1px solid var(--surface-border);
    }
    :global(.border-warning) {
        border-color: hsla(38, 92%, 50%, 0.3) !important;
    }
    .bg-surface {
        background: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.02
        );
    }

    .flex-1 {
        flex: 1;
    }
    .w-full {
        width: 100%;
    }
    .text-left {
        text-align: left;
    }
    .block {
        display: block;
    }
    .truncate {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .split-inputs {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.25rem;
    }
    @media (min-width: 640px) {
        .split-inputs {
            grid-template-columns: 1fr 1fr;
        }
    }

    /* Textarea */
    .input-group {
        width: 100%;
    }
    .custom-textarea {
        width: 100%;
        padding: 0.75rem 1rem;
        background: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.05
        );
        border: 1px solid var(--surface-border);
        border-radius: var(--radius-md);
        color: var(--text-color);
        font-family: inherit;
        outline: none;
        resize: vertical;
    }
    .custom-textarea:focus {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 2px
            hsla(
                var(--c-primary-h),
                var(--c-primary-s),
                var(--c-primary-l),
                0.2
            );
    }

    /* Hover Utilities */
    :global(.hover-warning:hover) {
        background: hsla(38, 92%, 50%, 0.1) !important;
    }

    /* Input inside custom container */
    .custom-input {
        width: 100%;
        padding: 0.5rem 0.75rem;
        font-family: inherit;
        color: var(--text-color);
        background: var(--bg-color);
        border: 1px solid var(--surface-border);
        border-radius: var(--radius-md);
        outline: none;
    }

    /* Team List */
    .team-list {
        overflow-y: auto;
    }
    .team-member:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .badge {
        padding: 0.1rem 0.6rem;
        background: hsla(
            var(--c-primary-h),
            var(--c-primary-s),
            var(--c-primary-l),
            0.1
        );
        color: var(--primary-color);
        border-radius: var(--radius-full);
        font-weight: 700;
        font-size: 0.75rem;
    }

    .role-badge {
        font-size: 0.7rem;
        padding: 0.1rem 0.4rem;
        background: var(--surface-border);
        border-radius: var(--radius-sm);
        text-transform: uppercase;
        font-weight: 600;
    }

    .status-indicator {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        text-transform: capitalize;
    }
    .status-indicator .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
    }
    .status-indicator.active .dot {
        background: #22c55e;
    }
    .status-indicator.invited .dot {
        background: #f59e0b;
    }

    .remove-btn {
        background: none;
        border: none;
        font-size: 0.75rem;
        cursor: pointer;
        padding: 0;
        text-decoration: underline;
    }
    .remove-btn:hover {
        opacity: 0.8;
    }

    :global([dir="rtl"]) .text-left {
        text-align: right;
    }
    :global([dir="rtl"]) .mr-2 {
        margin-right: 0;
        margin-left: 0.5rem;
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
