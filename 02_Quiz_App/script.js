const body = document.querySelector("body");

let datalist = null;
let dataObj = 0;
let score = 0;

fetch("./set.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data);
    datalist = data;
    dataset();
  });

function dataset() {
  console.log(datalist[dataObj]);
  displayQuestions(datalist[dataObj]);
}

function displayQuestions(api) {
  qid = dataObj + 1;

  body.innerHTML = `    <div class="box">

            <h1 id="message"></h1>

            <h1>Q${qid}. ${api.question} </h1>
            <input type="radio" name="q1" id="a" value="${api.options[0]}">
            <label for="a">A) ${api.options[0]} </label><br>
            
            <input type="radio" name="q1" id="b" value="${api.options[1]}">
            <label for="b">B) ${api.options[1]}</label><br>
            
            <input type="radio" name="q1" id="c" value="${api.options[2]}">
            <label for="c">C) ${api.options[2]}</label><br>
            
            <input type="radio" name="q1" id="d" value="${api.options[3]}">
            <label for="d">D) ${api.options[3]}</label><br>
            </div>
            
          
            
            <button id="submit">submit ></button>
        
            <button id="next">Next ></button>
        `;

  submitfun(api.answer);
}
// message.innerText = "hell";

function submitfun(realAnswer) {
  let message = document.querySelector("#message");
  let submit = document.querySelector("#submit");

  submit.addEventListener("click", () => {
    let input = document.querySelector('input[name="q1"]:checked');

    if (input == null) {
      message.innerHTML = "Select options";

      console.log("if value: ", input.value);
      submit.disabled = true;
    } else {
      checkWin(input.value, realAnswer);
      submit.disabled = true;
      nextBtnFun();
      console.log("else value: ", input.value);
    }
  });
}

function checkWin(userAns, realAns) {
  if (userAns == realAns) {
    score++;
    console.log("you a option is right");
    console.log("Score is: ", score);
  } else {
    console.log("you a option is  Not right");
    console.log("Score is: ", score);
  }
}

function nextBtnFun() {
  let nextbtn = document.querySelector("#next");

  nextbtn.addEventListener("click", () => {
    // console.log("next btn clicked");
    console.log(dataObj);
    dataObj++;
    console.log(dataObj);
    dataset();
  });
}
