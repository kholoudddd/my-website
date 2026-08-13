/* ================================================================
   MOBILE NAVIGATION
   This opens and closes the menu on smaller screens.
   ================================================================ */
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".nav-links");
const navigationLinks = document.querySelectorAll(".nav-links a");

menuButton.addEventListener("click", () => {
  const menuIsOpen = navigation.classList.toggle("open");

  // Updating aria-expanded helps screen-reader users understand the menu.
  menuButton.setAttribute("aria-expanded", menuIsOpen);
  menuButton.setAttribute(
    "aria-label",
    menuIsOpen ? "Close navigation" : "Open navigation"
  );
});

// Close the mobile menu after a visitor selects a section.
navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  });
});

/* ================================================================
   SCROLL REVEAL ANIMATION
   IntersectionObserver tells us when an element enters the screen.
   ================================================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

/* Keep the copyright year current automatically. */
document.querySelector("#year").textContent = new Date().getFullYear();
