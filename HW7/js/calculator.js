{
  function isNumber(value) {
    return typeof value === "number";
  }
  let regexToggleOff = "выключить";
  let regexToggleOn = "включить";

  function statusOff() {
    console.log("Калькулятор выключен");
  }

  let calculator = {
    status: false,

    toggleStatus: function () {
      if (this.status == false) {
        toggleInput = prompt(
          'Включите калькулятор (чтобы выключить каркулятор в любой момент введите "Выключить"',
          "Включить"
        ).toLowerCase();
        if (toggleInput === "включить") {
          this.status = true;
          console.log("Калькулятор включен");
          calculator.operationInput();
        } else return;
      }
    },
    operationInput: function () {
      let regexNum = /[0-9]+/;

      if (this.status == true) {
        let firstNumInput = prompt("Введите первое число").toLowerCase();
        if (firstNumInput === "выключить") {
          this.status = false;
          statusOff();
          return this.toggleStatus();
        }
        let operatorInput = prompt("Введите оператор вычисления").toLowerCase();
        if (operatorInput === "выключить") {
          this.status = false;
          statusOff();
          return this.toggleStatus();
        }
        let secondNumInput = prompt("Введите второе число").toLowerCase();
        if (secondNumInput === "выключить") {
          this.status = false;
          statusOff();
          return this.toggleStatus();
        }
        if (regexNum.test(firstNumInput) && regexNum.test(secondNumInput)) {
          let formula =
              Number(firstNumInput) + operatorInput + Number(secondNumInput),
            //   То, что вы видите ниже - буквально игрушка дьявола, эта штука буквально практически выполняет функционал инженерного калькулятора, может считать побитовые операции, сдвига. Я бы мог конечно просто прописать через case возможные операции для этого псевдокалькулятора, но.. Так ведь веселее?

            answer = eval(formula);

          console.log(formula + "=" + answer);
        } else console.log("Введенное значение не является числом");
        console.log(firstNumInput, operatorInput, secondNumInput);

        this.operationInput();
      }
    },
  };

  calculator.toggleStatus();
}
