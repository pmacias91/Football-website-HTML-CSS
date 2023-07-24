// Caching DOM elements
const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
const showDrop1Checkbox = document.getElementById("showDrop1");
const showDrop2Checkbox = document.getElementById("showDrop2");

// Initializing a variable to keep track of navbar visibility state
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

// Function to reset the checkboxes in the drop menu
const resetDropMenuCheckboxes = () => {
  showDrop1Checkbox.checked = false;
  showDrop2Checkbox.checked = false;
};

// Function to toggle the visibility of the navbar and drop menu
const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;// Toggling the navbar visibility state
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded); // Updating the "aria-expanded" attribute of the navbar toggle button
  resetDropMenuCheckboxes();// Resetting the checkboxes in the drop menu
  document.body.classList.toggle("no-scroll", isNavbarExpanded);// Toggling the "no-scroll" class on the body element to prevent scrolling when the navbar is open
};

// Function to update the navbar visibility based on window width
const updateNavbarVisibility = () => {
  const windowWidth = window.innerWidth;

  // If the window width is 996 pixels or more, hide the mobile menu
  if (windowWidth >= 996) {
    isNavbarExpanded = false;
    resetDropMenuCheckboxes();// Resetting the checkboxes in the drop menu
    navbarToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");// Removing the "no-scroll" class from the body element
  }
};

// Adding a resize event listener to update the navbar visibility when the window is resized
window.addEventListener("resize", updateNavbarVisibility);

// Adding a click event listener to the navbar toggle button to toggle the navbar visibility
navbarToggle.addEventListener("click", toggleNavbarVisibility);

// Adding a click event listener to the navbar links container to prevent toggling when clicking on the links
navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());

// Adding a click event listener to the navbar menu to toggle the navbar visibility
navbarMenu.addEventListener("click", toggleNavbarVisibility);

//function that triggers the drop-down on the dropmenu mobile
function toggleCheckbox(checkboxId) {
  const checkbox = document.getElementById(checkboxId);
  checkbox.checked = !checkbox.checked;
}