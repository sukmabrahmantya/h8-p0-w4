/* Problem
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
function tersebut mengembalikan nilai true jika di dalam string tersebut 
terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. 
Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, 
atau b ke a.
*/

function checkAB(num) {
  var temp = "";

  for (var i = 0; i <= num.length - 1; i++) {
    if (num[i] !== " ") {
      temp = temp + num[i];
    }
  }

  var check = false;
  for (var i = 0; i <= temp.length - 1; i++) {
    // console.log(temp[i]);
    if (
      (temp[i] == "a" && temp[i + 3] == "b") ||
      (temp[i] == "a" && temp[i + 2] == "b") ||
      (temp[i] == "b" && temp[i + 3] == "a") ||
      (temp[i] == "b" && temp[i + 2] == "a")
    ) {
      check = true;
      return check;
    }
  }
  return check;
}

// TEST CASES
console.log(checkAB("lane borrowed")); // true
console.log(checkAB("i am sick")); // false
console.log(checkAB("you are boring")); // true
console.log(checkAB("barbarian")); // true
console.log(checkAB("bacon and meat")); // false
