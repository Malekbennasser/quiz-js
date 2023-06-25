// Définition des questions et des réponses
const questions = [
  {
    question: "Quel est le nom complet du langage JavaScript ?",
    reponses: [
      { texte: "Java", correcte: false },
      { texte: "JavaScript", correcte: true },
      { texte: "JScript", correcte: false },
      { texte: "ECMAScript", correcte: false },
    ],
  },
  {
    question:
      "Quelle méthode de JavaScript est utilisée pour afficher une boîte de dialogue avec un message ?",
    reponses: [
      { texte: "alert()", correcte: true },
      { texte: "console.log()", correcte: false },
      { texte: "prompt()", correcte: false },
      { texte: "confirm()", correcte: false },
    ],
  },
  {
    question:
      "Quel est le symbole utilisé pour l'opérateur d'addition en JavaScript ?",
    reponses: [
      { texte: "+", correcte: true },
      { texte: "-", correcte: false },
      { texte: "*", correcte: false },
      { texte: "/", correcte: false },
    ],
  },
  {
    question:
      "Quelle est la fonction JavaScript utilisée pour sélectionner un élément dans une page HTML ?",
    reponses: [
      { texte: "document.getElement()", correcte: false },
      { texte: "document.querySelector()", correcte: true },
      { texte: "document.find()", correcte: false },
      { texte: "document.search()", correcte: false },
    ],
  },
];

// Récupération des éléments HTML
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const reponsesElement = document.getElementById("reponses");
const scoreElement = document.getElementById("score");
const resultatElement = document.getElementById("resultat");
const suivantBtn = document.getElementById("suivant-btn");

// Initialisation des variables
let questionIndex = 0;
let score = 0;

/*/ Fonction pour charger la question suivante
function chargerQuestion() {
  const question = questions[questionCourante];
  questionElement.innerText = questions.question;
  reponsesElement.innerHTML = "";
  question.reponses.forEach((reponse) => {
    const bouton = document.createElement("button");
    bouton.innerText = reponse.texte;
    bouton.classList.add("reponse-btn");
    if (reponse.correcte) {
      bouton.dataset.correct = reponse.correcte;
    }
    bouton.addEventListener("click", reponseSelectionnee);
    reponsesElement.appendChild(bouton);
  });
  //questionContainer.push(questions);
  //chargerQuestion();
}

// Fonction pour sélectionner une réponse
function reponseSelectionnee(e) {
  const boutonSelectionne = e.target;
  const correct = boutonSelectionne.dataset.correct;
  if (correct) {
    score++;
  }
  Array.from(reponsesElement.children).forEach((bouton) => {
    setStatusClass(bouton, bouton.dataset.correct);
  });
  if (questionCourante === questions.length - 1) {
    suivantBtn.innerText = "Terminer";
  }
  if (questionCourante === questions.length) {
    resultatElement.classList.remove("invisible");
    questionContainer.classList.add("invisible");
    resultatElement.innerText = `Votre score est de `;
  }
}
*/

/*function startQuiz() { 
  questionCouranteIndex = 0;
  score = 0;
  suivantBtn.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  //resetState();
  let questionCourante = questions[questionCouranteIndex];
  let questionNo = questionCouranteIndex + 1;
  questionElement.innerHTML = questionNo + ". " + questionCourante.question;

  questionCourante.reponses.forEach((reponses) => {
    let button = document.createElement("button");
    button.innerHTML = reponses.texte;
    button.classList.add("btn");
    reponsesButtons.appendChild(button);
  });
}
/*function resetState() {
  suivantBtn.style.display = "none";
  while (reponsesButtons.firstChild) {
    reponsesButtons.removeChild(reponsesButtons.firstChild);
  }
}*/

//startQuiz();

function afficherQuestion(question) {
  questionElement.innerText = question.question;
  reponsesElement.innerHTML = "";
  question.reponses.forEach((element) => {
    reponsesElement.innerHTML += `<button class="reponsesBtn">${element.texte}</button>`;
    let reponsesBtn = document.querySelectorAll(".reponsesBtn");

    reponsesBtn.forEach((element, index) => {
      element.addEventListener("click", () => {
        if (question.reponses[index].correcte === true) {
          element.style.backgroundColor = "green";
          console.log("ok");
          score++;
          scoreElement.innerHTML = `${score}`;

          resultatElement.innerText = "bravo";
        } else {
          element.style.backgroundColor = "red";
          question.reponses[index].correcte === false;
          resultatElement.innerText = "faute";
        }
      });
    });
  });
}

afficherQuestion(questions[questionIndex]);
suivantBtn.addEventListener("click", () => {
  questionIndex++;

  afficherQuestion(questions[questionIndex]);
});
