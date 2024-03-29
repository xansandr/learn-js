// "f2222@sh.i.zooooooooooooooo.oooofreniya"

let mail = prompt("Введите адрес электронной почты"),
  slicedMail = mail.split("@");
console.log(slicedMail);
let acceptedStr = "abcdefghijklmnopqrstuvwxyz1234567890@.-_",
  acceptedLetter = "abcdefghijklmnopqrstuvwxyz",
  acceptedNum = "1234567890",
  acceptedSymb = ".@-_";
let dogamount = 0,
  dotamount = 0;

function conditionA() {
  for (i = 0; i < mail.length; i++) {
    if (acceptedStr.toLowerCase().includes(mail[i]) == false) {
      console.log("Адрес содержит запрещённые символы.");
      return false;
    }
    if (mail[i] == acceptedSymb[1]) {
      dogamount += 1;
    }
    if (dogamount > 1) {
      console.log('Адрес содержит больше одной "собачки."');
      return false;
    }
  }
  for (i = 0; i < acceptedSymb.length; i++) {
    if (
      acceptedSymb[i] === mail[0] ||
      acceptedSymb[i] === mail[mail.length - 1]
    ) {
      console.log("Символы не могут быть первыми и последними в адресе.");
      return false;
    }
    for (j = 0; j < mail.length; j++) {
      k = j + 1;
      if (acceptedSymb[i] == mail[j] && acceptedSymb[i] == mail[k]) {
        console.log("Спец. символы не могут идти подряд.");
        return false;
      }
    }
  }
  return true;
}

function conditionB() {
  if (slicedMail[0].length <= 2) {
    console.log("Имя электронной почты должно быть более 2 символов.");
    return false;
  }

  for (i = 0; i < slicedMail[0].length; i++) {
    if (slicedMail[0].includes(acceptedSymb[i + 1])) {
      console.log(
        "Имя электронной почты может содержать только буквы и цифры."
      );
      return false;
    }

    if (mail[i] == acceptedSymb[0]) {
      dotamount += 1;
    }
    if (dotamount > 1) {
      console.log("Имя электронной почты содержит больше одной точки.");
      return false;
    }
    for (j = 0; j < slicedMail[0]; j++) {
      if (
        acceptedLetter.includes(slicedMail[0][j]) == false &&
        acceptedNum[i] == slicedMail[0][0]
      ) {
        console.log("Цифры не могут быть первыми и единственными в имени.");
        return false;
      }
      if (acceptedNum[i] == slicedMail[0][0]) {
        console.log("Цифры не могут быть первыми в имени");
        return false;
      }
    }
  }
  return true;
}

function conditionC() {
  let domain = slicedMail[1].split("."),
    firDomain = domain[0],
    lastDomain = domain[domain.length - 1];
  if (firDomain.length < 2 || firDomain.length > 11) {
    console.log(
      "Первый домен верхнего уровня не может быть длиной менее 2 и более 11 символов."
    );
  }
  if (lastDomain.length < 2 || lastDomain.length > 11) {
    console.log(
      "Последний домен верхнего уровня не может быть длиной менее 2 и более 11 символов."
    );
  }
  return true;
}

// conditionA();
// conditionB();
// conditionC();
function checkMailInput() {
  if (conditionA(mail) && conditionB(mail) && conditionC(mail)) {
    console.log("Почта нормальная");
  }
}

checkMailInput();
