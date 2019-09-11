/* Problem
Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. 
Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). 
FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat
membagi habis kedua bilangan tersebut.
*/

function fpb(angka1, angka2) {
  var fpb_1 = [];
  var fpb_2 = [];
  var temp = [];

  //fpb angka 1
  for (var i = 0; i < angka1; i++) {
    if (angka1 % i == 0) {
      fpb_1.push(i);
    }
  }

  //fpb angka 2
  for (var i = 0; i < angka2; i++) {
    if (angka2 % i == 0) {
      fpb_2.push(i);
    }
  }

  //penyamaan fpb
  for (var i = 0; i < fpb_1.length; i++) {
    for (var j = 0; j < fpb_2.length; j++) {
      if (fpb_2[j] == fpb_1[i]) {
        temp.push(fpb_2[j]);
      }
    }
  }

  //pemanggilan fpb
  var panggil = temp[0];
  for (var i = 0; i < temp.length; i++) {
    if (temp[i] > panggil) {
      panggil = temp[i];
    }
  }

  return panggil;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
