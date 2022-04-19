const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click', (e) => {
  e.preventDefault();
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      creatHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const creatHeart = (e) => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = e.clientX;
  const y = e.clientY;

  const left = e.target.offsetLeft;
  const top = e.target.offsetTop;

  const xInside = x - left;
  const yInside = y - top;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  times.innerHTML = ++timesClicked;

  setTimeout(() => heart.remove(), 5000);

  loveMe.appendChild(heart);
};
