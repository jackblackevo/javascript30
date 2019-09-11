import DrawPanel from './DrawPanel.mjs';

const canvas = document.querySelector('.draw-panel');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const drawPanel = new DrawPanel(canvas);
drawPanel.init();
