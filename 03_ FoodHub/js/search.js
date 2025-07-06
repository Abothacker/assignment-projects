const box = document.querySelector("#cards");

const userIn = document.querySelector("#myinput");
const submitBtn = document.querySelector("#submit");
// const output = document.querySelector("#output")

userIn.value = "biryani";
submitBtn.addEventListener("click", (e) => {
  let val = userIn.value;
  if (val == "") {
    alert("Enter food name..");
  } else {
    searchfun(val);
  }
});

function searchfun(food) {
  const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;

  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.meals == null) {
        alert("Somethings.. ");
      } else {
        let meals = data["meals"][0];
        // console.log(meals);
        getdata(meals);
      }
    });
}

function getdata(meal) {
  let div = document.createElement("div");
  div.id = "card";

  div.innerHTML = `<a href="./details.html?id=${meal.idMeal}" rel="noopener noreferrer">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h1>${meal.strMeal}</h1>

        </a>`;
  cards.append(div);
}
