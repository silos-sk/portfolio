import { getApi, renderPortfolio } from "./utilities.js";

// Observer for animations
export const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

// Toggle mobile menu
const barIcon = document.querySelector("#bar-icon");
const navBar = document.querySelector("nav");
const xIcon = document.querySelector("#x-icon");

barIcon.addEventListener("click", () => {
  barIcon.classList.add("hide");
  navBar.classList.add("active");
  xIcon.classList.remove("hide");
});

xIcon.addEventListener("click", () => {
  xIcon.classList.add("hide");
  barIcon.classList.remove("hide");
  navBar.classList.remove("active");
});

// Add the observer to the hero-text for fade-in from top
const heroText = document.querySelector(".hero-text");
observer.observe(heroText);

// Animate portfolio section
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));

// Fetch portfolio data and render
getApi("./js/portfolio.json", "portfolio", renderPortfolio);
