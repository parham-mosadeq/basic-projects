const container = document.querySelector('.container');
const unsplahsURL = 'https://source.unsplash.com/random/';
const reloadeBtn = document.getElementById('btn');
const rows = 5;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  img.src = `${unsplahsURL} ${getRandomSize}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNr()}x ${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 301;
}

reloadeBtn.addEventListener('click', () => {
    location.reload(); 
});
