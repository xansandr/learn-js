{
  let day = prompt("Введите любое количество дней"),
    okruglDownDay = Math.floor(day),
    okruglUpDay = Math.ceil(day),
    isSolidDay = /^\d+$/.test(day),
    yes = 1,
    sampleNumberday = day,
    lastDigitday = sampleNumberday % 100;

  // console.log(lastDigitday);
  // console.log("Пользователь ввёл целое число:", isSolidDay);

  //            Подсчёт количества лет             //

  let isYear = day / 365,
    isSolidYear = /^\d+$/.test(isYear),
    solidYear = Math.floor(isYear),
    fractionYear = isYear - solidYear,
    sampleNumberYear = solidYear,
    lastDigitYear = sampleNumberYear % 10;

  // console.log(lastDigitYear);
  // console.log("Целое число лет с остатком:", isYear);

  //           Подсчёт количества месяцев          //

  let isMonth = (day - solidYear * 365) / 31,
    isSolidMonth = /^\d+$/.test(isMonth),
    solidMonth = Math.floor(isMonth),
    sampleNumberMonth = solidMonth,
    lastDigitMonth = sampleNumberMonth % 10;

  // console.log(lastDigitMonth);
  // console.log("Целое число месяцев c остатком:", isMonth);

  //           Подсчёт количества недель            //

  let isWeek = (day - (solidYear * 365 + solidMonth * 31)) / 7,
    isSolidWeek = /^\d+$/.test(isWeek),
    solidWeek = Math.floor(isWeek),
    fractionWeek = isWeek - solidWeek,
    sampleNumberWeek = solidWeek,
    lastDigitWeek = sampleNumberWeek % 10;

  // console.log(lastDigitWeek);
  // console.log("Целое число недель c остатком:", isWeek);

  //           Подсчёт количества дней            //
  365;
  let isRemainDay = day - (solidYear * 365 + solidMonth * 31 + solidWeek * 7),
    isSolidRemainDay = /^\d+$/.test(isRemainDay),
    solidRemainDay = Math.floor(isRemainDay),
    fractionRemainDay = isRemainDay - solidRemainDay,
    sampleNumberRemainDay = solidRemainDay,
    lastDigitRemainDay = sampleNumberRemainDay % 10;

  // console.log(lastDigitRemainDay),
  //   console.log("Целое число дней c остатком:", isRemainDay);

  if (isSolidDay == false) {
    console.log(
      `Не бывает ${day}, может быть ${okruglDownDay} дней, ну или в крайнем случае ${okruglUpDay}, в следующий раз вводи целое число`
    );
  }
  //  else if (lastDigitday = 1) {
  //   console.log(`В ${day} дне всего:`);
  // } else if ((lastDigitday = 21)) {
  //   console.log(`В ${day} дне всего:`);
  // } else if ((lastDigitday = 31)) {
  //   console.log(`В ${day} дне всего:`);
  // } else if ((lastDigitday = 41)) {
  //   console.log(`В ${day} дне всего:`);
  // } else if ((lastDigitday = 51)) {
  //   console.log(`В ${day} дне всего:`);
  // } else if ((lastDigitday = 61)) {
  //   console.log(`В ${day} дне всего:`);
  // } else if ((lastDigitday = 71)) {
  //   console.log(`В ${day} дне всего:`);
  // } else if ((lastDigitday = 81)) {
  //   console.log(`В ${day} дне всего:`);
  // } else if ((lastDigitday = 91)) {
  //   console.log(`В ${day} дне всего:`);
  // } else if (lastDigitday >= 2) {
  //   console.log(`В ${day} днях всего:`);
  // }

  console.log(
    `Task_9\n\nКороче говоря, я неправильно понял задание и сделал скрипт, преобразовывающий любое количество дней в год, оставшиеся после преобразования дни в месяц и по списку. Видимо, в моей интерпретации это задание вышло немного сложнее, но получилось прикольно)`
  );

  // cклонение кол-ва лет
  if (solidYear == 0) {
    console.log(`0 лет`);
  } else if (lastDigitYear >= 5 || (solidYear >= 10 && solidYear <= 20)) {
    console.log(`${solidYear} лет`);
  } else if (lastDigitYear >= 2) {
    console.log(`${solidYear} года`);
  } else if (lastDigitYear >= 1) {
    console.log(`${solidYear} год`);
  }
  // склонение кол-ва месяцев
  if (solidMonth == 0) {
    console.log(`0 месяцев`);
  } else if (lastDigitMonth >= 5 || (solidMonth >= 10 && solidMonth <= 20)) {
    console.log(`${solidMonth} месяцев`);
  } else if (lastDigitMonth >= 2) {
    console.log(`${solidMonth} месяца`);
  } else if (lastDigitMonth >= 1) {
    console.log(`${solidMonth} месяц`);
  } else;
  // склонение кол-ва недель
  if (solidWeek == 0) {
    console.log(`0 недель`);
  } else if (lastDigitWeek >= 5 || (solidWeek >= 10 && solidWeek <= 20)) {
    console.log(`${solidWeek} недель`);
  } else if (lastDigitWeek >= 2) {
    console.log(`${solidWeek} недели`);
  } else if (lastDigitWeek >= 1) {
    console.log(`${solidWeek} неделя`);
  } else;
  // склонение кол-ва дней
  if (solidRemainDay == 0) {
    console.log(`0 недель`);
  } else if (
    lastDigitRemainDay >= 5 ||
    (solidRemainDay >= 10 && solidRemainDay <= 20)
  ) {
    console.log(`${solidRemainDay} дней`);
  } else if (lastDigitRemainDay >= 2) {
    console.log(`${solidRemainDay} дня`);
  } else if (lastDigitRemainDay >= 1) {
    console.log(`${solidRemainDay} день`);
  } else;

  console.log(`Ниже то, что задумывалось заданием\n\n`);

  let year = day / 365,
    year_Full = Math.floor(year),
    month = day / 31,
    month_Full = Math.floor(month),
    week = day / 7,
    week_Full = Math.floor(week),
    hour = day * 24,
    hour_Full = Math.floor(hour),
    minute = hour * 60,
    minute_Full = Math.floor(minute),
    second = minute * 60,
    second_Full = Math.floor(second);

  if (year_Full >= 1) {
    console.log(`${year_Full} г.`);
  } else if (year_Full <= 1) {
    console.log(`Меньше года`);
  }
  if (month_Full >= 1) {
    console.log(`${month_Full} м.`);
  } else if (month_Full <= 1) {
    console.log(`Меньше месяца`);
  }
  if (week_Full >= 1) {
    console.log(`${week_Full} нед.`);
  } else if (week_Full <= 1) {
    console.log(`Меньше недели`);
  }
  if (hour_Full >= 1) {
    console.log(`${hour_Full} ч.`);
  } else if (hour_Full <= 1) {
    console.log(`Меньше часа`);
  }
  if (minute_Full >= 1) {
    console.log(`${minute_Full} мин.`);
  } else if (minute_Full <= 1) {
    console.log(`Меньше минуты`);
  }
  if (second_Full >= 1) {
    console.log(`${second_Full} сек.`);
  } else if (second_Full <= 1) {
    console.log(`Меньше секунды`);
  }
}
