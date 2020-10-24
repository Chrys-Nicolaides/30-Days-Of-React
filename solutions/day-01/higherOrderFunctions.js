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

let filteredProducts = [];
products.filter(({ price }) => {
  if (parseInt(price)) {
    filteredProducts.push(price);
  }
});
console.log(filteredProducts);
