const getTimes = () => {
  const date = new Date();

  return {
    hour: date.getHours(),
    min: date.getMinutes(),
    second: date.getSeconds(),
  };
};

export default getTimes;
