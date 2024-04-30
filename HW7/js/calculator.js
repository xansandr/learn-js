{
  function isNumber(value) {
    return typeof value === "number";
  }

  console.log("Калькулятор выключен");

  let calculator = {
    status: false,

    toggleStatus: function () {
      if (this.status == false) {
        toggleInput = prompt("Включите калькулятор", "Включить");
        if (toggleInput == "Включить") {
          this.status = true;
          console.log("Калькулятор включен");
          calculator.operationInput();
        } else return;
      }
    },
    operationInput: function () {
      let regex = /[0-9]+/g;
      if (this.status == true) {
        let firstNumInput = Number(prompt("Введите первое число")),
          operatorInput = prompt("Введите оператор вычисления"),
          secondNumInput = Number(prompt("Введите второе число"));
        console.log(firstNumInput);
        console.log(secondNumInput);
        console.log(regex.test(firstNumInput));
        console.log(regex.test(secondNumInput));
        if (regex.test(firstNumInput) && regex.test(secondNumInput)) {
          let formula = firstNumInput + operatorInput + secondNumInput,
            //   То, что вы видите ниже - буквально игрушка дьявола, эта штука буквально практически выполняет функционал инженерного калькулятора, может считать побитовые операции, сдвига. Я бы мог конечно просто прописать через case возможные операции для этого псевдокалькулятора, но.. Так ведь веселее?

            answer = eval(formula);

          //
          console.log(formula + "=" + answer);
        } else console.log("Введенное значение не является числом");
      }
    },
  };

  calculator.toggleStatus();
}
