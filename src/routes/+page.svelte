<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { currentUser, currentProject } from "$lib/store.js";

    onMount(() => {
        // Basic app entry routing logic
        const unsubscribeUser = currentUser.subscribe((user) => {
            if (!user) {
                goto("/auth");
            } else {
                const unsubscribeProj = currentProject.subscribe((proj) => {
                    if (!proj) {
                        goto("/onboarding");
                    } else {
                        goto("/analytics");
                    }
                });
                unsubscribeProj();
            }
        });
        unsubscribeUser();
    });
</script>

<div class="h-screen w-full flex items-center justify-center">
    <div class="loader">Loading...</div>
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
