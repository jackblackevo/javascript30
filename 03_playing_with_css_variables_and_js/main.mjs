import updateCSSVariable from './updateCSSVariable.mjs';

document
  .querySelector('.controls-panel')
  .addEventListener('input', updateCSSVariable);
