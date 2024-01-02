const playerElement = document.getElementById('music-container') as HTMLDivElement;
const playToggleElement = document.getElementById('play') as HTMLButtonElement;
const prevPlayElement = document.getElementById('prev') as HTMLButtonElement;
const nextPlayElement = document.getElementById('next') as HTMLButtonElement;
const audioElement = document.getElementById('audio') as HTMLAudioElement;
const progressContainerElement = document.getElementById('progress-container') as HTMLDivElement;
const progressElement = document.getElementById('progress') as HTMLDivElement;
const titleElement = document.getElementById('title') as HTMLHeadingElement;
const coverElement = document.getElementById('cover') as HTMLImageElement;

interface Song {
  name: string,
  audioFile: string,
  imageFile: string
}

const songs: Song[] = [
  {name: 'Hey', audioFile: 'music/hey.mp3', imageFile: 'images/hey.jpg'},
  {name: 'Summer', audioFile: 'music/summer.mp3', imageFile: 'images/summer.jpg'},
  {name: 'Ukulele', audioFile: 'music/ukulele.mp3', imageFile: 'images/ukulele.jpg'},
];

let currentSongIndex = 0;

const startPlayer = (play: boolean) => {
  const playToggleElementIcon = playToggleElement.querySelector('i') as HTMLElement;
  if (play) {
    audioElement.play();
    playerElement.classList.add('play');
    playToggleElementIcon.classList.remove('fa-play');
    playToggleElementIcon.classList.add('fa-pause');
  } else {
    audioElement.pause();
    playerElement.classList.remove('play');
    playToggleElementIcon.classList.remove('fa-pause');
    playToggleElementIcon.classList.add('fa-play');
  }
};

const loadSong = (idx: number) => {
  currentSongIndex = idx;
  titleElement.innerText = songs[idx].name;
  coverElement.src = songs[idx].imageFile;
  audioElement.src = songs[idx].audioFile;
};

const gotoAudio = (percent: number) => {
  audioElement.currentTime = audioElement.duration * percent / 100;
};

document.addEventListener('DOMContentLoaded', () => loadSong(currentSongIndex));

playToggleElement.addEventListener('click', () => {
  startPlayer(audioElement.paused);
});

nextPlayElement.addEventListener('click', () => {
  const nextIdx = (currentSongIndex + 1) % songs.length;
  loadSong(nextIdx);
  startPlayer(audioElement.paused);
});

prevPlayElement.addEventListener('click', () => {
  const prevIdx = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(prevIdx);
  startPlayer(audioElement.paused);
});

audioElement.addEventListener('timeupdate', (evt) => {
  const source = evt.target as HTMLAudioElement;
  const {duration, currentTime} = source;
  const progPercent = Math.round(currentTime / duration * 1000) / 10;
  progressElement.style.width = `${progPercent}%`;
});

progressContainerElement.addEventListener('click', (evt) => {
  const target = evt.currentTarget as HTMLDivElement;
  const clickedPercent = Math.round(evt.offsetX / target.clientWidth * 1000) / 10;
  gotoAudio(clickedPercent);
});