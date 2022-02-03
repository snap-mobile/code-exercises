
const isWeekend = function (inputDate) {
  const day = inputDate.get();
  return (day + 6) % 7 >= 5;
};

// export default { isWeekend };

// import DateUtils from '.'
const today = new Date("2022-02-05");
console.log(isWeekend(today));