const navbar = document.getElementById("navbar");
const navbarHeight = navbar.offsetHeight;
const logo = document.querySelector('.navbar-logo')


window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition >= navbarHeight ) {
    logo.classList.remove('navbar-logo-big')
  } else {
    logo.classList.add('navbar-logo-big')
  }
});
