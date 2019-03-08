import getTimes from './getTimes.mjs';

const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const updateHandPosition = (handElement, degreeDiff) => {
  if (handElement.dataset.degree === '90') {
    const { transition: transitionStyle } = getComputedStyle(handElement);
    handElement.style.transition = 'unset';
    handElement.style.transform = 'translateY(-50%) rotate(90deg)';
    void handElement.offsetTop;
    handElement.style.transition = transitionStyle;
  }

  const nextDegree = 90 + degreeDiff;
  handElement.dataset.degree = nextDegree;
  handElement.style.transform =
    nextDegree === 90
      ? `translateY(-50%) rotate(${nextDegree + 360}deg)`
      : (handElement.style.transform = `translateY(-50%) rotate(${nextDegree}deg)`);
};

let timerID = 0;
const updateClock = () => {
  const { hour, min, second } = getTimes();
  updateHandPosition(hourHand, (hour / 12) * 360);
  updateHandPosition(minHand, (min / 60) * 360);
  updateHandPosition(secondHand, (second / 60) * 360);
};

const startClock = () => {
  stopClock();
  timerID = setInterval(updateClock, 1000);
};

const stopClock = () => {
  clearInterval(timerID);
  timerID = 0;
};

export { startClock, stopClock };
