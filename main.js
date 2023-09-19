
var myButton = document.getElementById("myButton");

function random(number) {
    return Math.floor(Math.random() * (number*1));
  }
  myButton.addEventListener("click", () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)} )`;
    document.body.style.backgroundColor = rndCol;
  });