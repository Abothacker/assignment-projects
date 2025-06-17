// menu
let menuBtn = document.querySelector("#menu-btn");
let menu = document.querySelector("#menu");

menuBtn.addEventListener("click", function () {
  // menu.style.display = "flex"

  menu.classList.toggle("show");
  console.log("menu btn clicked");
});

const output = document.querySelector("#info h4");
let indexNum = 0;

function getText(name) {
  let myset;

  if (indexNum < name.length) {
    myset = setTimeout(() => {
      output.innerHTML += name.charAt(indexNum);
      indexNum++;
      getText(name);
    }, 200);
  } else {
    clearTimeout(myset);
    console.log("Printing stoped");
  }
}
getText("web development");
