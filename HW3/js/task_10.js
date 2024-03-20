{
  let n = 1209,
    numbers = String(n).split("");
  let numbersLength = numbers.length;
  let summ = 0;
  for (let i = 0; i < numbersLength; i++) {
    summ += Number(numbers[i]);
  }
  let reverse = "";
  for (let i = numbersLength - 1; i >= 0; i--) {
    reverse += numbers[i];
  }
  console.log(
    ` а. ${numbers}\n\n b. ${numbersLength}\n\n c. ${summ}\n\n d. ${reverse}`
  );
}
