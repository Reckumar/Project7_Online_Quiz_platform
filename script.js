
const questions = [
  {
    question: "Who developed python?",
    options: ["James Gosling", "Guido van Rossum", "Dennis Ritchie", "Ken Thompson"],
    answer: "Guido van Rossum"
  },
  {
    question: "Who is known as the father of Java?",
    options: ["James Gosling", "Guido van Rossum", "Dennis Ritchie", "Ken Thompson"],
    answer: "James Gosling"
  },
  {
    question: "What did Brendan Eich invent?",
    options: ["Java", "TypeScript", "JQuery", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "Who invented the C language?",
    options: ["C", "TypeScript", "JQuery", "JavaScript"],
    answer: "C"
  },
  {
    question: "Who is the founder of C++ language?",
    options: ["C", "Bjarne Stroustrup", "Java", "Python"],
    answer: "Bjarne Stroustrup"
  },

  // Add more questions here
];

let currentQuestionIndex = -1;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const startButton = document.getElementById("start-button");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const submitButton = document.getElementById("submit-button");

startButton.addEventListener("click", startQuiz);
previousButton.addEventListener("click", showPreviousQuestion);
nextButton.addEventListener("click", showNextQuestion);
submitButton.addEventListener("click", submitQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  startButton.style.display = "none";
  previousButton.disabled = true;
  nextButton.disabled = false;
  submitButton.style.display = "none";
  showQuestion(questions[currentQuestionIndex]);
}

function showPreviousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(questions[currentQuestionIndex]);
    nextButton.disabled = false;
    if (currentQuestionIndex === 0) {
      previousButton.disabled = true;
    }
  }
}

function showNextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(questions[currentQuestionIndex]);
    previousButton.disabled = false;
    if (currentQuestionIndex === questions.length - 1) {
      nextButton.disabled = true;
      submitButton.style.display = "block";
    }
  }
}

function submitQuiz() {
  // Implement your scoring logic here
  alert("Quiz submitted!"); // Replace with appropriate feedback
}

function showQuestion(question) {
  questionElement.textContent = question.question;
  optionsElement.innerHTML = "";

  question.options.forEach((option) => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = option;
    optionsElement.appendChild(radio);

    const label = document.createElement("label");
    label.textContent = option;
    optionsElement.appendChild(label);
  });
}