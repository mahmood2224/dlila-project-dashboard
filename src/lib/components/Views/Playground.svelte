<script>
    import { dict } from "$lib/store.js";
    import Card from "../ui/Card.svelte";
    import Button from "../ui/Button.svelte";
    import { Send, Settings2, ShieldCheck, Box } from "lucide-svelte";

    let messageInput = "";
    let isTyping = false;
    let showTraceability = true;

    // Model Params
    let temperature = 0.7;
    let maxTokens = 2000;
    let systemPrompt = "You are a helpful AI assistant.";

    let chatHistory = [
        {
            role: "assistant",
            content:
                "Hello! I am your AI assistant. I'm connected to your knowledge base. How can I help you today?",
        },
    ];

    function sendMessage() {
        if (!messageInput.trim()) return;

        chatHistory = [...chatHistory, { role: "user", content: messageInput }];

        const currentMsg = messageInput;
        messageInput = "";
        isTyping = true;

        setTimeout(() => {
            isTyping = false;
            chatHistory = [
                ...chatHistory,
                {
                    role: "assistant",
                    content: `Here is a simulated response to: "${currentMsg}". In a real environment, this would hit the LLM endpoint with Temp=${temperature}.`,
                    trace: [
                        { file: "Company_Handbook.pdf", confidence: "98%" },
                        { file: "FAQ_2023.md", confidence: "85%" },
                    ],
                },
            ];
        }, 1500);
    }

    function handleKeydown(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    }
</script>

<div class="playground-container fade-in">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6 border-b pb-4">
        <div class="flex items-center gap-3">
            <div class="header-icon">
                <Box size={20} class="text-primary" />
            </div>
            <h2 class="text-xl font-bold">{$dict.playground.headerMode}</h2>
        </div>
        <Button
            variant="outline"
            size="sm"
            on:click={() => (showTraceability = !showTraceability)}
        >
            <ShieldCheck size={16} class="mr-2 text-success" />
            Traceability: {showTraceability ? "ON" : "OFF"}
        </Button>
    </div>

    <div class="playground-grid">
        <!-- Chat Area -->
        <Card padding="0" className="chat-interface flex-col h-full">
            <div class="chat-messages p-6">
                {#each chatHistory as msg}
                    <div class="message-wrapper {msg.role}">
                        <div class="avatar">
                            {msg.role === "assistant" ? "AI" : "U"}
                        </div>
                        <div class="bubble-content">
                            <span
                                class="role-name font-semibold text-xs mb-1 block"
                            >
                                {msg.role === "assistant"
                                    ? $dict.playground.assistant
                                    : $dict.playground.you}
                            </span>
                            <div class="bubble text-sm {msg.role}">
                                {msg.content}
                            </div>

                            {#if msg.trace && showTraceability}
                                <div class="trace-box mt-2">
                                    <p
                                        class="text-xs font-semibold mb-1 flex items-center gap-1 text-success"
                                    >
                                        <ShieldCheck size={12} /> Sources Used
                                    </p>
                                    {#each msg.trace as t}
                                        <div
                                            class="flex justify-between text-xs text-muted mb-1"
                                        >
                                            <span class="font-mono"
                                                >{t.file}</span
                                            >
                                            <span>{t.confidence}</span>
                                        </div>
                                    {/each}
                                </div>
                            {/if}
                        </div>
                    </div>
                {/each}

                {#if isTyping}
                    <div class="message-wrapper assistant">
                        <div class="avatar">AI</div>
                        <div class="bubble-content">
                            <span
                                class="role-name font-semibold text-xs mb-1 block"
                                >{$dict.playground.assistant}</span
                            >
                            <div class="bubble assistant typing-indicator">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    </div>
                {/if}
            </div>

            <div class="chat-input-area p-4 border-t bg-surface">
                <div class="input-wrapper relative">
                    <textarea
                        bind:value={messageInput}
                        on:keydown={handleKeydown}
                        placeholder={$dict.playground.placeholder}
                        class="custom-textarea"
                        rows="1"
                    ></textarea>
                    <button
                        class="send-btn"
                        on:click={sendMessage}
                        disabled={!messageInput.trim()}
                    >
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </Card>

        <!-- Configuration Sidebar -->
        <Card
            padding="1.5rem"
            className="config-sidebar bg-surface h-full flex-col"
        >
            <h3 class="font-bold flex items-center gap-2 mb-6 border-b pb-3">
                <Settings2 size={18} />
                {$dict.playground.params}
            </h3>

            <div class="flex-1 flex-col gap-6">
                <!-- System Prompt -->
                <div class="control-group">
                    <label
                        for="sysPrompt"
                        class="text-sm font-semibold mb-2 block"
                        >{$dict.playground.systemPrompt}</label
                    >
                    <textarea
                        id="sysPrompt"
                        bind:value={systemPrompt}
                        class="config-textarea w-full"
                        rows="4"
                    ></textarea>
                </div>

                <!-- Temperature -->
                <div class="control-group">
                    <div class="flex justify-between mb-2">
                        <label for="temp" class="text-sm font-semibold"
                            >{$dict.playground.temperature}</label
                        >
                        <span class="text-xs font-mono bg-border px-2 rounded"
                            >{temperature}</span
                        >
                    </div>
                    <input
                        type="range"
                        id="temp"
                        bind:value={temperature}
                        min="0"
                        max="1"
                        step="0.1"
                        class="w-full custom-range"
                    />
                </div>

                <!-- Max Tokens -->
                <div class="control-group">
                    <div class="flex justify-between mb-2">
                        <label for="tokens" class="text-sm font-semibold"
                            >{$dict.playground.maxTokens}</label
                        >
                        <span class="text-xs font-mono bg-border px-2 rounded"
                            >{maxTokens}</span
                        >
                    </div>
                    <input
                        type="range"
                        id="tokens"
                        bind:value={maxTokens}
                        min="256"
                        max="4096"
                        step="256"
                        class="w-full custom-range"
                    />
                </div>
            </div>
        </Card>
    </div>
</div>

<style>
    .playground-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        max-width: 1200px;
        margin: 0 auto;
    }

    .playground-grid {
        display: grid;
        grid-template-columns: 1fr 300px;
        gap: 1.5rem;
        flex: 1;
        min-height: 0;
    }

    .mb-6 {
        margin-bottom: 1.5rem;
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
    .pb-3 {
        padding-bottom: 0.75rem;
    }
    .p-6 {
        padding: 1.5rem;
    }
    .p-4 {
        padding: 1rem;
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
    .gap-6 {
        gap: 1.5rem;
    }
    .mr-2 {
        margin-right: 0.5rem;
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
    .block {
        display: block;
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
    :global(.text-success) {
        color: #22c55e;
    }

    .border-b {
        border-bottom: 1px solid var(--surface-border);
    }
    .border-t {
        border-top: 1px solid var(--surface-border);
    }
    .bg-surface {
        background: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.02
        );
    }
    .bg-border {
        background: var(--surface-border);
    }
    .rounded {
        border-radius: var(--radius-sm);
    }
    .px-2 {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
    .font-mono {
        font-family: monospace;
    }
    .flex-1 {
        flex: 1;
    }

    .header-icon {
        width: 40px;
        height: 40px;
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

    /* Chat Interface */
    :global(.chat-interface) {
        height: calc(100vh - 160px);
        display: flex;
        flex-direction: column;
    }
    .chat-messages {
        flex: 1;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .message-wrapper {
        display: flex;
        gap: 1rem;
        max-width: 85%;
    }
    .message-wrapper.user {
        align-self: flex-end;
        flex-direction: row-reverse;
    }
    .message-wrapper.assistant {
        align-self: flex-start;
    }

    .avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: var(--surface-border);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 0.875rem;
        flex-shrink: 0;
    }
    .message-wrapper.assistant .avatar {
        background: linear-gradient(
            135deg,
            var(--primary-color),
            hsla(var(--c-primary-h), var(--c-primary-s), 40%)
        );
        color: white;
    }

    .bubble-content {
        display: flex;
        flex-direction: column;
    }
    .message-wrapper.user .bubble-content {
        align-items: flex-end;
    }

    .role-name {
        color: hsla(
            var(--c-contrast-h),
            var(--c-contrast-s),
            var(--c-contrast-l),
            0.5
        );
    }

    .bubble {
        padding: 1rem 1.25rem;
        border-radius: var(--radius-lg);
        line-height: 1.5;
    }
    .bubble.assistant {
        background: var(--surface-bg);
        border: 1px solid var(--surface-border);
        border-top-left-radius: 4px;
    }
    :global([dir="rtl"]) .bubble.assistant {
        border-top-left-radius: var(--radius-lg);
        border-top-right-radius: 4px;
    }

    .bubble.user {
        background: hsla(
            var(--c-primary-h),
            var(--c-primary-s),
            var(--c-primary-l),
            0.1
        );
        border: 1px solid
            hsla(
                var(--c-primary-h),
                var(--c-primary-s),
                var(--c-primary-l),
                0.2
            );
        color: var(--text-color);
        border-top-right-radius: 4px;
    }
    :global([dir="rtl"]) .bubble.user {
        border-top-right-radius: var(--radius-lg);
        border-top-left-radius: 4px;
    }

    /* Traceability Box */
    .trace-box {
        padding: 0.75rem;
        background: hsla(var(--c-base-h), var(--c-base-s), 0%, 0.3);
        border-radius: var(--radius-md);
        border: 1px solid hsla(142, 71%, 45%, 0.2);
        margin-top: 0.5rem;
        width: 100%;
    }

    /* Typing Indicator */
    .typing-indicator {
        display: flex;
        gap: 0.25rem;
        padding: 1rem !important;
        align-items: center;
    }
    .typing-indicator span {
        width: 6px;
        height: 6px;
        background: var(--primary-color);
        border-radius: 50%;
        animation: bounce 1.4s infinite ease-in-out both;
    }
    .typing-indicator span:nth-child(1) {
        animation-delay: -0.32s;
    }
    .typing-indicator span:nth-child(2) {
        animation-delay: -0.16s;
    }
    @keyframes bounce {
        0%,
        80%,
        100% {
            transform: scale(0);
        }
        40% {
            transform: scale(1);
        }
    }

    /* Chat Input */
    .chat-input-area {
        flex-shrink: 0;
    }
    .input-wrapper {
        position: relative;
    }
    .custom-textarea {
        width: 100%;
        padding: 1rem 3.5rem 1rem 1rem;
        font-family: inherit;
        font-size: 0.95rem;
        color: var(--text-color);
        background: var(--bg-color);
        border: 1px solid var(--surface-border);
        border-radius: var(--radius-md);
        outline: none;
        resize: none;
        box-sizing: border-box;
        line-height: 1.5;
    }
    :global([dir="rtl"]) .custom-textarea {
        padding-left: 3.5rem;
        padding-right: 1rem;
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

    .send-btn {
        position: absolute;
        right: 0.75rem;
        bottom: 0.75rem;
        background: var(--primary-color);
        color: white;
        border: none;
        width: 32px;
        height: 32px;
        border-radius: var(--radius-sm);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all var(--transition-fast);
    }
    :global([dir="rtl"]) .send-btn {
        right: auto;
        left: 0.75rem;
    }
    .send-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    .send-btn:not(:disabled):hover {
        transform: scale(1.05);
    }

    /* Sidebar Controls */
    :global(.config-sidebar) {
        height: calc(100vh - 160px);
        overflow-y: auto;
    }

    .config-textarea {
        padding: 0.75rem;
        background: var(--bg-color);
        border: 1px solid var(--surface-border);
        border-radius: var(--radius-md);
        color: var(--text-color);
        outline: none;
        font-size: 0.875rem;
        resize: vertical;
    }
    .config-textarea:focus {
        border-color: var(--primary-color);
    }

    .custom-range {
        -webkit-appearance: none;
        width: 100%;
        height: 4px;
        background: var(--surface-border);
        border-radius: 2px;
        outline: none;
    }
    .custom-range::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--primary-color);
        cursor: pointer;
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
