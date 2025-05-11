import { observer } from "./main.js"; // ✅ Import observer

export async function getApi(url, data, render) {
  await fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .then(function (jsonObject) {
      data = jsonObject[data];
      data.forEach(render);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function renderPortfolio(data) {
  const main = document.querySelector("section.portfolio");

  const projCard = document.createElement("div");
  projCard.classList.add("card", "animate-on-scroll"); // ✅ Apply animation class

  projCard.innerHTML = `
    <a href=${data.websiteUrl} target="_blank">
      <picture>
        <source media="(min-width: 400px)" srcset=${data.imgUrl_sm} />
        <source media="(min-width: 1200px)" srcset=${data.imgUrl_lg} />
        <img class="portfolio-img" src=${data.imgUrl_sm} alt="${data.imgAlt}" />
      </picture>
    </a>
    <h2>${data.title}</h2>
    <a href=${data.websiteUrl} target="_blank">Website</a> | 
    <a href=${data.gitHubUrl} target="_blank">Github</a>
    <ul>
      <li><span class="p-heading">Tech Stack Used:</span><br>${data.techStack}</li>
      <li><span class="p-heading">Summary:</span><br>${data.summary}</li>
    </ul>  
  `;

  main.appendChild(projCard);

  // ✅ Animate each card
  observer.observe(projCard);
}
