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

// 2. Increase text size and add underline when nav items are clicked

const navItems = document.querySelectorAll("nav a");

navItems.forEach(el => {
    el.addEventListener("click", () => {
        el.style.transform = "scale(1.2)";
        el.style.transition = "transform 0.4s";
        el.style.borderBottom = "1px solid black";
    })
  })

  navItems.forEach(el => {
    el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
        el.style.transition = "transform 0.4s";
        el.style.borderBottom = "";
    })
  })

  // 3. double click event on bus image

  const busImage = document.querySelector("header img");
  
  busImage.addEventListener("dblclick", () => {
      busImage.style.transform = "rotate(360deg)";
      busImage.style.transition = "transform 1s";
  })

  // 4. change color of headers on scroll

  const h2 = document.querySelectorAll("h2");
  
  h2.forEach(el => {
      window.addEventListener("scroll", () => {
        el.style.color = "goldenrod";
      })
  })

  // 5. 


  


