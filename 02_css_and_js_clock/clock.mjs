import getTimes from './getTimes.mjs';

const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const updateHandPosition = (handElement, nextDegree) => {
  const lastDegree = Number.parseInt(handElement.dataset.degree || 0, 10);

  const isOver12 = lastDegree >= 360;
  if (isOver12) {
    const { transition: transitionStyle } = getComputedStyle(handElement);
    handElement.style.setProperty('transition', 'unset');
    handElement.style.setProperty(
      'transform',
      `translate(-50%, -100%) rotate(${lastDegree - 360}deg)`
    );
    void handElement.offsetTop;
    handElement.style.setProperty('transition', transitionStyle);
  }

  const degree =
    !isOver12 && nextDegree < lastDegree ? nextDegree + 360 : nextDegree;
  handElement.style.setProperty(
    'transform',
    `translate(-50%, -100%) rotate(${degree}deg)`
  );
  handElement.dataset.degree = degree;
};

const updateClock = () => {
  const { hour, min, second } = getTimes();
  updateHandPosition(hourHand, (hour / 24) * 360);
  updateHandPosition(minHand, (min / 60) * 360);
  updateHandPosition(secondHand, (second / 60) * 360);
};

let timerID = 0;
const startClock = () => {
  stopClock();
  updateClock();
  timerID = setInterval(updateClock, 1000);
};

const stopClock = () => {
  clearInterval(timerID);
  timerID = 0;
};

export { startClock, stopClock };
