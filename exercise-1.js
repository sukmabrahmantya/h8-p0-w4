/* Problem
Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka. 
Function akan me-return true jika angka tersebut adalah bilangan prima.
Jika tidak, return false.
*/

function angkaPrima(angka) {
  var temp = 0;
  for (var i = 1; i <= angka; i++) {
    if (angka % i == 0) {
      temp = temp + 1;
    }
  }
  if (temp == 2) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
