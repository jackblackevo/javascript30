const removeTransition = event => {
  const { propertyName, target } = event;

  if (propertyName === 'transform') {
    target.classList.remove('playing');
  }
};

export default removeTransition;
