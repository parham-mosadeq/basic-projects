const APIURL = 'https://api.github.com/users/';

const form = document.querySelector('#form');
const search = document.querySelector('#search');
const main = document.querySelector('#main');

window.addEventListener('load', () => {
  search.focus();
});

async function getUser(username) {
  try {
    let { data } = await axios.get(APIURL + username);
    creatUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      creatErrorCard('No profile with this username');
    }
  }
}

async function getRepos(username) {
  try {
    let { data } = await axios.get(APIURL + username + '/repos?sort=created');
    addReposToCard(data);
  } catch (err) {
    if (err) {
      creatErrorCard('Problem fetching repos');
    }
  }
}

function creatUserCard(user) {
  const cardHTML = ` <div class="card">
        <div>
          <img
            class="avatar"
            src="${user.avatar_url}"
            alt="${user.name}"
          />
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>
            ${user.bio}
          </p>
          <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos}<strong>Repos</strong></li>
          </ul>

          <div id="repos">
            
          </div>
        </div>
      </div>`;
  main.innerHTML = cardHTML;
}

function creatErrorCard(msg) {
  const cardHTML = `
    <div class="card">
        <h1> ${msg}</h1>

    </div>
    `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');

  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement('a');

    repoEl.classList.add('repo');

    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);
    search.value = '';
  }
});
