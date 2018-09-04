import getTimes from './getTimes.mjs';

const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

let transformStyle = '';
const updateHandPosition = (handElement, degreeDiff) => {
  if (handElement.style.transition === 'unset') {
    handElement.style.transition = transformStyle;
  }
  const nextDegree = 90 + degreeDiff;
  if (degreeDiff === 0) {
    handElement.style.transform = `translateY(-50%)
    rotate(${nextDegree + 359}deg)`;
    transformStyle = getComputedStyle(handElement).transition;
    handElement.style.transition = 'unset';
  }
  handElement.style.transform = `translateY(-50%) rotate(${nextDegree}deg)`;
};

let animationID = 0;
const updateClock = ({ hour, min, second }) => {
  updateHandPosition(hourHand, (hour / 12) * 360);
  updateHandPosition(minHand, (min / 60) * 360);
  updateHandPosition(secondHand, (second / 60) * 360);

  animationID = requestAnimationFrame(() => updateClock(getTimes()));
};

const startClock = () => {
  animationID = requestAnimationFrame(() => updateClock(getTimes()));
};

const stopClock = () => {
  cancelAnimationFrame(animationID);
};

export { startClock, stopClock };
