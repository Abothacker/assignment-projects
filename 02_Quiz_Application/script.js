let num = 0;
let scores = 0;

const main = document.querySelector("#main");

let datalist = null;

// setp 1  data get from api
fetch("./set.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    datalist = data;
    callAddto();
  });

// pass one object in addTo()
function callAddto() {
  // if (num <= 5) {
  addTo(datalist[num]);
  // }
}

// add question to display
function addTo(api) {
  if (num <= 9) {
    let qid = num + 1;
    main.innerHTML = `  
       <div class="box">
            <div id="message"></div>

            <h1>Q${qid}. ${api.question} </h1>
            <input type="radio" name="q1" id="a" value="${api.options[0]}">
            <label for="a">A) ${api.options[0]} </label><br>
            
            <input type="radio" name="q1" id="b" value="${api.options[1]}">
            <label for="b">B) ${api.options[1]}</label><br>
            
            <input type="radio" name="q1" id="c" value="${api.options[2]}">
            <label for="c">C) ${api.options[2]}</label><br>
            
            <input type="radio" name="q1" id="d" value="${api.options[3]}">
            <label for="d">D) ${api.options[3]}</label><br>
            
            
            <div id="btns">
            <button id="submit">submit</button>
            <button id="next">Next ></button>
            
            </div>
            </div>`;

    submit(api.answer);
  } else {
    let message = document.querySelector("#message");
    message.innerHTML = ` <h1>Total score : <span>${scores}</span></h1>`;
  }
}

// user submit answer
function submit(jsonAnswer) {
  const submitBtn = document.querySelector("#submit");

  submitBtn.addEventListener("click", () => {
    let input = document.querySelector('input[type="radio"]:checked');

    if (input == null) {
      alert("pls select options A, B, C, D");
    } else {
      check(input.value, jsonAnswer);

      next();
    }
  });
}

// check user anser right or wrong
function check(userAns, realAns) {
  let message = document.querySelector("#message");

  if (userAns === realAns) {
    message.innerHTML = ` <h1>Correct! Well done.</h1>`;
    scores++;
  } else {
    message.innerHTML = ` <h1>Oops! That's not the right answer.</h1>`;
  }
}

// show next question to the user
function next() {
  const nextBtn = document.querySelector("#next");

  nextBtn.addEventListener("click", () => {
    // console.log("next btn clicked");
    num++;
    console.log(num);

    callAddto();
  });
}
