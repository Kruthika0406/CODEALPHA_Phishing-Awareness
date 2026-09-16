/* =====================================
   PHISHING AWARENESS TRAINING
   JAVASCRIPT
===================================== */


/* =====================================
   PHISHING EMAIL WARNING
===================================== */

function showWarning() {

    const warning = document.getElementById("warningMessage");

    warning.style.display = "block";

}


/* =====================================
   QUIZ QUESTIONS
===================================== */

const questions = [

    {
        question:
            "Which of the following is a common warning sign of a phishing email?",

        answers: [
            "An unexpected urgent request for information",
            "A message you were expecting",
            "A known contact sending normal information",
            "A newsletter you subscribed to"
        ],

        correct: 0
    },


    {
        question:
            "What should you do if an unexpected message asks you to log in?",

        answers: [
            "Click the link immediately",
            "Forward it to everyone",
            "Open the official website independently",
            "Reply with your password"
        ],

        correct: 2
    },


    {
        question:
            "What is social engineering?",

        answers: [
            "A type of computer hardware",
            "Manipulating people into taking unsafe actions",
            "A programming language",
            "A network cable"
        ],

        correct: 1
    },


    {
        question:
            "Which practice can improve account security?",

        answers: [
            "Using the same password everywhere",
            "Sharing passwords with friends",
            "Disabling security updates",
            "Using multi-factor authentication"
        ],

        correct: 3
    },


    {
        question:
            "What should you do with a suspicious phishing message?",

        answers: [
            "Report it through the appropriate channel",
            "Click all links to investigate",
            "Send your credentials",
            "Ignore every security warning"
        ],

        correct: 0
    }

];


/* =====================================
   QUIZ VARIABLES
===================================== */

let currentQuestion = 0;

let score = 0;

let answered = false;


/* =====================================
   LOAD QUIZ
===================================== */

function loadQuestion() {

    const questionElement =
        document.getElementById("question");

    const answersElement =
        document.getElementById("answers");

    const nextButton =
        document.getElementById("nextButton");

    const questionNumber =
        document.getElementById("questionNumber");

    const totalQuestions =
        document.getElementById("totalQuestions");

    const progress =
        document.getElementById("progress");


    /* Reset */

    answered = false;

    nextButton.disabled = true;

    answersElement.innerHTML = "";


    /* Current question */

    const current = questions[currentQuestion];


    questionElement.textContent =
        current.question;


    questionNumber.textContent =
        currentQuestion + 1;


    totalQuestions.textContent =
        questions.length;


    /* Progress */

    const progressPercentage =
        ((currentQuestion) / questions.length) * 100;

    progress.style.width =
        progressPercentage + "%";


    /* Create answers */

    current.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.classList.add("answer");

        button.textContent = answer;

        button.onclick = function () {

            selectAnswer(index, button);

        };

        answersElement.appendChild(button);

    });

}


/* =====================================
   SELECT ANSWER
===================================== */

function selectAnswer(selectedIndex, selectedButton) {

    if (answered) {
        return;
    }

    answered = true;


    const current =
        questions[currentQuestion];


    const answerButtons =
        document.querySelectorAll(".answer");


    /* Check answer */

    if (selectedIndex === current.correct) {

        selectedButton.classList.add("correct");

        score++;

    } else {

        selectedButton.classList.add("incorrect");

        answerButtons[current.correct]
            .classList.add("correct");

    }


    /* Disable buttons */

    answerButtons.forEach(button => {

        button.disabled = true;

    });


    /* Enable next button */

    document.getElementById("nextButton")
        .disabled = false;

}


/* =====================================
   NEXT QUESTION
===================================== */

function nextQuestion() {

    currentQuestion++;


    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showResult();

    }

}


/* =====================================
   SHOW RESULT
===================================== */

function showResult() {

    document.getElementById("quizContent")
        .style.display = "none";


    document.getElementById("result")
        .style.display = "block";


    document.getElementById("score")
        .textContent =
        score + "/" + questions.length;


    const percentage =
        (score / questions.length) * 100;


    let message;


    if (percentage === 100) {

        message =
            "Excellent! You have a strong understanding of phishing awareness.";

    }

    else if (percentage >= 60) {

        message =
            "Good work! Review the topics you missed and keep practicing.";

    }

    else {

        message =
            "Keep learning! Review the training sections and try the quiz again.";

    }


    document.getElementById("resultMessage")
        .textContent = message;


    /* Complete progress bar */

    document.getElementById("progress")
        .style.width = "100%";

}


/* =====================================
   RESTART QUIZ
===================================== */

function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    answered = false;


    document.getElementById("quizContent")
        .style.display = "block";


    document.getElementById("result")
        .style.display = "none";


    loadQuestion();

}


/* =====================================
   START QUIZ
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadQuestion();

    }
);