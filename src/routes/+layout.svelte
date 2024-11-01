<Navbar />
<slot></slot>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    :global(body) {
        font-family: monospace;
        background-color: white;
        position: relative;
        min-height: 100vh;
    }

    :global(:root) {
        --default-heading-family: "Orbitron";
        --accent-color: #0077ff;
        --navbar-height: 4.5rem;
        --default-max-width: 75rem;
    }
</style>
<script>
    import Navbar from "$lib/components/navbar.svelte";
    import { onNavigate } from "$app/navigation"

    onNavigate((navigation) => {
        if (!document.startViewTransition) return
        return new Promise((resolve)=>{
            document.startViewTransition(async()=>{
                resolve()
                await navigation.complete
            })
        })
    })
</script>