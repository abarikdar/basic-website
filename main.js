// Get a reference to the button using its ID
var myButton = document.getElementById("myButton");

// Add a click event listener to the button

// myButton.addEventListener("click", function() {
//     // Code to be executed when the button is clicked
//     alert("Button clicked!");
// });

function random(number) {
    return Math.floor(Math.random() * (number*1));
  }
  myButton.addEventListener("click", () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)} )`;
    document.body.style.backgroundColor = rndCol;
  });