const API = "https://www.themealdb.com/api/json/v1/1/filter.php?a=indian";

const cards = document.querySelector("#cards");

fetch(API)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    add(data["meals"]);
  });

function add(api) {
  api.forEach((item) => {
    cardDiv(item);
  });
}

function cardDiv(x) {
  let div = document.createElement("div");
  div.id = "card";

  div.innerHTML = `
                <img src="${x.strMealThumb}" alt="">
                <h1>NAME: <span>${x.strMeal}</span> </h1>
                <h1>ID: <span>${x.idMeal}</span> </h1>
           `;

  cards.appendChild(div);
}
