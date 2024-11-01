<svelte:body on:click={clickOutside} />
<svelte:window bind:scrollY={y} />

<div
    class="extra-menu"
    bind:this={menu}
>
    <button
        class="more-button"
        on:click={toggleMenu}
    >
        <div>
            <Dots bind:menuActive={menuActive} />
        </div>
    </button>
    <div class="menu{menuActive?" menuActive":""}" >
        <a on:click={closeMenu} href="/agbs">AGBs</a>
        <a on:click={closeMenu} href="/impressum">Impressum</a>
    </div>
</div>

<style>
.extra-menu {
    position: relative;
}

button {
    width: var(--extra-width);
    height: var(--extra-width);
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: 0.3s ease;
    background-color: rgb(0, 128, 255);
    color: white;
}
        
button div {
    padding: 0.5rem;
}
    
.menu {
    position: absolute;
    z-index: 9999;
    top: calc(100% - 1px);
    background-color: rgb(247, 247, 247);
    right: calc(100% - var(--extra-width));
    border-radius: 5px;
    transform: translateY(20px);
    transform-origin: top right;
    transition:
        opacity 0.3s ease,
        transform 0.3s ease;
    box-shadow: 0px 0px 2px grey;
    opacity: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 1rem;
    pointer-events: none;
}

.menu.menuActive {
    transform: translateY(0);
    pointer-events: all;
    opacity: 1;
}

.menu a {
    font-size: 1.2rem;
    text-decoration: none;
    padding: 0.25rem 1rem;
    border-radius: 3px;
    transition: 0.3s ease;
    color: black;
}

.menu a:hover {
    background-color: rgb(235, 235, 235);
}
</style>

<script>
    import Dots from "$lib/icons/three_dots.svelte"

    let y
    let menu
    let menuActive = false

    function toggleMenu() {
        menuActive = !menuActive
    }
    function closeMenu() {
        menuActive = false
    }

    function clickOutside(e) {
        if (
            !menu.contains(e.target)
            && !e.defaultPrevented && menuActive
        ) {
            closeMenu()
        }
    }

    $: y, closeMenu()
</script>