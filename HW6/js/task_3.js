{
  let string = "Я учу javascript!";
  let firWay = string.substr(2, 4) + string.substr(6, 10),
    secWay = string.substring(2, 6) + string.substring(6, 16),
    thirWay = string.slice(2, 6) + string.slice(6, 16);

  console.log(`Substr - ${firWay} \n
Substring - ${secWay} \n
Slice - ${thirWay} \n`);
}
