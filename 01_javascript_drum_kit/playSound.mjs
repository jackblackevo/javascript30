const keyElementsMap = new Map(
  [].map.call(document.querySelectorAll('div[data-key]'), element => [
    Number(element.dataset.key),
    element
  ])
);

const audioElementsMap = new Map(
  [].map.call(document.querySelectorAll('audio[data-key]'), element => [
    Number(element.dataset.key),
    element
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
