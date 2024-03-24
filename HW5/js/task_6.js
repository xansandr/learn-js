{
  let a = 12;
  function isEven(a) {
    return a % 2 == 0;
  }
  console.log("Task_6:\n\n", isEven(a), "\n\n");

  let arrayTask_6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    evenArrayTask_6 = [];
  function evenArray() {
    for (i = 0; i <= arrayTask_6.length; i++) {
      if (isEven(arrayTask_6[i])) {
        evenArrayTask_6.push(arrayTask_6[i]);
      }
    }
  }
  evenArray();
  console.log(evenArrayTask_6);
}
