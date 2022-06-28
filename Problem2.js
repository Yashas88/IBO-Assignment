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
    obj[i.productName]['quantity'] =
      i.quantity + obj[i.productName]['quantity'];
  } else {
    obj[i.productName] = {
      productName: i.productName,
      quantity: i.quantity,
      description: i.description,
    };
  }
});

console.log(Object.values(obj));
