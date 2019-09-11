/* Problem
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter 
berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 
setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] 
output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];

  var naik = [];
  for (var i = 0; i < arrPenumpang.length; i++) {
    var angkot = {};
    var bayar = 0;
    for (var j = 0; j < rute.length; j++) {
      if (arrPenumpang[i][2] == rute[j]) {
        bayar += j + 1;
      }
      if (arrPenumpang[i][1] == rute[j]) {
        bayar -= j + 1;
      }
    }

    angkot.penumpang = arrPenumpang[i][0];
    angkot.naikDari = arrPenumpang[i][1];
    angkot.tujuan = arrPenumpang[i][2];
    angkot.bayar = Math.abs(bayar * 2000);
    naik.push(angkot);
  }

  return naik;
}

//TEST CASE
console.log(naikAngkot([["Dimitri", "C", "A"], ["Icha", "A", "B"]]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
