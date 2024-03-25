{
  let array = [56, 12, 42, 10, 19, 11, 9, 4];

  function outputln() {
    console.log(array[0]);
    array.splice(0, 1);
    if (array.length > 0) {
        outputln(array);
    }
    return array
  }
  outputln(array)
}
