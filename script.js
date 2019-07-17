//Hamburger menu

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
  });
}

function winSize() {
  console.log(`
Inner Width: ${this.innerWidth}
Inner Height: ${this.innerHeight}
Outer Width: ${this.outerWidth}
Outer Height: ${this.outerHeight}
`);
}

winSize();

navSlide();