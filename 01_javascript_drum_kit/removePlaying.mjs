const removePlaying = event => {
  const { propertyName, target } = event;

  if (propertyName === 'transform') {
    target.classList.remove('playing');
  }
};

export default removePlaying;
