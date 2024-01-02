const videoElement = document.getElementById('video') as HTMLVideoElement;
const playToggleElement = document.getElementById('play') as HTMLButtonElement;
const stopElement = document.getElementById('stop') as HTMLButtonElement;
const progressElement = document.getElementById('progress') as HTMLInputElement;
const timeElement = document.getElementById('timestamp') as HTMLSpanElement;
let videoIsSeeking = false;

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${paddedMinutes}:${paddedSeconds}`;
};

const playerProgress = () => {
  timeElement.innerText = formatTime(videoElement.currentTime);
  if (!videoIsSeeking) {
    progressElement.value = `${Math.round(videoElement.currentTime / videoElement.duration * 1000) / 10}`;
  }
};

const playVideo = (play: boolean) => {
  const playToggleElementIcon = playToggleElement.querySelector('i') as HTMLElement;
  if (play) {
    videoElement.play();
    playToggleElementIcon.classList.remove('fa-play');
    playToggleElementIcon.classList.add('fa-pause');
  } else {
    videoElement.pause();
    playToggleElementIcon.classList.remove('fa-pause');
    playToggleElementIcon.classList.add('fa-play');
  }
};

const movePlayer = (evt: Event) => {
  const inputEl = evt.target as HTMLInputElement;
  const targetTime = videoElement.duration * Number(inputEl.value) / 100;
  console.log(`curtime: ${videoElement.currentTime}, duration: ${videoElement.duration}, target: ${targetTime}`);
  videoElement.currentTime = targetTime;
};

playToggleElement.addEventListener('click', () => {
  playVideo(videoElement.paused);
});
stopElement.addEventListener('click', () => {
  playVideo(false);
  videoElement.currentTime = 0;
});
progressElement.addEventListener('mousedown', () => videoIsSeeking = true);
progressElement.addEventListener('mouseup', () => videoIsSeeking = false);
videoElement.addEventListener('timeupdate', playerProgress);
videoElement.addEventListener('ended', () => playVideo(false));
progressElement.addEventListener('change', movePlayer);