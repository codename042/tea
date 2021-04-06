const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

function navSlide() {
    //Toggle Nav
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.05}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
}
navSlide()

//Products Movement

const container = document.querySelectorAll(".container");
//Moving Animation Event
container.forEach(el => {
    //Animating Items
    const card = el.querySelector(".card");
    const title = el.querySelector(".info .title");
    const product = el.querySelector(".product img");

    el.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 100;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    });
    //Animate In
    el.addEventListener("mouseenter", (e) => {
        el.style.transition = "none";
        //popout
        title.style.transform = "translateZ(50px)";
        // button.style.transform = "translateZ(50px)";
        product.style.transform = "translateZ(50px) rotate(5deg)";

    });
    //Animate Out
    el.addEventListener("mouseleave", (e) => {
        //popback
        title.style.transform = "none";
        product.style.transform = "none";

        el.style.transform = `rotateY(0deg) rotateX(0deg)`;
        el.style.transition = "all 0.9s ease";


    })

});

//Nav Color
const changingNav = document.querySelector("nav");
const sectionOne = document.querySelector("#heart-disease");
const sectionOnePosition = sectionOne.getBoundingClientRect().top;
const sectionTwo = document.querySelector("#hydratation");
const sectionTwoPosition = sectionTwo.getBoundingClientRect().top;
const sectionThree = document.querySelector("#slimming");
const sectionThreePosition = sectionThree.getBoundingClientRect().top;
window.onscroll = function() {
    let top = window.scrollY;
    console.log(top)
    if (top >= sectionOnePosition) {
        changingNav.classList.add("nav-section1");
        changingNav.classList.remove("nav-section2")

    }
    if (top >= sectionTwoPosition) {
        changingNav.classList.remove("nav-section1")
        changingNav.classList.add("nav-section2")
    }
    if (top >= sectionThreePosition) {
        changingNav.classList.add("nav-section1");
        changingNav.classList.remove("nav-section2")
    }
}