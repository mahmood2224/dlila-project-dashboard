<script>
    import Auth from "$lib/components/Auth.svelte";
</script>

<div class="h-screen w-full flex items-center justify-center">
    <Auth />
</div>

<style>
    .h-screen {
        height: 100vh;
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
</style>
