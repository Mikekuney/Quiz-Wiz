// targeting html elements
var guideline = document.querySelector(".guideline")
var countdown = document.querySelector(".countdown")
var secondsLeft = document.querySelector(".seconds-left")
var startButton = document.querySelector(".start-btn")
var questionsText = document.querySelector(".questions-text")
var buttonsList = document.querySelector(".btns")
var highScoresList = document.querySelector(".highscores")


// global variables
var timer;
var timeDown;
var timeCount;
var newQuestion;
var ulListEl;
var listItemEl;
var yourScore;
var initialsForm;
var initialsText;
var initialsSubmit;
var submitButton;
var newScores;
var highScores;
var loadScores;
var newHighScores;
var buttonArray;
var correctButton;
var incorrectButton;
var buttonOne;
var buttonTwo;
var buttonThree;
var buttonFour;

// Questions array
var questions = [
    {
        question: "Which comparison operator describes equal value and type?",
        answer: ["a===b", "a=b", "a==b", "a=>b"],
        correctAnswer: 0,
        questionNum: 0
    },
    {
        question: "Which is not an operator?",
        answer: ["+", "/", "()", "="],
        correctAnswer: 2,
        questionNum: 1
    },
    {
        question: "What does a boolean evaluate?",
        answer: ["True or False", "True not False", "True and False", "!True or !False"],
        correctAnswer: 0,
        questionNum: 2
    },
    {
        question: "Which function will randomize a whole Number?",
        answer: ["Math.random(Math.floor())", "Math.floor(Math.random))", "Math.random()", "math.Floor(math.Random())"],
        correctAnswer: 1,
        questionNum: 3
    },
    {
        question: "Which is used to contain an array?",
        answer: ["()", "<>", "[]", "{}"],
        correctAnswer: 2,
        questionNum: 4
    }
];

// start game 

startButton.addEventListener("click", startGame);

function startGame() {
    guideline.style.display = "none";
    secondsLeft.style.display = "block";
    startButton.style.display = "block";
    questionsText.style.display = "block";
    listItemEl.style.display = "block";
    listItemEl.style.backgroundColor = "transparent";
    newQuestion = 0;
    timer = 30;
    timeCount = setInterval(timeDown, 1000);

    questionFunction();
};

// count down 
function timeDown() {
    timer;
    if(timer > 0) {
        timer--;
    }
    else {
        clearInterval(timeCount);
        return endGame();
    }
    clock.innerHTML = timer;
};

// create elements

function createItem(element, className) {
    var newEl = document.createElement(element);
    newEl.setAttribute("class", className);
    return newEl;
};

// creating El list

ulListEl = createItem("ul", "ulListElName")
ulListEl.style.display = "none";
listItemEl = createItem("li", "listItemElName");
listItemEl.style.listStyle = "none";

// buttons list

buttonOne = createItem("button", "answerButton");
buttonTwo = createItem("button", "answerButton");
buttonThree = createItem("button", "answerButton");
buttonFour = createItem("button", "answerButton");
var playAgain = createItem("h3", "playAgainText");
playAgain.innerHTML = "Play Again?";

// append child list

buttonsList.appendChild(ulListEl);
ulListEl.appendChild(listItemEl);
listItemEl.appendChild(buttonOne);
listItemEl.appendChild(buttonTwo);
listItemEl.appendChild(buttonThree);
listItemEl.appendChild(buttonFour);

ulListEl.appendChild(playAgain);

// question function
function questionFunction() {
    startButton.style.display = "none";
    playAgain.style.display = "none";
    var theQuestion = questions[newQuestion];
    questionsText.innerHTML = theQuestion.question;
    answers();
};

//answer function
function answers() {
    ulListEl.style.display = "block";
    var buttonAnswer = questions[newQuestion].answers;
    buttonOne.innerHTML = buttonAnswer[0];
    buttonTwo.innerHTML = buttonAnswer[1];
    buttonThree.innerHTML = buttonAnswer[2];
    buttonFour.innerHTML = buttonAnswer[3];
};

var checkAnswers;
var buttonClick = document.querySelectorAll(".answerButton").forEach(element => {
    element.addEventListener("click", event => {
        checkAnswer = element.innerHTML;
        rightOrWrong();
    })
});

// if else for correct/incorrect answers
function rightOrWrong()

// timer interval clear and shows user score
function endGame()