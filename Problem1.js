const listOfProducts = [
  {
    productName: 'TV',
    quantity: 10,
    description: 'television',
  },
  {
    productName: 'AC',
    quantity: 5,
    description: 'air conditioner',
  },
  {
    productName: 'TV',
    quantity: 10,
    description: 'television',
  },
  {
    productName: 'AC',
    quantity: 5,
    description: 'air conditioner',
  },
  {
    productName: 'FAN',
    quantity: 10,
    description: 'Celling fan',
  },
];

let obj = {};

listOfProducts.map((i) => {
  if (obj.hasOwnProperty(i.productName)) {
    obj[i.productName] = 1 + obj[i.productName];
  } else {
    obj[i.productName] = 1;
  }
});

console.log(obj);
