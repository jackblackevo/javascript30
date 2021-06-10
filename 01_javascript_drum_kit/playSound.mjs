const keyElementsMap = new Map(
  [...document.querySelectorAll('div[data-key]')].map((element) => [
    Number.parseInt(element.dataset.key, 10),
    element,
  ])
);

const audioElementsMap = new Map(
  [...document.querySelectorAll('audio[data-key]')].map((element) => [
    Number.parseInt(element.dataset.key, 10),
    element,
  ])
);

const playSound = ({ keyCode }) => {
  const keyElement = keyElementsMap.get(keyCode);
  const audioElement = audioElementsMap.get(keyCode);
  if (!keyElement || !audioElement) return;

  keyElement.classList.add('playing');
  audioElement.currentTime = 0;
  audioElement.play();
};

export default playSound;
