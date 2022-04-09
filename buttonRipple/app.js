const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const yInside = e.target.offsetTop;
    const xInside = e.target.offsetLeft;

    const buttonLeft = x - xInside;
    const buttonTop = y - yInside;
    console.log(buttonTop, buttonLeft);
    const circle = document.createElement('span');

    circle.classList.add('circle');
    circle.style.top = `${buttonTop}px`;
    circle.style.left = `${buttonLeft}px`;

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 300);
  });
});
