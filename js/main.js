const barIcon = document.querySelector("#bar-icon");
const navBar = document.querySelector("nav");
const xIcon = document.querySelector("#x-icon");
// const portfolioImg = document.querySelector(".portfolio-img");
// const card = document.querySelector(".card")

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
