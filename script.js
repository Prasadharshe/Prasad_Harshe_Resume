// This code selects the hamburger icon and the navigation list,
// and then adds an event listener to the hamburger icon.
// When the icon is clicked, the toggle method is called on
// the classList property of the navigation list, which adds or
// removes the show class.

const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector(".navbar ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("cross");
  navUl.classList.toggle("show");
});

// This code listens for the resize event and removes the show class
// from the ul element when the screen width is above 769px.
window.addEventListener("resize", () => {
  if (window.innerWidth > 769) {
    document.querySelector(".navbar ul").classList.remove("show");
    hamburger.classList.toggle("cross");  
  }
});


