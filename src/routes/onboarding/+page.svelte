<script>
    import Onboarding from "$lib/components/Onboarding.svelte";
</script>

<div class="h-screen w-full flex items-center justify-center p-4">
    <Onboarding />
</div>

<style>
    .h-screen {
        min-height: 100vh;
        height: 100%;
    }
    .w-full {
        width: 100%;
    }
    .flex {
        display: flex;
    }
    .items-center {
        align-items: center;
    }
    .justify-center {
        justify-content: center;
    }
    .p-4 {
        padding: 1rem;
    }
</style>
