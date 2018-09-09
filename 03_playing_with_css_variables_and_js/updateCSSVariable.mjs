const updateCSSVariable = event => {
  const { name: variableName, value } = event.target;
  const suffix = event.target.dataset.unit || '';

  document.documentElement.style.setProperty(
    `--${variableName}`,
    `${value}${suffix}`
  );
};

export default updateCSSVariable;
