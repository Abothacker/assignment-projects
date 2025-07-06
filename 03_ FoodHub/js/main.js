const cards = document.querySelector("#cards");

const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";

const countryName = "Indian";

let full_api = `${API_URL}${countryName}`;

console.log(full_api);

fetch(full_api)
  .then((res) => {
    return res.json();
  })
  .then((d) => {
    let meals = d["meals"];
    getdata(meals);
  });

function getdata(data) {
  data.forEach((meal) => {
    let div = document.createElement("div");
    div.id = "card";

    div.innerHTML = `<a href="./details.html?id=${meal.idMeal}" rel="noopener noreferrer">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h1>${meal.strMeal}</h1>

        </a>`;
    cards.append(div);
  });
}
