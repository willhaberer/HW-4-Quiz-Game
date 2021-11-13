//Dependencies:
var qs = document.querySelector("#question");
var timerEl = document.getElementById("timer");
var opt1Btn = document.querySelector("#option1");
var opt2Btn = document.querySelector("#option2");
var opt3Btn = document.querySelector("#option3");
var opt4Btn = document.querySelector("#option4");
var gameUI = document.querySelector(".gameUI");

var startBtn = document.querySelector("#quiz");
var highScoreBtn = document.querySelector("#high-scores");

//Global Vars
var currentScore = 0;
var secondsLeft = 100;
var qIterator = 0;
var scoreboard = {
  Name: [],
  scores: [],
};

//Question Constants
var questionOne = {
  question:
    "How could you select an HTML element  with id='button' using Javascript",
  a1: "document.select('button')",
  a2: "selectButton",
  a3: "document.querySelector('#button')",
  a4: "button.querySelector('#document')",
  correctAnswer: "document.querySelector('#button')",
};

var questionTwo = {
  question:
    "What type of variable is declared by the following code: var shoppingList= []",
  a1: "Array",
  a2: "Integer",
  a3: "Object",
  a4: "shoppingList",
  correctAnswer: "Array",
};

var questionThree = {
  question: "What language could be used to stylize elements on an HTML page",
  a1: "JCSSHTMLJS#",
  a2: "StylizeIt",
  a3: "JSS",
  a4: "CSS",
  correctAnswer: "CSS",
};

var questionFour = {
  question:
    "What type of variable is would best be used to hold a true/false value",
  a1: "ArrayList",
  a2: "Boolean",
  a3: "Binary",
  a4: "Hexadecimal",
  correctAnswer: "Boolean",
};

var quizQuestions = [questionOne, questionTwo, questionThree, questionFour];

//Button to start the quiz
var startBtn = document.querySelector("#quiz");
startBtn.addEventListener("click", function () {
  quizGame();
  startTimer();
});

//main function to run the game
function quizGame() {
  gameUI.setAttribute("style", "visibility:visible");
  setQuestion(qIterator);
  startBtn.disabled = true;
  highScoreBtn.disabled = true;
}

function startTimer() {
  timerEl.setAttribute("style", "background-color: #9370db");
  var timeInterval = setInterval(function () {
    if (secondsLeft > 0) {
      timerEl.textContent = secondsLeft + " seconds left";
      secondsLeft--;
    } else if (secondsLeft === 0 && qIterator < quizQuestions.length) {
      timerEl.textContent = "Time has expired?";
      timerEl.setAttribute("style", "background-color:#301934");
    }
  }, 1000);
}

function setQuestion(iterator) {
  qs.textContent = quizQuestions[iterator].question;
  opt1Btn.textContent = quizQuestions[iterator].a1;
  opt2Btn.textContent = quizQuestions[iterator].a2;
  opt3Btn.textContent = quizQuestions[iterator].a3;
  opt4Btn.textContent = quizQuestions[iterator].a4;
  userAnswerCheck();
}

function userAnswerCheck() {
  gameUI.addEventListener("click", function (event) {
    var userAnswer = event.target;
    console.log(userAnswer.textContent);
    qIterator++;
    console.log(secondsLeft);
    if (qIterator < quizQuestions.length) {
      quizGame();
    } else {
      qs.textContent = "Quiz is Over";
      opt1Btn.setAttribute("style", "visibility:hidden");
      opt2Btn.setAttribute("style", "visibility:hidden");
      opt3Btn.setAttribute("style", "visibility:hidden");
      opt4Btn.setAttribute("style", "visibility:hidden");
      timerEl.setAttribute("style", "visibility:hidden");
      timerEl.setAttribute("style", "background-color:#FFFFFF");
    }
  });
}
