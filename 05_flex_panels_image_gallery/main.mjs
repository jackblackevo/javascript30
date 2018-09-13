import toggleOpen from './toggleOpen.mjs';
import toggleActive from './toggleActive.mjs';

const panels = document.querySelector('.panels');
panels.addEventListener('click', toggleOpen);
panels.addEventListener('transitionend', toggleActive);
