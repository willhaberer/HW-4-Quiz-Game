//Button to start the quiz
var gameBtn = document.querySelector("#quiz");
gameBtn.addEventListener("click", InsertFunctionNameHere);

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

countdown();
