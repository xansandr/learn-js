{
  console.log(`\nTask_4\n\n`);
  for (let number = 1; number <= 5; number++) {
    summ = 0;
    for (let digit = 1; digit <= number; digit++) {
      summ += digit;
    }
    console.log(summ);
  }
}
