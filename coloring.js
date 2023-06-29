function boxCreate() {
  let str = "";
  for (let i = 0; i < 6; i++) {
    str += `<div class="colorBox"></div>`;
  }
  return (document.querySelector(".container").innerHTML = str);
}

let arr = [];
function boxColoring() {
  let boxes = document.querySelectorAll(".colorBox");
  for (let box of boxes) {
    let color = rgbColGen();
    box.style.backgroundColor = color;
    arr.push(color);
  }
}

function rgbColGen() {
  let num1 = Math.floor(Math.random() * 256);
  let num2 = Math.floor(Math.random() * 256);
  let num3 = Math.floor(Math.random() * 256);
  return `rgb(${num1}, ${num2}, ${num3})`;
}

let indexNum = 0;
function colorGuess() {
  let randIndex = Math.floor(Math.random() * 6);
  document.getElementById("colorCode").innerHTML = arr[randIndex];
  indexNum = randIndex;
}

function inspect(event) {
  let clickedColor = event.target.style.backgroundColor;
  if (clickedColor == arr[indexNum]) {
    document.getElementById("colorResult").innerHTML = "😁";
  } else {
    document.getElementById("colorResult").innerHTML = "😒";
  }
}

function init() {
  document.querySelector('button').style.backgroundColor = arr[indexNum];
  arr = [];
  boxCreate();
  boxColoring();
  colorGuess();
  document.getElementById("colorResult").innerHTML = "";
}

init();