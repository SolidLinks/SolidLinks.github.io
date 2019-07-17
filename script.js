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


document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages = document.querySelectorAll(".lazy");
  var lazyloadThrottleTimeout;

  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function () {
      var scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function (img) {
        if (img.offsetTop < (window.innerHeight + scrollTop)) {
          img.src = img.dataset.src;
          // img.classList.remove('lazy');
          img.classList.add('fadeIn');
        }
      });
      if (lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }

  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});