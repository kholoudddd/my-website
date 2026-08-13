// Select the parts of the page we want to make interactive.
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".nav-links");
const themeButton = document.querySelector(".theme-button");
const navLinks = document.querySelectorAll(".nav-links a");

// Open and close the navigation on small screens.
menuButton.addEventListener("click", () => {
  const menuIsOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", menuIsOpen);
  menuButton.setAttribute("aria-label", menuIsOpen ? "Close menu" : "Open menu");
});

// Close the mobile menu after a visitor chooses a link.
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Switch between light mode and dark mode.
themeButton.addEventListener("click", () => {
  const darkModeIsOn = document.body.classList.toggle("dark-mode");
  themeButton.textContent = darkModeIsOn ? "☀" : "☾";
  themeButton.setAttribute(
    "aria-label",
    darkModeIsOn ? "Switch to light mode" : "Switch to dark mode"
  );
});

// Automatically show the current year in the footer.
document.querySelector("#year").textContent = new Date().getFullYear();

// Reveal page sections as they enter the screen.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});
