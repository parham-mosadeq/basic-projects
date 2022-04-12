const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const decrease = document.querySelector('#decrease');
const increase = document.querySelector('#increase');
const colors = document.querySelector('#color');
const clear = document.querySelector('#clear');
const sizeSpan = document.querySelector('#size');

let isPressed = false;
let size = 20;
let color = 'black';
let x;
let y;

decrease.addEventListener('click', () => {
  size--;
  if (size === 0) {
    size = 20;
  }
  sizeSpan.innerHTML = size;
});

increase.addEventListener('click', () => {
  size++;
  if (size > 20) {
    size = 20;
  }
  sizeSpan.innerHTML = size;
});

colors.addEventListener('change', (e) => {
  color = e.target.value;
});

clear.addEventListener('click', () => {
  location.reload();
});

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
