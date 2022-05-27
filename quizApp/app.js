const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'java',
    b: 'c',
    c: 'python',
    d: 'javascript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'central style sheet',
    b: 'nothing',
    c: 'cascading style sheet',
    d: 'cars suv sailboats',
    correct: 'd',
  },
  {
    question: 'What does HTML stand for?',
    a: 'hypertext markup language',
    b: 'hyper mark',
    c: 'nothing',
    d: 'hyper markup style',
    correct: 'a',
  },
  {
    question: 'What year was javascript launched?',
    a: '1997',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
submit.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered at ${score}/${quizData.length} questions correctly

        <button onclick="location.reload()">Reload</button> 
        `;
    }
  }
});
