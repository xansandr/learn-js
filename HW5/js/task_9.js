{
  // Руки бы за такой код отрубать, как же хорошо что у меня лапки
  let fibNum1 = 1,
    fibNum2 = 1,
    fibArray = [fibNum1, fibNum2];
  function fibNumber(fibNumT) {
    for (i = 0; i <= fibNumT - 3; i++) {
      fibNum2 = fibNum1 + fibNum2;
      fibNum1 = fibNum2 - fibNum1;
      fibArray.push(fibNum2);
    }
    return fibNum1;
  }
  fibNumber(1000);
  console.log(fibArray);
}
