const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const textinputEl = document.getElementById('textinput');

speedEl.addEventListener('input', (e) => {
  speed = 300 / e.target.value;
});

textinputEl.addEventListener('change', (e) => {
  text = e.target.value;
  setTimeout(() => {
    e.target.value = '';
  }, 10);

  writeText();
});

let text = 'We love programming!';

let idx = 1;
let speed = 300 / speedEl.value;

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;
  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

writeText();
