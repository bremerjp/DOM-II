// Your code goes here


// - 1. mouseenter

const logo = document.querySelector(".logo-heading");

logo.addEventListener("mouseenter", () => {
    gsap.to(logo, {
        duration: 2,
        rotation: 360,
        ease: "elastic(1, 0.75)"
    })

    // logo.style.transform = "scale(1.4)";
    // logo.style.transition = "transform 0.4s";
})

logo.addEventListener("mouseleave", () => {

    gsap.to(logo, {
        duration: 1,
        ease: "elastic(1, 0.75)"
    })

    // logo.style.transform = "scale(1)";
    // logo.style.transition = "transform 0.5s";
})

// 2. mousemove

const navItems = document.querySelectorAll("nav a");

navItems.forEach(el => {

    el.addEventListener("mousemove", () => {
        gsap.to(el, {
            duration: 2,
            rotation: 360,
            ease: "elastic(1, 0.75)"
        })
        el.style.borderBottom = "1px solid black";
    })
})

navItems.forEach(el => {
    el.addEventListener("mouseleave", () => {

        el.style.borderBottom = "";
    })
})

// 3. dblclick

const busImage = document.querySelector("header img");

busImage.addEventListener("dblclick", () => {
    gsap.to(busImage, {
        duration: 2,
        rotation: 360,
        ease: "elastic(1, 1)"
    })
    // busImage.style.transform = "rotate(360deg)";
    // busImage.style.transition = "transform 1s";

})

// 4. scroll

const h2 = document.querySelectorAll("h2");

h2.forEach(el => {
    window.addEventListener("scroll", () => {
        el.style.color = "goldenrod";
    })
})

// 5. keypress

const mainImages = document.querySelectorAll(".img-content");

mainImages.forEach(el => {
    window.addEventListener("keypress", () => {
        el.style.transform = "scale(1.2)";
        el.style.transition = "transform 1s";
    })
    window.addEventListener("keyup", () => {
        el.style.transform = "scale(1.0)";
        el.style.transition = "transform 0.4s";

    })
})

// 6. resize

const all = document.querySelector("*");

window.addEventListener("resize", () => {
    all.style.color = "gray";
})

// 7, 8. copy/paste

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(el => {
    el.addEventListener("copy", () => {
        el.style.fontSize = "2rem";
    })
    el.addEventListener("paste", () => {
        el.style.fontSize = "";
    })
})

// 9. click

const body = document.querySelector('body');

body.addEventListener("click", () => {
    body.style.backgroundColor = "lightyellow";
})

// 10. click, stop propagation

const nav = document.querySelector(".main-navigation");

nav.addEventListener("click", () => {
    nav.style.backgroundColor = "orange";
    event.stopPropagation();
})



// Stop the navigation items from refreshing the page by using preventDefault()

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(el => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
    })
})









