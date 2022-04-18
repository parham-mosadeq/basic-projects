const button = document.getElementById('button');
const toasts = document.querySelector('.toasts');

const messages = ['Message One', 'Message Two', 'Message Three'];

const type = ['info', 'success', 'error'];

button.addEventListener('click', creatNotification);

function creatNotification() {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(getRandomType());

  notif.innerText = getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return type[Math.floor(Math.random() * type.length)];
}
