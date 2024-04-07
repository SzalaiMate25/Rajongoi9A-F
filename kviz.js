const quizData = [
    {
        question: "Milyen néven streamel Hikaru Nakamura a Twitch platformján?",
        options: ["Hikaru", "GMHikaru", "GrandMasterHikaru", "Hikaru Nakamura"],
        answer: "GMHikaru"
    },

];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() { 
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTMl = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);

    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;

    if (selectedButton.innerText === answer) {
        score++;
    } 

    currentQuestion++;

    if (currentQuestion < quizData.lenght) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizData.innerHTML = "<h1>Quiz completed!</h1> <br> <p>Your score: ${score}/${quizData.lenght}</p>";
    
}