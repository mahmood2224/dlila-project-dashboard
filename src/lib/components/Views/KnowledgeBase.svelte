<script>
    import { dict } from "$lib/store.js";
    import Card from "../ui/Card.svelte";
    import Button from "../ui/Button.svelte";
    import Modal from "../ui/Modal.svelte";
    import Input from "../ui/Input.svelte";
    import Textarea from "../ui/Textarea.svelte";
    import {
        UploadCloud,
        FolderOpen,
        FileText,
        Settings2,
        Trash2,
        Clock,
        CheckCircle,
        Plus,
    } from "lucide-svelte";

    let isDragging = false;
    let selectedDepartment = "";
    let showCreateDeptModal = false;
    let newDeptName = "";
    let newDeptDesc = "";
    let newDeptError = "";

    // Live word count for validation
    $: wordCount = newDeptDesc.trim()
        ? newDeptDesc.trim().split(/\s+/).length
        : 0;
    $: isDeptValid = newDeptName.trim().length > 0 && wordCount >= 50;

    let departments = [
        { id: "general", label: "General Operations" },
        { id: "hr", label: "HR & Benefits" },
        { id: "sales", label: "Sales Material" },
    ];

    function handleCreateDept() {
        if (!isDeptValid) {
            newDeptError =
                "Please ensure the name is filled and description is at least 50 words.";
            return;
        }

        const newId = newDeptName.toLowerCase().replace(/[^a-z0-9]/g, "-");
        departments = [...departments, { id: newId, label: newDeptName }];
        selectedDepartment = newId;

        // Reset form
        showCreateDeptModal = false;
        newDeptName = "";
        newDeptDesc = "";
        newDeptError = "";
    }

    const documents = [
        {
            id: 1,
            name: "Employee_Handbook_2023.pdf",
            size: "2.4 MB",
            dept: "HR & Benefits",
            status: "ready",
            date: "2 hrs ago",
        },
        {
            id: 2,
            name: "Q3_Sales_Deck_Final.pptx",
            size: "5.1 MB",
            dept: "Sales Material",
            status: "processing",
            date: "10 mins ago",
        },
        {
            id: 3,
            name: "Architecture_Overview.md",
            size: "12 KB",
            dept: "General Operations",
            status: "ready",
            date: "1 day ago",
        },
        {
            id: 4,
            name: "corrupt_data_dump.csv",
            size: "450 KB",
            dept: "General Operations",
            status: "failed",
            date: "2 days ago",
        },
    ];

    function handleDragOver(e) {
        e.preventDefault();
        isDragging = true;
    }

    function handleDragLeave() {
        isDragging = false;
    }

    function handleDrop(e) {
        e.preventDefault();
        isDragging = false;
        // Mock processing drop
        console.log("Files dropped", e.dataTransfer.files);
    }
</script>

<div class="knowledge-container fade-in">
    <div class="header mb-8">
        <h2 class="text-2xl font-bold mb-2">{$dict.knowledge.title}</h2>
        <p class="text-muted">{$dict.knowledge.subTitle}</p>
    </div>

    <!-- Upload Section -->
    <div class="upload-grid mb-8">
        <!-- Drag & Drop Zone -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            class="dropzone {isDragging
                ? 'active'
                : ''} flex-col items-center justify-center p-8 text-center"
            on:dragover={handleDragOver}
            on:dragleave={handleDragLeave}
            on:drop={handleDrop}
        >
            <div class="upload-icon mb-4 text-primary">
                <UploadCloud size={48} />
            </div>
            <h3 class="text-lg font-bold mb-1">{$dict.knowledge.dragDrop}</h3>
            <p class="text-sm text-muted mb-6">
                {$dict.knowledge.supportedFormats}
            </p>
            <Button variant="secondary">{$dict.knowledge.selectFiles}</Button>
        </div>

        <!-- Upload Configuration -->
        <Card padding="1.5rem" className="flex-col h-full bg-surface">
            <h3 class="font-bold flex items-center gap-2 mb-4 pb-3 border-b">
                <Settings2 size={18} />
                {$dict.knowledge.uploadSettings}
            </h3>

            <div class="form-group flex-1">
                <label
                    for="deptSelect"
                    class="text-sm font-semibold mb-2 block text-left"
                >
                    {$dict.knowledge.targetDept}
                </label>
                <div class="flex items-center gap-2">
                    <div class="select-wrapper flex-1">
                        <FolderOpen size={16} class="select-icon" />
                        <select
                            id="deptSelect"
                            class="custom-select w-full"
                            bind:value={selectedDepartment}
                        >
                            <option value="">No Department (Optional)</option>
                            {#each departments as dept}
                                <option value={dept.id}>{dept.label}</option>
                            {/each}
                        </select>
                    </div>
                    <Button
                        variant="ghost"
                        on:click={() => (showCreateDeptModal = true)}
                        className="px-3"
                        title="Add New Department"
                    >
                        <Plus size={18} />
                    </Button>
                </div>
                <p class="text-xs text-muted mt-3">
                    {$dict.knowledge.deptHelper}
                </p>
            </div>
        </Card>
    </div>

    <!-- Data Table Section -->
    <Card padding="0" className="table-card">
        <div class="p-4 border-b flex justify-between items-center bg-surface">
            <h3 class="font-bold">{$dict.knowledge.indexedFiles}</h3>
            <Button variant="ghost" size="sm"
                >{$dict.knowledge.refreshStatus}</Button
            >
        </div>

        <div class="table-responsive">
            <table class="data-table w-full">
                <thead>
                    <tr>
                        <th class="text-left w-2/5"
                            >{$dict.knowledge.fileName}</th
                        >
                        <th class="text-left">{$dict.knowledge.dept}</th>
                        <th class="text-center">{$dict.knowledge.status}</th>
                        <th class="text-right">{$dict.knowledge.date}</th>
                        <th class="text-center w-16"
                            >{$dict.knowledge.actions}</th
                        >
                    </tr>
                </thead>
                <tbody>
                    {#each documents as doc}
                        <tr>
                            <td class="text-left">
                                <div class="flex items-center gap-3">
                                    <FileText size={16} class="text-muted" />
                                    <div>
                                        <p class="font-medium text-sm">
                                            {doc.name}
                                        </p>
                                        <p class="text-xs text-muted mt-0.5">
                                            {doc.size}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td class="text-left"
                                ><span class="dept-badge">{doc.dept}</span></td
                            >
                            <td class="text-center">
                                <span class="status-badge {doc.status}">
                                    {#if doc.status === "ready"}
                                        <!-- svelte-ignore a11y-label-has-associated-control -->
                                        <label
                                            class="flex items-center gap-1 justify-center"
                                            ><CheckCircle size={12} />
                                            {$dict.knowledge.statusReady}</label
                                        >
                                    {:else if doc.status === "processing"}
                                        <!-- svelte-ignore a11y-label-has-associated-control -->
                                        <label
                                            class="flex items-center gap-1 justify-center"
                                            ><Clock size={12} class="spin" />
                                            {$dict.knowledge.statusProc}</label
                                        >
                                    {:else}
                                        <!-- svelte-ignore a11y-label-has-associated-control -->
                                        <label
                                            class="flex items-center gap-1 justify-center"
                                            >{$dict.knowledge.statusFail}</label
                                        >
                                    {/if}
                                </span>
                            </td>
                            <td class="text-right text-sm text-muted"
                                >{doc.date}</td
                            >
                            <td class="text-center">
                                <button
                                    class="action-btn delete"
                                    title="Delete File"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </Card>
</div>

<!-- Create Department Modal -->
<Modal
    bind:open={showCreateDeptModal}
    title="Create New Department"
    description="Establish a new knowledge silo. A detailed description is required for the AI to understand its context."
    confirmText="Create Department"
    confirmVariant="primary"
    on:confirm={handleCreateDept}
    on:cancel={() => {
        newDeptName = "";
        newDeptDesc = "";
        newDeptError = "";
    }}
>
    <!-- We must hijack the default confirm to disable it if invalid, 
         so we build our own footer replacing the modal's default action if we prefer, 
         or just use the validation warning -->

    <div class="pt-2">
        <Input
            id="deptName"
            label="Department Name"
            placeholder="e.g. Engineering Docs"
            bind:value={newDeptName}
        />

        <div class="mt-4">
            <Textarea
                id="deptDesc"
                label="Detailed Description (Min 50 words)"
                placeholder="Explain the purpose of this department, what kind of documents will be stored here, and who should have access..."
                rows={5}
                bind:value={newDeptDesc}
            />
            <div class="flex justify-between items-center mt-1">
                <span
                    class="text-xs {wordCount < 50
                        ? 'text-danger'
                        : 'text-success'}"
                >
                    {wordCount} / 50 words minimum
                </span>
                {#if newDeptError}
                    <span class="text-xs text-danger">{newDeptError}</span>
                {/if}
            </div>
        </div>

        <!-- Overriding the confirm button since the Modal component currently 
             doesn't take a 'disabled' prop for the Confirm button -->
        {#if !isDeptValid}
            <div
                class="mt-4 p-3 bg-danger/10 border border-danger/20 rounded text-sm text-danger flex items-center gap-2"
            >
                <span class="font-bold">Note:</span> You must write at least 50 words
                to create this department.
            </div>
        {/if}
    </div>
</Modal>

<style>
    .knowledge-container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }

    .upload-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    @media (min-width: 768px) {
        /* Dropzone takes 2/3, Config takes 1/3 */
        .upload-grid {
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
    .mb-3 {
        margin-bottom: 0.75rem;
    }
    .mb-2 {
        margin-bottom: 0.5rem;
    }
    .mb-1 {
        margin-bottom: 0.25rem;
    }
    .mt-3 {
        margin-top: 0.75rem;
    }
    .mt-0\.5 {
        margin-top: 0.125rem;
    }

    .p-8 {
        padding: 2rem;
    }
    .p-4 {
        padding: 1rem;
    }
    .pb-3 {
        padding-bottom: 0.75rem;
    }

    .gap-1 {
        gap: 0.25rem;
    }
    .gap-2 {
        gap: 0.5rem;
    }
    .gap-3 {
        gap: 0.75rem;
    }

    .text-center {
        text-align: center;
    }
    .text-left {
        text-align: left;
    }
    .text-right {
        text-align: right;
    }
    .block {
        display: block;
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
    .font-semibold {
        font-weight: 600;
    }
    .font-medium {
        font-weight: 500;
    }

    .text-danger {
        color: #ef4444;
    }
    .bg-danger\/10 {
        background: hsla(0, 84%, 60%, 0.1);
    }
    .border-danger\/20 {
        border-color: hsla(0, 84%, 60%, 0.2);
    }
    .text-success {
        color: #22c55e;
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

    .flex-1 {
        flex: 1;
    }

    /* Dropzone Styling */
    .dropzone {
        border: 2px dashed var(--surface-border);
        border-radius: var(--radius-lg);
        background: var(--surface-bg);
        transition: all var(--transition-smooth);
        display: flex;
        flex-direction: column;
    }
    .dropzone.active {
        border-color: var(--primary-color);
        background: hsla(
            var(--c-primary-h),
            var(--c-primary-s),
            var(--c-primary-l),
            0.05
        );
        transform: scale(1.02);
    }
    .upload-icon {
        background: hsla(
            var(--c-primary-h),
            var(--c-primary-s),
            var(--c-primary-l),
            0.1
        );
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Select Input */
    .select-wrapper {
        position: relative;
        display: flex;
        align-items: center;
    }
    :global(.select-icon) {
        position: absolute;
        left: 1rem;
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.5
        );
        pointer-events: none;
    }
    :global([dir="rtl"]) :global(.select-icon) {
        left: auto;
        right: 1rem;
    }

    .custom-select {
        appearance: none;
        padding: 0.75rem 1rem 0.75rem 2.8rem;
        font-family: inherit;
        font-size: 0.9rem;
        color: var(--text-color);
        background: var(--bg-color);
        border: 1px solid var(--surface-border);
        border-radius: var(--radius-md);
        outline: none;
        cursor: pointer;
        width: 100%;
        transition: border-color var(--transition-fast);
        box-shadow: var(--shadow-sm);
    }
    :global([dir="rtl"]) .custom-select {
        padding-left: 1rem;
        padding-right: 2.8rem;
    }
    .custom-select:focus {
        border-color: var(--primary-color);
    }

    /* Data Table */
    .table-responsive {
        width: 100%;
        overflow-x: auto;
    }
    .data-table {
        border-collapse: collapse;
    }
    .data-table th,
    .data-table td {
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--surface-border);
    }
    .data-table th {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.5
        );
        background: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.01
        );
    }
    .data-table tbody tr {
        transition: background var(--transition-fast);
    }
    .data-table tbody tr:hover {
        background: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.02
        );
    }
    .data-table tbody tr:last-child td {
        border-bottom: none;
    }

    .dept-badge {
        font-size: 0.75rem;
        padding: 0.2rem 0.6rem;
        border-radius: var(--radius-sm);
        background: var(--surface-bg);
        border: 1px solid var(--surface-border);
        white-space: nowrap;
    }

    .status-badge {
        font-size: 0.7rem;
        padding: 0.2rem 0.6rem;
        border-radius: var(--radius-full);
        font-weight: 600;
        text-transform: uppercase;
        display: inline-block;
        white-space: nowrap;
    }
    .status-badge.ready {
        background: hsla(142, 71%, 45%, 0.1);
        color: #22c55e;
    }
    .status-badge.processing {
        background: hsla(238, 86%, 67%, 0.1);
        color: var(--primary-color);
    }
    .status-badge.failed {
        background: hsla(0, 84%, 60%, 0.1);
        color: #ef4444;
    }

    :global(.spin) {
        animation: spin 2s linear infinite;
    }
    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }

    .action-btn {
        background: transparent;
        border: none;
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.4
        );
        cursor: pointer;
        padding: 0.4rem;
        border-radius: var(--radius-sm);
        transition: all var(--transition-fast);
        display: inline-flex;
    }
    .action-btn:hover {
        background: var(--surface-hover);
        color: var(--text-color);
    }
    .action-btn.delete:hover {
        color: #ef4444;
        background: hsla(0, 84%, 60%, 0.1);
    }

    .w-2\/5 {
        width: 40%;
    }
    .w-16 {
        width: 4rem;
    }

    /* RTL specific overrides */
    :global([dir="rtl"]) .text-left {
        text-align: right;
    }
    :global([dir="rtl"]) .text-right {
        text-align: left;
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
