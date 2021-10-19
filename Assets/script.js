//Dependencies:
var qs = document.querySelector("#question");
var timerEl = document.getElementById("timer");
var opt1 = document.querySelector("#option1");
var opt2 = document.querySelector("#option2");
var opt3 = document.querySelector("#option3");
var opt4 = document.querySelector("#option4");
var currentScore = 0;

const qanda = {
  questions: [
    "What is 1+2",
    "What is 10-3",
    "Who was the first king of the Hoysala Empire",
  ],

  q1Answers: ["3", "12", "5", "6"],
  q2Answers: ["7", "13", "103", "6"],
  q3Answers: ["Nripa Kama II", "Narasimha III", "Ereyanga", "Nripa Kama I"],
  correctAnswers: ["3", "7", "Nripa Kama II"],
};

var scoreboard = {
  Name: [],
  scores: [],
};

//Button to start the quiz
var startBtn = document.querySelector("#quiz");
startBtn.addEventListener("click", quizGame);

//main function to run the game
function quizGame() {
  i = 0;
  qs.textContent = qanda.questions[i];
  opt1.textContent = qanda.q1Answers[i];
  opt2.textContent = qanda.q1Answers[i + 1];
  opt3.textContent = qanda.q1Answers[i + 2];
  opt4.textContent = qanda.q1Answers[i + 3];
  startTimer();
}

//Timer Functionality
function startTimer() {
  var secondsLeft = 100;
  timerEl.setAttribute("style", "background-color: #9370db");
  var timeInterval = setInterval(function () {
    if (secondsLeft > 0) {
      timerEl.textContent = secondsLeft + " left in the quiz";
      secondsLeft--;
    } else {
      timerEl.textContent = "Time has expired?";
      timerEl.setAttribute("style", "background-color:#301934");
    }
  }, 1000);
}
