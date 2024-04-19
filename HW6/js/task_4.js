{
  let array = [4, 2, 5, 19, 13, 0, 10];
  let arraySumm = 0;
  for (i = 0; array.length > i; i++) {
    cube = Math.pow(array[i], 3);
    arraySumm += cube;
  }
  console.log(
    `квадратный корень из суммы кубов элементов массива: ${Math.sqrt(arraySumm)}`
  );
}
