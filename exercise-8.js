/* Problem
Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. 
Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi 
lowercase, dan sebaliknya. Spasi dan simbol diabaikan.
*/

function tukarBesarKecil(kalimat) {
  var kecil = "abcdefghijklmnopqrstuvwxyz ";
  var besar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
  var karakter = "0123456789!@#$%^&*-";

  var result = "";

  for (var i = 0; i < kalimat.length; i++) {
    for (var j = 0; j < kecil.length; j++) {
      if (kalimat[i] == kecil[j]) {
        result = result + besar[j];
      } else if (kalimat[i] == besar[j]) {
        result = result + kecil[j];
      } else if (kalimat[i] == karakter[j]) {
        result = result + karakter[j];
      }
    }
  }
  return result;
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
