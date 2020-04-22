const miliSecondsPerDay = 86400000;

export const getMonday = () => {
  const getDayOfWeek = new Date().getDay();
  if (getDayOfWeek === 1) {
    return new Date().getTime();
  } if (getDayOfWeek === 0) {
    return (new Date().getTime() - (6 * miliSecondsPerDay));
  }
  return new Date().getTime() - ((getDayOfWeek - 1) * miliSecondsPerDay);
};
