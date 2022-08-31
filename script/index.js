let input = document.getElementById("inputDisplay");
let answer = document.getElementById("answerDisplay");
let buttons = document.querySelectorAll("button");
let erasebtn = document.getElementById("delete");
let clearbtn = document.getElementById("clear");
let evaluate = document.getElementById("enter");
let squareRoot = document.getElementById("squareroot");
let exponent = document.getElementById("exponent");

// DISPLAY
let display = [];

// CLEAR DISPLAY
clearbtn.addEventListener("click", () => {
  display = [""];
  answer.innerHTML = 0;
  input.className = "inputDisplay";
  answer.className = "answerDisplay";
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // DELETE
    if (!btn.id.match("delete")) {
      // INPUTS
      display.push(btn.value);
      input.innerHTML = display.join("");

      // OUTPUT
      if (btn.classList.contains("numeric-btn")) {
        answer.innerHTML = eval(display.join(""));
      }
    }

    // ERASE BUTTON
    if (btn.id.match("delete")) {
      display.pop();
      input.innerHTML = display.join("");
      answer.innerHTML = eval(display.join(""));
    }

    // ENTER BUTTON
    if (btn.id.match("enter")) {
      input.className = "answerDisplay";
      answer.className = "inputDisplay";
    }

    // REMOVE UNDEFINED
    if (typeof eval(display.join("")) == "undefined") {
      answer.innerHTML = 0;
    }
  });
});
