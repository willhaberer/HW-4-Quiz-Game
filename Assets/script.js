//Dependencies:
var qs = document.querySelector("#question");
var timerEl = document.getElementById("timer");

const qanda = {
  questions: [
    "What is 1+2",
    "What is 10-3",
    "Who was the first king of the Hoysala Empire",
  ],
  //   correctAnswers: ["3", "7", "Nripa Kama II"],
  q1Answers: ["3", "12", "5", "6"],
  q2Answers: ["7", "13", "103", "6"],
  q3Answers: ["Nripa Kama II", "Narasimha III", "Ereyanga", "Nripa Kama I"],
};

//Button to start the quiz
var startBtn = document.querySelector("#quiz");
startBtn.addEventListener("click", quizGame);

//main function to run the game
function quizGame() {
  //Timer Functionality
  var openingSeconds = 100;
  timerEl.setAttribute("style", "background-color: #9370db");
  var timeInterval = setInterval(function () {
    if (openingSeconds > 0) {
      timerEl.textContent = openingSeconds + " left on test timer";
      openingSeconds--;
    } else {
      timerEl.textContent = "Time has expired?";
      timerEl.setAttribute("style", "background-color:#301934");
    }
  }, 1000);
}
