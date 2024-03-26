let inputStrings = [];
function card() {
  inputStrings.push('Домашняя работа "Функции"');
  let groupNumber = prompt("Введите номер группы");
  inputStrings.push(groupNumber);
  let surname = prompt("Введите фамилию"),
    name = prompt("Введите имя"),
    fname = prompt("Введите отчество"),
    bio = `${surname} ${name} ${fname}`;
  inputStrings.push(bio);

  let borderLength = 0;
  for (i = 0; i < inputStrings.length; i++) {
    if (borderLength < inputStrings[i].length) {
      borderLength = inputStrings[i].length;
    }
  }
  borderLength += 3;
  border = "*".repeat(borderLength + 1);
  console.log(border);
  for (let i = 0; i < inputStrings.length; i++) {
    let resultString = "* ";
    for (let j = 0; j < borderLength; j++) {
      if (inputStrings[i][j]) {
        resultString += inputStrings[i][j];
      } else {
        if (j === borderLength - 2) {
          resultString += "*";
        } else {
          resultString += " ";
        }
      }
    }
    console.log(resultString);
  }
  console.log(border);
}
card();
