/* Problem
Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. 
Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan 
dengan huruf alfabet setelahnya. Contoh, huruf a akan menjadi b, c akan menjadi d, 
k menjadi l, dan z menjadi a.
*/

function ubahHuruf(kata) {
  var huruf = "abcdefghijklmnopqrstuvwxyz";
  var temp = "";

  for (var i = 0; i < kata.length; i++) {
    for (var j = 0; j < huruf.length; j++) {
      if (kata[i] == huruf[j]) {
        if (huruf[j + 1] == undefined) {
          temp = temp + huruf[0];
        } else {
          temp = temp + huruf[j + 1];
        }
      }
    }
  }
  return temp;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
