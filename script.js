"use strict";

const text = document.querySelector(".text");
const speedEL = document.getElementById("speed");

let speed = 300 / speedEL.value;

const displayText = "I Love Manchester United".split('');


let letter = 0;

function printText() {

  if (letter < displayText.length) {
    text.textContent += displayText[letter++];
  }
  else {
    text.textContent = "";
    letter = 0;
  }

  setTimeout(() => {
    printText();
  }, speed);
}

printText();

speedEL.addEventListener("input", () => {

  let min = +(speedEL.min);
  let max = +(speedEL.max);
  let value = +(speedEL.value);

  if (value < min) {
    value = min;
  }
  else if (value > max) {
    value = max;
  }
  speed = 300 / value;
})