const box = document.querySelector("#box");

function main() {
  const API = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  let params = new URLSearchParams(document.location.search);
  let id = params.get("id");

  if (id == null || id == "") {
    meassage("Invalid ID");
  } else {
    let apiID = API + id;

    getData(apiID);
  }
}

main();

function getData(apiLink) {
  console.log(apiLink);

  fetch(apiLink)
    .then((res) => res.json())
    .then((data) => {
      if (data["meals"] == null || data["meals"] == "Invalid ID") {
        meassage("Not Found");
      } else {
        const meal = data["meals"][0];

        addbox(meal);
      }
    });
}

function addbox(x) {
  let info = document.createElement("div");

  info.innerHTML = `<img src="${x.strMealThumb}" alt="Thumb">
  <h1>${x.strMeal}</h1>`;

  box.append(info);

  let tableDiv = document.createElement("table");
  tableDiv.id = "mytab";
  tableDiv.innerHTML = `<h1>Ingredient</h1>`;
  box.append(tableDiv);
  ingredientFun(x);

  let stepsDiv = document.createElement("div");
  stepsDiv.id = "steps";

  stepsDiv.innerHTML = `<h1>Instructions</h1>
  <ol></ol>`;
  box.append(stepsDiv);
  stepsFun(x.strInstructions);
}

function ingredientFun(data) {
  const mytab = document.querySelector("#mytab");

  Object.keys(data).forEach((i) => {
    const index = i.replace("strIngredient", "");
    const ingredient = data[`strIngredient${index}`];
    const measure = data[`strMeasure${index}`];

    if (ingredient == undefined || ingredient == "") {
    } else {
      let row = document.createElement("tr");
      row.innerHTML = ` <tr>
        <td>${index}</td>
        <td>${ingredient}</td>
        <td>${measure}</td>
      </tr>`;
      mytab.append(row);
    }
  });
}

function stepsFun(data) {
  const stepsDiv = document.querySelector("#steps ol");

  let steps = data.split("\r\n");

  steps.forEach((step) => {
    if (step == "") {
      console.log(step);
    } else {
      let li = document.createElement("li");
      li.innerHTML = `${step}`;
      stepsDiv.append(li);
    }
  });
}

function meassage(txt) {
  box.innerHTML = `<h1>${txt}</h1>`;
}
