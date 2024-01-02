const playSound = (evt: KeyboardEvent) => {
  const audio = document.querySelector(`audio[data-key="${evt.key}"]`) as HTMLAudioElement | null; // NOSONAR
  const key = document.querySelector(`.key[data-key="${evt.key}"]`);

  if (!audio || !key) {
    return;
  }

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  setTimeout(() => {
    key.classList.remove('playing');
  }, 100);
};

window.addEventListener('keydown', playSound);