{
  // f - first w - value
  // s - second
  // a - answer
  console.log(`\nTask_6\n\n`);
  for (let fv = 1; fv <= 10; fv++) {
    for (let sv = 1; sv <= 10; sv++) {
      a = fv * sv;
      console.log(`${fv} * ${sv} = ${a} \n`);
      if (sv % 10 == 0) {
        console.log("");
      }
    }
  }
}
