const allPanels = Array.from(document.querySelectorAll('.panel'));

const closeOtherPanels = target =>
  allPanels
    .filter(panel => panel !== target)
    .map(panel => panel.classList.remove('open'));

const toggleOpen = event => {
  const { path, currentTarget } = event;

  const targetPanelIdx = [...path].indexOf(currentTarget) - 1;
  const targetPanel = path[targetPanelIdx];

  closeOtherPanels(targetPanel);
  targetPanel.classList.toggle('open');
};

export default toggleOpen;
