// Your code goes here


// - 1. Increase logo font size on hover 

const logo = document.querySelector(".logo-heading");

logo.addEventListener("mouseenter", () => {
    logo.style.transform = "scale(1.4)";
    logo.style.transition = "transform 0.4s";
})

logo.addEventListener("mouseleave", () => {
    logo.style.transform = "scale(1)";
    logo.style.transition = "transform 0.5s";
})

//