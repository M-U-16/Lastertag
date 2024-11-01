<div
    class="container"
    id="was"
    use:inview={options}
    on:inview_change={(event) => {
        const { inView, entry, scrollDirection, observer, node} = event.detail;
        if (inView && !firstInView) {
            isInView = inView
            firstInView = true
        }
    }}
    
>
    <div class="was-text{isInView? " active-text" : ""}">
        <h1>Was ist Lasertag?</h1>
        <div class="elements">
            <p>
                Lorem ipsum dolor sit
            </p>
            <p>
                amet consectetur adipisicing elit.
            </p>
            <p>Consequatur, ratione!<p>

        </div>
    </div>
    <div class="was-img-container">
        <img
            class="noselect"
            src={gun}
            alt="Lasertag Waffe"
        >
    </div>
</div>

<style>
.container {
    max-width: var(--default-max-width);
    display: grid;
    font-size: 1.8rem;
    /* transition: 2s ease; */
    color: #000000;
    background-color: white;
    min-height: 22rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: auto;
    grid-template-columns: 1fr 1fr;
    
}

.was-img-container {
    width: 100%;
    height: 100%;
    position: relative;
}

.was-img-container::before {
    content: "";
    width: 10rem;
    height: 10rem;
    position: absolute;
    background: repeating-radial-gradient(
        circle at 50% 100%,
        #ffffff 18px,
        #ff8e8e 29.8%, 
        #ff0000 30%
    );
    border-radius: 50%;
    display: none;
}

.was-img-container img {
    width: 100%;
    transform: rotate(20deg);
}

.was-text {
    --transition-delay: 0.2s;

    padding: 1rem;
    height: 100%;
    width: 100%;
}

.was-text h1 {
    font-family: "Orbitron";
    font-size: 2rem;
}

.was-text .elements p {
    opacity: 0;
    transform: translateY(20px);
}

.was-text.active-text .elements p {
    opacity: 1;
    transform: translateY(0);
}

.was-text.active-text .elements p:nth-child(1) {
    transition:
        transform 0.5s ease calc(var(--transition-delay) * 1),
        opacity 0.5s ease calc(var(--transition-delay) * 1) !important;
}

.was-text.active-text .elements p:nth-child(2) {
    transition:
        transform 0.5s ease calc(var(--transition-delay) * 2),
        opacity 0.5s ease calc(var(--transition-delay) * 2) !important;
}

.was-text.active-text .elements p:nth-child(3) {
    transition:
        transform 0.5s ease calc(var(--transition-delay) * 3),
        opacity 0.5s ease calc(var(--transition-delay) * 3) !important;
}
</style>

<script>
    import { inview } from "svelte-inview"
    import gun from "$lib/assets/lasergun-tp.png"
    let isInView, firstInView
    const options = {}
</script>