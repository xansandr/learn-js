//
//  Немного модифицировав изначальное решение для task_3, я смог использовать его в task_4, чтобы программа
//  могла правильно отрабатывать, в случае если при вводе пользователем (первое значение > второе значение).
//  В этом варианте диапазона значений массив будет считаться от большего к меньшему, как и ввел пользователь.
//
//  Для этого, пришлось обьединить task_3 и task_4, чтобы нормально изолировать скрипт от остальных заданий.
//
{
  let a = prompt("Введите первое число"),
    b = prompt("Введите второе число");

  function min(a, b) {
    if (a < b) {
      return true;
    } else return false;
  }

  function max(a, b) {
    if (a > b) {
      return true;
    } else return false;
  }

  let minReturn = min(a, b);
  if (minReturn) {
    console.log("Минимальное число: ", a);
  } else console.log("Минимальное число: ", b);

  let maxReturn = max(a, b);
  if (maxReturn) {
    console.log("Максимальное число: ", a);
  } else console.log("Максимальное число: ", b);

  let arrayTask4 = [];

  function arraybetweenInput(a, b) {
    if (minReturn) {
      for (i = +a; i <= +b; i++) {
        arrayTask4.push([i]);
      }
    } else {
      for (i = +a; i >= +b; i--) {
        arrayTask4.push([i]);
      }
    }
  }

  arraybetweenInput(a, b);

  function arraybetweenInputPrint() {
    arrayTask4Mapped = arrayTask4.map((num) => +num);
    console.log(arrayTask4Mapped);
  }

  arraybetweenInputPrint();
}
