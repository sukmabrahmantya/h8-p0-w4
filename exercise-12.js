/* Problem
Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk 
setiap jenis barang yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:

Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
Function akan menerima array yang berisikan object pembeli (nama pembeli, 
barang yang ingin dibeli dan jumlah barang yang dibelinya). 
Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli 
maka pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object 
dimana array tersebut berisi objek-objek barang dari toko X tersebut 
yang berisikan info nama barang, siapa saja yang membeli, sisa stock barang 
dan total pemasukan untuk barang tersebut
*/

function countProfit(shoppers) {
  let listBarang = [
    ["Sepatu Stacattu", 1500000, 10],
    ["Baju Zoro", 500000, 2],
    ["Sweater Uniklooh", 175000, 1]
  ];

  var temp = [];

  for (var i = 0; i < listBarang.length; i++) {
    var data = {};
    data.product = listBarang[i][0];
    data.shoppers = [];
    data.leftOver = listBarang[i][2];
    data.totalProfit = 0;
    temp.push(data);
  }

  var result = temp;

  for (var i = 0; i < shoppers.length; i++) {
    for (var j = 0; j < result.length; j++) {
      if (shoppers[i].amount <= result[j].leftOver) {
        if (shoppers[i].product == result[j].product) {
          result[j].shoppers.push(shoppers[i].name);
          result[j].leftOver = result[j].leftOver - shoppers[i].amount;

          for (var k = 0; k < listBarang.length; k++) {
            // console.log(listBarang[j]);
            if (shoppers[i].product == listBarang[k][0]) {
              result[j].totalProfit += shoppers[i].amount * listBarang[j][1];
              // console.log(result[j]);
            }
            // } else if (shoppers[i].product == "Baju Zoro") {
            //   result[j].totalProfit += shoppers[i].amount * 500000;
            // } else if (shoppers[i].product == "Sweater Uniklooh") {
            //   result[j].totalProfit += shoppers[i].amount * 175000;
            // } else {
            //   result[j].totalProfit = 0;
          }
        }
      }
    }
  }
  //looping hasil
  return result;
}

// TEST CASES
console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 2 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 3 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 2 }
  ])
);
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 8 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 10 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 1 },
    { name: "Devi", product: "Baju Zoro", amount: 1 },
    { name: "Lisa", product: "Baju Zoro", amount: 1 }
  ])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(
  countProfit([{ name: "Windi", product: "Sepatu Naiki", amount: 5 }])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
// console.log(countProfit([])); //[]
