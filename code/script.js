const burger = document.querySelector(".burger");
const sideMenu = document.querySelector(".side-menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    sideMenu.classList.toggle("active");
});

sideMenu.querySelector(".navigation").addEventListener("click", (e) => {
    console.log(e);
    if (e.target.nodeName === "A") {
        burger.classList.remove("active");
        sideMenu.classList.remove("active");
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
        burger.classList.remove("active");
        sideMenu.classList.remove("active");
    }
});

window.addEventListener("scroll", () => {
    const parallaxImage = document.querySelector("#frame > img");
    const scrollPosition = window.scrollY;

    parallaxImage.style.transform =
        "translateY(" + scrollPosition * 0.5 + "px)";
});
