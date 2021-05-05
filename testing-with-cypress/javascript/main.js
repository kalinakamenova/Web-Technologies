navbar = document.getElementById("navigation-bar");
sticky = navbar.offsetTop;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}