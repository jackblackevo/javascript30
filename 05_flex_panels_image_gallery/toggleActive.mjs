const toggleActive = (event) => {
  const { propertyName, target } = event;

  if (propertyName === 'flex' || propertyName === 'flex-grow') {
    target.classList.toggle('open-active');
  }
};

export default toggleActive;
