<div>
    <Header />
    <section class="maps-section" id="wo">
        <Maps />
        <div>
            <h2>Wo?</h2>
            <p>
                Wenn sie auf die Karte oder das <span>
                    <img
                        src={maps}
                        alt="Google Maps Icon"
                    >
                </span>-Icon klicken,
                dann kommen sie auf Google Maps.
                Unser Standort ist dort Eingetragen und
                kann zur Routenplanung genutzt werden.
            </p>
        </div>
    </section>
    <Slidein />
    <Footer />
</div>

<style>
    .maps-section {
        margin: auto;
        height: 25rem;
        display: grid;
        padding: 1rem;
        background-color: white;
        grid-template-columns: 1.5fr 1fr;
        max-width: var(--default-max-width);
    }

    .maps-section div {
        padding: 1rem;
        display: flex;
        max-width: 30em;
        flex-direction: column;
        justify-content: center;
    }

    .maps-section div h2 {
        font-size: 2.2rem;
        font-family: var(--default-heading-family);
    }
    
    .maps-section div p {
        font-size: 1.4rem;
    }

    .maps-section div p img {
        width: 1rem;
        padding: 1px;
        transform: translate(8px, 5px);
    }

    @media (max-width: 900px) {
        .maps-section {
            height: 20rem;
            padding: 0;
        }
    }
</style>

<script>
    import maps from '$lib/assets/maps.svg'
    import Maps from "$lib/components/maps.svelte"
    import Footer from "$lib/components/footer.svelte"
    import Header from "$lib/components/header.svelte"
    import Slidein from "$lib/components/slidein.svelte"
</script>