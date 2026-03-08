<script>
    import Auth from "$lib/components/Auth.svelte";
</script>

<div class="h-full w-full flex items-center justify-center fade-in">
    <Auth />
</div>

<style>
    .h-full {
        min-height: 100vh;
        flex: 1;
        display: flex;
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
