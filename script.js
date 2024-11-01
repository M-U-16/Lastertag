const text = document.querySelector(".text")
const observerTarget = document.querySelector("#element")
const observer = new IntersectionObserver(observerCallback,
    {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
    }
)
 
observer.observe(observerTarget)
function observerCallback(entries, observer) {
    entries.forEach(element => {
        if (element.isIntersecting) {
            text.classList.add("active")
        }
    });
}