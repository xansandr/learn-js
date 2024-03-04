{
  for (let amountOfNumber = 0, summ = 0; ; amountOfNumber++) {
    inputNumber = prompt("Введите число");
    summ += +inputNumber;
    arithmeticMean = summ / amountOfNumber;
    if (summ !== parseFloat(summ)) {
      console.log("Ошибка ввода, можно вводить только числа.");
      break;
    }
    if (inputNumber === "" || inputNumber == "0") {
      console.log(
        `Общая сумма: ${summ}. Среднее арифметическое: ${arithmeticMean}`
      );
      break;
    }
  }
}
