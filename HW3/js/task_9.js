{
  let string = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
  let whitespace = "",
    max,
    min;
  for (let number = 0; number < string.length; number++) {
    whitespace += string[number];
    if (+string[number] && !+string[number + 1]) {
      if (typeof max !== "number" || whitespace > +max) max = +whitespace;
      if (typeof min !== "number" || whitespace < +min) min = +whitespace;
      whitespace = "";
    }
  }
  console.log("Самое маленькое:", min, "Самое большое:", max);
}


// Не знаю, какой гений решил давать такое задание на третье дз, но ему явно нужно пойти попить воды, эта задача не через циклы делается в 1-2 строки.