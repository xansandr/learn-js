{
  function isLessNine(num) {
    let sum = 0;
    let arr = String(num).split("");
    for (i = 0; i < arr.length; i++) {
      number = Number(arr[i]);
      sum += number;
    }
    if (sum > 9) {
      return isLessNine(sum);
    } else return sum;
  }

  let num = 13;
  let final_num = isLessNine(num);
  isLessNine(num);

  console.log(final_num);

  function isSumLess(num) {
    let num = 13;
    if (num === 0) return 0;
    return ((num - 1) % 9) + 1;
  }
  console.log("Конечное число = ", isSumLess(num));
}
