/* verifica se uma palavra é anagrama de outra, ou seja: possui as mesmas letras.*/

var isAnagram = function (test, original) {
  testArray = test.toLowerCase().split("").sort().join("");
  originalArray = original.toLowerCase().split("").sort().join("");
  if (testArray === originalArray) {
    return true;
  }
  return false;
};

