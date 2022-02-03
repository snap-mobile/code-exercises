
const isWeekend = (inputDate): boolean => {
  const day = inputDate.getDay();
  return (day === 0 || day === 6); 
};

export default { isWeekend };

// import DateUtils from '.'
// const today = new Date();
// console.log( DateUtils.isWeekend(today) );