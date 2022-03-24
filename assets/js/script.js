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
var timeCounter;
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
    },
]
