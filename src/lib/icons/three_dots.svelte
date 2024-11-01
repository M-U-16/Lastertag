<script>
    export let menuActive = false
</script>

<style>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

div svg {
    position: absolute;
}

svg.dots circle{
    opacity: 1;
    transition: 0.2s ease;
}

svg.close {
    opacity: 0;
    transform: scale(0);
    transition: 0.2s ease;
}

.menuActive .dots circle {
    opacity: 0;
}

.menuActive .close {
    opacity: 1;
    transform: scale(1);
}
</style>

<div class={menuActive?'menuActive':''}>
<svg
    class="dots"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
>
    <circle
        cx="256"
        cy="256"
        r="32"
        fill="currentColor"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="32"
    />
    <circle
        cx={menuActive?"256":"416"}
        cy="256"
        r="32"
        fill="currentColor"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="32"
    />
    <circle
        cx={menuActive?"256":"96"}
        cy="256"
        r="32"
        fill="currentColor"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="32"
    />
</svg>
<svg
    class="close"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        fill="currentColor"
        d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
    />
</svg>
</div>

