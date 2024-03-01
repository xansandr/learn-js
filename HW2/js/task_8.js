let day = prompt("Введите число от 1 до 31");

if (day >= 1 && day <= 10) {
  console.log(`Task_8\n\nЧисло ${day} попадает в первую декаду`);
} else if (day >= 11 && day <= 20) {
  console.log(`Task_8\n\nЧисло ${day} попадает во вторую декаду`);
} else if (day >= 21 && day <= 31) {
  console.log(`Task_8\n\nЧисло ${day} попадает в третью декаду`);
} else {
  console.log(
    `Русским языком написано, число от 1 до 31, разве ${day} подходит в этот промежуток?`
  );
}
