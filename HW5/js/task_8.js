{
  function treygolnik(userInput = prompt("Введите число")) {
    let star = "*",
      str = star + star,
      whiteSpace = " ",
      amountSpace = "";

    for (j = 0; j < userInput; j++) {
      for (let i = 0; i < userInput - j; i++) {
        amountSpace = whiteSpace.repeat(i);
      }
      for (let i = 0; i < userInput; i++) {
        mnozh = str.repeat(j);
      }
      console.log(amountSpace + (star + mnozh));
    }
  }
  treygolnik((userInput = prompt("Введите число")));
}
