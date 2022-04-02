'use strict';
const jokEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };
//   fetch('https://icanhazdadjoke.com/', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokEl.innerHTML = data.joke;
//     });
// }

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const res = await fetch('https://icanhazdadjoke.com/', config);

  const data = await res.json();
  
  jokEl.innerHTML = data.joke
}

jokeBtn.addEventListener('click', generateJoke);
