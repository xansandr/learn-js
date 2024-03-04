{
  let n = 1209,
    numbers = String(n).split("");
  let numbersLenght = numbers.length;
  let summ = 0;
  for (let i = 0; i < numbersLenght; i++) {
    summ += Number(numbers[i]);
  }
  let reverse = "";
  for (let i = numbersLenght - 1; i >= 0 ; i--) {
    reverse += numbers[i];
  }
console.log( ` а. ${numbers}\n\n b. ${numbersLenght}\n\n c. ${summ}\n\n d. ${reverse}`)
}
