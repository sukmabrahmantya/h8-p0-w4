/* Problem
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. 
Function akan me-return modus dari array atau deret angka tersebut. 
Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. 
Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, 
function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, 
tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). 
Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, 
Contohnya [1, 1, 1] adalah -1.
*/

function cariModus(arr) {
  //nominasi angka
  var angka = [];
  for (var i = 0; i < arr.length; i++) {
    var index = false;
    for (var j = 0; j < angka.length; j++) {
      if (arr[i] == angka[j]) {
        index = true;
      }
    }
    if (index == false) {
      angka.push(arr[i]);
    }
  }

  //pengelompokan angka
  var jumlah = [];
  for (var i = 0; i < angka.length; i++) {
    var temp = [];
    var counter = 0;
    for (var j = 0; j < arr.length; j++) {
      if (angka[i] == arr[j]) {
        counter += 1;
      }
    }
    temp.push(angka[i], counter);
    jumlah.push(temp);
  }

  //menampilkan modus
  if (jumlah.length == 1) {
    return -1;
  } else {
    var modus = jumlah[0];
    for (var i = 0; i < jumlah.length; i++) {
      if (modus[1] < jumlah[i][1]) {
        modus = jumlah[i];
      }
    }

    if (modus[1] == 1) {
      return -1;
    } else {
      return modus[0];
    }
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
