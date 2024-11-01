<footer>
    <div class="style-element">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
        >
            <polygon
                class="blue-polygon"
                points="0,100 100,100 100,0"
            />
            <polygon
                class="black-polygon"
                points="0,0 0,100 100,100"
            />
        </svg>
    </div>
    <div class="elements">
        <section class="contact">
            <h1>Kontakt</h1>
            <div>
                <h3>Adresse:</h3>
                <p>Kienitzerstraße 19a</p>
            </div>
            <div>
                <h3>Telefon:</h3>
                <p>Funk: +49 176 34600616</p>
                <p>Tel: 033475 57 54 8</p>
            </div>
            <div>
                <h3>E-mail:</h3>
                <p>henryksiemon@web.de</p>
            </div>
        </section>
        <section class="more-links">
            <div class="links">
                <a
                    href="/agbs"
                    class='link'
                >Agbs</a>
                <a
                    href="/impressum"
                    class='link'
                >Impressum</a>
            </div>
            <div class="call-container">
                <CallButton />
            </div>
        </section>
    </div>
</footer>

<style>
footer {
    height: 50vh;
    width: 100%;
    background-color: #000000;
    color: white;
    display: grid;
    grid-template-rows: auto 1fr auto;
}

.style-element {
    height: 5rem;
    width: 100%;
}

.style-element svg {
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
}

.style-element svg .black-polygon {
    fill: black;
}

.style-element svg .blue-polygon {
    fill: #00aaff;
    transition: 0.1s linear;
}

.elements {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 2rem;
}

.elements > section {
    padding: 1rem;
}

.contact {
    font-family: "Orbitron";
}

.contact h1 {
    font-size: 2.5rem;
}

.contact > div {
    margin-bottom: 0.25rem;
}

.more-links div {
    display: flex;
    flex-direction: column;
}

.more-links a {
    position: relative;
    border-radius: 5px;
    padding: 0.5rem;
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
    font-family: "Orbitron";
    text-decoration: none;
    border: 1px solid rgb(179, 179, 179);
}

.more-links a:hover {
    text-decoration: underline;
}
</style>

<script>
import CallButton from "./call_button.svelte"
</script>