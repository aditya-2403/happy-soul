// hide the preloader once the page has loaded
window.addEventListener("load", function() {
    // use GSAP to fade out the preloader
    gsap.to(".preloader", {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 1,
      onComplete: function() {
        // remove the preloader from the DOM once it's hidden
        document.querySelector(".preloader").remove();
      }
    });
  });
  