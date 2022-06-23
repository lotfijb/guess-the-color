//Starting the game
document.getElementById("startbutton").onclick = function () {
  //Changing "play button " to "play again button"
  document.getElementById("startbutton").innerHTML = "Play Again";
  // Generating a random color
  function randomC() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }
  for (var i = 1; i < 6; i++) {
    circle = document.getElementById("c" + i);
    circle.style.backgroundColor = "#" + randomC();
  }
  //picking random circle
  let randomCircleIndex = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  let randomCircle = document.getElementById("c" + randomCircleIndex);

  //picking random circle background
  let bg = randomCircle.style.backgroundColor;

  // assigning a random color hex number that the player will guess
  let hex = document.getElementById("hexcode");
  hex.innerHTML = bg;
  //Alerting whether the guess is correct or not
  function checkGuess(i) {
    document.getElementById("c" + i).onclick = function () {
      if (
        document.getElementById("c" + i).style.backgroundColor ==
        document.getElementById("hexcode").innerHTML
      ) {
        document.getElementById("guess").innerHTML = "You guessed it right !";
      } else {
        document.getElementById("guess").innerHTML =
          "Try again ! Wrong answer !";
      }
    };
    document.getElementById("guess").innerHTML = "";
  }
  for (let j = 1; j < 6; j++) {
    checkGuess(j);
  }
};
