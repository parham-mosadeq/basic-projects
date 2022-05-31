const screens = document.querySelectorAll('.screen');
const choose_insect_btn = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');
const game_container = document.getElementById('game-container');

let seconds = null;
let score = 0;
let selected_insect = {};

start_btn.addEventListener('click', () => {
  screens[0].classList.add('up');
});

choose_insect_btn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    selected_insect = { src, alt };
    screens[1].classList.add('up');

    setTimeout(creatInsect, 1000);
    startGame();
  });
});

function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  console.log(m, s);
  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++;
}

function creatInsect() {
  const insect = document.createElement('div');
  const insect_img = document.createElement('img');

  insect_img.setAttribute('src', selected_insect.src);
  insect_img.setAttribute('alt', selected_insect.alt);
  insect_img.style.transform = `rotate(${Math.random() * 360}deg)`;

  insect.classList.add('insect');

  const { x, y } = getRandomLocation();

  insect.style.top = `${x}px`;
  insect.style.left = `${y}px`;

  insect.appendChild(insect_img);
  insect.addEventListener('click', catchInsect);
  game_container.appendChild(insect);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;

  return { x, y };
}

function catchInsect() {
  increaseScore();

  this.classList.add('cut');

  setTimeout(() => this.remove(), 2000);
  addInsects();
}

function increaseScore() {
  score++;

  if (score > 19) {
    message.classList.add('visible');
  }

  scoreEl.innerHTML = `Score: ${score}`;
}

function addInsects() {
  setTimeout(creatInsect, 1000);
  setTimeout(creatInsect, 1500);
}
