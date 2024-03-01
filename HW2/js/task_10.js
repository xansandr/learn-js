january = 31 * 1;
february = 31 * 2;
march = 31 * 3;
april = 31 * 4;
may = 31 * 5;
june = 31 * 6;
july = 31 * 7;
august = 31 * 8;
september = 31 * 9;
october = 31 * 10;
november = 31 * 11;
december = 31 * 12;

if (day <= january) {
  month = "Январь";
} else if (day <= february && day > february - 31) {
  month = "Февраль";
}
if (day <= march && day > march - 31) {
  month = "Март";
} else if (day <= april && day > april - 31) {
  month = "Апрель";
}
if (day <= may && day > may - 31) {
  month = "Май";
} else if (day <= june && day > june - 31) {
  month = "Июнь";
}
if (day <= july && day > july - 31) {
  month = "Июль";
} else if (day <= august && day > august - 31) {
  month = "Август";
}
if (day <= september && day > september - 31) {
  month = "Сентябрь";
} else if (day <= october && day > october - 31) {
  month = "Октябрь";
}
if (day <= november && day > november - 31) {
  month = "Ноябрь";
} else if (day <= december && day > december - 31) {
  month = "Декабрь";
}
let time_of_the_year;

switch (month) {
  case "Январь":
  case "Февраль":
  case "Март":
    time_of_the_year = "Весна";
    break;
  case "Апрель":
  case "Май":
  case "Июнь":
    time_of_the_year = "Лето";
    break;
  case "Июль":
  case "Август":
  case "Сентябрь":
    time_of_the_year = "Осень";
    break;
  case "Октябрь":
  case "Ноябрь":
  case "Декабрь":
    time_of_the_year = "Зима";
    break;
  default:
    break;
}
console.log(`Время года: ${time_of_the_year}, ${month}.`);
