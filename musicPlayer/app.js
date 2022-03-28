const container = document.querySelector('.container');
const playBtn = document.querySelector('#playBtn');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const audio = document.querySelector('#audios');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const img = document.querySelector('#img');

//song titles
const songs = ['dreams', 'gloomy', 'vibe', 'young'];

let songIndex = 1;

//load song into dom

//functions

loadSong(songs[songIndex]);

function loadSong(songs) {
  title.innerText = songs;
  audio.src = `/musics/Classic Jazz - Jazz ${songs}.mp3`;
  img.src = `/images/Classic Jazz - Jazz ${songs}.jpg`;
}

function pauseSong() {
  container.classList.remove('play');
  document.querySelector('.plaies').classList.add('fa-play');
  document.querySelector('.plaies').classList.remove('fa-pause');

  audio.pause();
}

function playSong() {
  container.classList.add('play');
  document.querySelector('.plaies').classList.remove('fa-play');
  document.querySelector('.plaies').classList.add('fa-pause');

  audio.play();
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}
// event listeners

playBtn.addEventListener('click', () => {
  const isPlaying = container.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);
