{
  let mail = "dadaya123@mail.lol.com",
    mail1 = "dada+ya123@mail.lol.com",
    mail2 = "1dadaya123@mail.lol.com",
    mail3 = "dadaya123@mail.lol.communismdelopravoe";

  function validateMail(mail) {
    let firRegex = /^[a-zA-Z0-9_.\-]*[@]?[a-zA-Z0-9_.\-]*$/;
    let firCondition = firRegex.test(mail);

    // console.log("1 condition - " + firCondition);

    let secRegex = /^[a-zA-Z]+[a-zA-Z0-9]{1,}[@]?[a-zA-Z_.\-]*$/;
    let secCondition = secRegex.test(mail);

    // console.log("2 condition - " + secCondition);

    let thiRegex = /[\.][a-zA-Z0-9_\-]{2,11}?$/;
    let thiCondition = thiRegex.test(mail);

    // console.log("3 condition - " + thiCondition);

    if (firCondition & secCondition & (thiCondition == true)) {
      return console.log(true);
    } else return console.log(false);
  }
  validateMail(mail);
  validateMail(mail1);
  validateMail(mail2);
  validateMail(mail3);
}
