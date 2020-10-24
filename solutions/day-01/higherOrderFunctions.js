// Exercises Level 1

const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 1.

products.forEach(({ product, price }) => {
  console.log(product, price);
});

// 2.

products.forEach(({ product, price }) => {
  if (price == " " || price == "") {
    console.log(`The price of the ${product} is unknown.`);
  } else {
    console.log(`The price of the ${product} is ${price} Euros.`);
  }
});

// 3.

let totalProductPrice = 0;
products.forEach(({ price }) => {
  if (parseInt(price)) {
    totalProductPrice += price;
  }
});

console.log(`Total Price: ${totalProductPrice} Euros`);

// 4.

let productPrices = [];
products.map(({ price }) => {
  if (parseInt(price)) {
    console.log(price);
    productPrices.push(price);
  }
});

console.log(productPrices);

// 5.

let productFilter = (objectPrices) => {
  return objectPrices.filter((product) => product.price > 0);
};

console.log(productFilter(products));

// 6.

let productsTotal = products
  .filter((product) => parseInt(product.price) == product.price)
  .map((product) => product.price)
  .reduce((price, total) => total + price);

console.log(`Total is: ${productsTotal} Euros`);

// 7.

// 8.

// 9.

// 10.

let priceChecker = (objectPrices) => {
  return objectPrices.filter((product) => !parseInt(product.price));
};

console.log(priceChecker(products));
