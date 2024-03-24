{
  function pyramid() {
    let stringNum = "";
    if (specialInput == "" || specialInput == null || specialInput == " ") {
      for (i = 1; i <= rowInput; i++) {
        num = i;
        for (j = 1; j <= i; j++) {
          stringNum += num.toString();
        }
        console.log(stringNum);
        stringNum = "";
      }
    } else {
      for (i = 1; i <= rowInput; i++) {
        num = i;
        for (j = 1; j <= i; j++) {
          stringNum += num;
          stringReplace = stringNum.toString().replaceAll(num, specialInput);
        }
        console.log(stringReplace);
        stringNum = "";
      }
    }
  }

  pyramid(
    (rowInput = prompt("Введите число рядов")),
    (specialInput = prompt("Введите доп. параметр "))
  );
}
