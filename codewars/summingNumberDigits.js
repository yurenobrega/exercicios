function sumDigits(number) {
  number = String(Math.abs(number)).split("");
  let numberIntArray = number.map((element) => {
    return parseInt(element);
  });
  return numberIntArray.reduce((a, b) => {
    return a + b;
  });
}