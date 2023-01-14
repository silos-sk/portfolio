import { getApi, renderPortfolio } from "./utilities.js";

const barIcon = document.querySelector("#bar-icon");
const navBar = document.querySelector("nav");
const xIcon = document.querySelector("#x-icon");

barIcon.addEventListener("click", () => {
  barIcon.classList.add("hide");
  navBar.classList.add("active");
  xIcon.classList.remove("hide");
});

xIcon.addEventListener("click", ()=>{
    xIcon.classList.add("hide");
    barIcon.classList.remove("hide")
    navBar.classList.remove("active");
});

getApi("./js/portfolio.json", "portfolio", renderPortfolio);
renderPortfolio(portfolio, main);

