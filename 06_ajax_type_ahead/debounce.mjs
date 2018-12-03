const debounce = (func, wait = 300) => {
  let timeoutID = 0;

  return function(...args) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(func.bind(this), wait, ...args);
  };
};

export default debounce;
