import playSound from './playSound.mjs';
import removeTransition from './removeTransition.mjs';

document.addEventListener('keydown', playSound);
document
  .querySelector('.keys')
  .addEventListener('transitionend', removeTransition);
