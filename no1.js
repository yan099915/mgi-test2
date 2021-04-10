// array of object test no.1
const produk = [
  {
    id_produk: 1,
    nama_product: "Huawei P30 pro",
  },
  {
    id_produk: 2,
    nama_product: "Huawei Nova 5T",
  },
];

const stock_produk = [
  {
    id_produk: 1,
    qty: 15,
  },
  {
    id_produk: 1,
    qty: 6,
  },
  {
    id_produk: 2,
    qty: 4,
  },
  {
    id_produk: 2,
    qty: 18,
  },
];

let total = [];
stock_produk.forEach(function (a) {
  if (!this[a.id_produk]) {
    this[a.id_produk] = { id_produk: a.id_produk, qty: 0 };
    total.push(this[a.id_produk]);
  }
  this[a.id_produk].qty += a.qty;
}, Object.create(null));

function mergeArrays(arrays, prop) {
  const result = {};

  arrays.forEach((arr) => {
    arr.forEach((item) => {
      result[item[prop]] = Object.assign({}, result[item[prop]], item);
    });
  });

  return Object.values(result);
}

console.log(mergeArrays([produk, total], "id_produk"));
