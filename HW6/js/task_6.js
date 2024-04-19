{
  let date = new Date();
  let todayTime =
    zeroAdder(date.getHours()) +
    ":" +
    zeroAdder(date.getMinutes()) +
    ":" +
    zeroAdder(date.getSeconds());

  let todayDate =
    zeroAdder(date.getDay()) +
    "." +
    zeroAdder(date.getMonth()) +
    "." +
    zeroAdder(date.getFullYear());

  console.log(todayTime +"  "+ todayDate);

  function zeroAdder(number) {
    if (number <= 9) {
      return "0" + number;
    } else {
      return number;
    }
  }
}
