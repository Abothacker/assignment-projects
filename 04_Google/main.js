const body = document.querySelector("body");
const submit = document.querySelector("#search");
const input = document.querySelector('#search [type="text"]');

submit.addEventListener("click", (e) => {
  input.placeholder = "";
});

body.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    if (input.value == "") {
      alert("Search something ");
    } else {
      window.open(`https://www.google.com/search?q=${input.value}`, "_blank");
    }
  }
});

const closeBtns = document.querySelectorAll("#closebtn");

closeBtns.forEach((closebtn) => {
  closebtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closebtn.parentElement.remove();
  });
});
