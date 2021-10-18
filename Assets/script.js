//Button to start the quiz
var gameBtn = document.querySelector("#quiz");
gameBtn.addEventListener("click", quizGame);

//main function to run the game
var qs = document.querySelector("#question");
qs.textContent = "Question text here";
console.log(qs);
function quizGame() {
  countdown();
}
//Timer Functionality
var timerEl = document.getElementById("timer");

function countdown() {
  var openingSeconds = 10;

  var timeInterval = setInterval(function () {
    if (openingSeconds > 0) {
      timerEl.textContent = openingSeconds + " left on test timer";
      openingSeconds--;
    } else {
      timerEl.textContent = "Time has expired?";
    }
  }, 1000);
}
