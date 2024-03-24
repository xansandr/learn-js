{
  let stringNum = "",
    rowInput = prompt("Введите число рядов"),
    specialInput = prompt("Введите число рядов");

  function pyramid(rowInput, specialInput) {
    console.log(rowInput, specialInput);
    if (specialInput == " ") {
      for (i = 1; i <= rowInput; i++) {
        num = i;
        for (j = 1; j <= i; j++) {
          stringNum += num.toString();
        }
        console.log(stringNum);
        stringNum = "";
      }
    }
  }
  pyramid();
}

// for (i = 1; i <= rowInput; i++) {
//   num = i;
//   for (j = 1; j <= i; j++) {
//     stringNum += num.toString();
//   }
//   console.log(stringNum);
//   stringNum = "";
// }
