<header>
    <!-- <img src="/images/texture-bg.webp" alt=""> -->
    <div class="header-text">
        <h1>Bist du bereit?</h1>
        <p>
            Ob mit der Familie oder Freunden,
            zusammen im Team oder jeder gegen jeden,
            bei uns können sie in die Welt vom Lasertag
            eintauchen und Erinnerungen schaffen.
        </p>
    </div>
</header>

<style>
    header {
        width: 100%;
        height: 55vh;
        /* display: flex; */
        display: grid;
        grid-template-columns: 2fr 1fr;
        overflow: hidden;
        position: relative;
        align-items: center;
        /* justify-content: center; */
        will-change: transform;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(/images/texture-bg.webp);
    }

    .img-container {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .img-container::before {
        content: "";
        width: 10rem;
        height: 10rem;
        position: absolute;
        background: repeating-radial-gradient(
            circle at 50% 100%,
            #ffffff00 18px,
            #ff8e8e 29.5%, 
            #ff0000 30%
        );
        border-radius: 30% 30% 50% 50%;
        scale: 1;
    /*  animation: wave 2.5s linear infinite; */
    }

    /* header::before {
        top: 0;
        left: 0;
        z-index: -1;
        content: "";
        width: 100%;
        height: 100%;
        position: fixed;
        background-size: 100%;
        will-change: transform;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-image: url(/images/texture-bg.webp);
    } */

    header h1 {
        font-family: var(--default-heading-family);
    }

    .header-text {
        max-width: 30rem;
        margin-left: 2rem;
        z-index: 2;
        color: white;
    }

    .header-text p {
        font-size: 1.5rem;
    }
</style>

<script>
    import gun from "$lib/assets/lasergun-tp.png"
</script>