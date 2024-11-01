<div class="map-container">
    <a
        class="maps-icon"
        href="https://maps.app.goo.gl/x3VQrpbHXad3Wo7T8"
        target="_blank"
    ><img src={maps} alt="Google Maps icon"></a>
    <div class="click-icon">
        <img src={click} alt="Klick Icon">
    </div>
    <a
        class="link"
        target="_blank"
        href="https://maps.app.goo.gl/x3VQrpbHXad3Wo7T8">
        Standort auf Google Maps öffnen.
    </a>
    <img class="map" src={map} alt="Karte">
</div>

<style>
.map-container {
    width: 100%;
    margin: auto;
    overflow: hidden;
    height: 100%;
    position: relative;
    border-radius: 10px;
    isolation: isolate;
}

.map-container .map {
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s ease;
}

.map-container .link {
    top: 0;
    left: 0;
    cursor: pointer;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
     
    height: 100%;
    width: 100%;
    
    z-index: 2;
    opacity: 0;
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
    transition: all 0.5s ease;
    background-color: rgba(0, 0, 0, 0.373);
}

.map-container:hover a {
    opacity: 1;
}

.map-container:hover .map {
    scale: 1.1;
}

.maps-icon {
    background-color: white;
    position: absolute;
    border-radius: 10px;
    width: 3rem;
    height: 3rem;
    z-index: 3;
    top: 0.5rem;
    left: 0.5rem;
    box-shadow:
        0px 0px 2px rgb(211, 211, 211) inset,
        0px 0px 3px rgb(166, 166, 166);
    padding: 0.5rem;
}

.maps-icon img {
    width: 100%;
    height: 100%;
}

.click-icon {
    display: flex;
    align-items: center;

    position: absolute;
    height: 3rem;
    width: 3rem;
    bottom: 1rem;
    right: 1rem;
    background-color: rgba(0, 0, 0, 0.439);
    color: white;
    border-radius: 10px;
    z-index: 2;
    padding: 0.7rem;
    opacity: 1;
}

.click-icon img {
    width: 100%;
    height: 100%;
}

.map-container:hover .click-icon {
    transition: 0.3s ease;
    opacity: 0;
}

@media (max-width: 900px) {
    .map-container {
        border-radius: 0;
    }
}
</style>

<script>
    import map from '$lib/assets/map.png'
    import maps from '$lib/assets/maps.svg'
    import click from '$lib/assets/click.svg'
</script>