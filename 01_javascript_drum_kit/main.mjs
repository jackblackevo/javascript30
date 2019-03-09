import playSound from './playSound.mjs';
import removePlaying from './removePlaying.mjs';

document.addEventListener('keydown', playSound);
document
  .querySelector('.keys')
  .addEventListener('transitionend', removePlaying);
