<svelte:window bind:scrollY={y}/>

<div class="navbar-container">
<div
    class="navbar{navbarSticky? " navbar-sticky" : ""}"
    style={navbarTop}
    style:outline={navbarActive? "var(--navbar-outline)" : "none"}
    bind:offsetHeight={navbarHeight}
>
    <a href="/" class="logo">
        <img
            class="logo-image"
            src={logo_image}
            alt="Schwarze Lasertag-Waffe"
        >
        <div class="navbar_headings">
            <h1>Lasertag</h1>
            <h2>im Oderbruch</h2>
        </div>
    </a>
    <nav>
        <div>
            <a
                class="link"
                href="/#was"
            >Was?</a>
            <a
                class="link"
                href="/#wo"
            >Wo?</a>
            <a
                class="link"
                href="/#preise"
            >Preise</a>
        </div>
        <ExtraMenu/>
    </nav>
</div>
</div>

<style>
.navbar-container {
    width: 100%;
    height: var(--navbar-height);
}
    
.navbar {
    --extra-width: 2.5rem;
    --navbar-outline: rgb(215, 215, 215) solid 1px;
    
    z-index: 10;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    height: var(--navbar-height);
    justify-content: space-between;
    position: fixed;
    top: 0;
}
    
.navbar-sticky {
    transition: 0.4s ease;
}
    
.logo {
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
}
    
.logo-image {
    height: 1.5rem;
    transform: rotate(40deg);
}

.navbar_headings {
    display: flex;
    justify-content: center;
    flex-direction: column;
    transform: translateX(-5px);
}

.navbar_headings h1 {
    font-family: "BrunoAceSc";
    transform: translateY(5px);
    color: black;
}

.navbar_headings h2 {
    font-family: "BrunoAceSc";
    color: var(--accent-color);
    transform: translateY(-5px);
    font-size: 1.2rem;
}

.navbar nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 2rem;
}

.navbar .link {
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    position: relative;
    margin: 0 1rem 0 0;
}

.navbar .link:hover {
    color: var(--accent-color);
}

.navbar .link::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    top: 100%;
    left: 0;
    transform: scaleX(0);
    transition: 0.3s ease;
    border-radius: 5px;
    background-color: var(--accent-color);
}

.navbar .link:hover::after {
    transform: scaleX(1);
}    
</style>

<script>
    import logo_image from "$lib/assets/lasergun-simplefied.svg"
    import ExtraMenu from "./extra_menu.svelte";
    let navbarHeight, navbarActive
    let navbarSticky, navbarTop
    let navbarHidden = false
    let y, last_y = 0
    
    $: (() => {
        if (
            navbarActive &&
            y <= navbarHeight &&
            y < last_y &&
            y != 0
        ) {
            return
        } else {
            navbarActive = false
        }
        
        if (navbarSticky) {
            navbarSticky = false
        }

        if (y <= navbarHeight) {
            navbarTop = `top: ${-y}px;`
            navbarHidden = false
            last_y = y;
            return
        } else if (!navbarHidden) {
            navbarTop = `top: ${-navbarHeight}px;`
            navbarHidden = true
            last_y = y
            return
        }

        navbarSticky = true

        if (y < last_y) {
            navbarActive = true
        } else {
            navbarActive = false
        }

        if (navbarActive) {
            navbarTop = `top:0px;`
        } else {
            navbarTop = `top:${(-navbarHeight).toString()}px`
        }

        last_y = y
    })()
</script>