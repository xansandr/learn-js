{
  let string = "aaa@bbb@ccc";
  let aimToChange = /@/g;
  let newString = string.replace(aimToChange, "!");
  console.log(newString);
}
