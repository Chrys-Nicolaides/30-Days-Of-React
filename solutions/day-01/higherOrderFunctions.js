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

console.log(
  products.reduce((total, product) => {
    let testedPrice = parseInt(product.price) ? parseInt(product.price) : 0;
    return total + testedPrice;
  }, 0)
);

let finalPrice = 0;
products.reduce((total, product) => {
  let priceTest = parseInt(product.price) ? parseInt(product.price) : 0;
  return (finalPrice = total + priceTest);
}, 0);

console.log(finalPrice);

// 8.

let firstProductNoPrice = products.find((product) => {
  if (!parseInt(product.price)) return product;
});

console.log(firstProductNoPrice);

// 9.

let firstProduct = products.findIndex((product) => {
  if (!parseInt(product.price)) return product;
});

console.log(firstProduct);

// 10.

let priceChecker = (objectPrices) => {
  return objectPrices.filter((product) => !parseInt(product.price));
};

console.log(priceChecker(products));

// 11.

let priceCheckerFunction = (objectPrices) => {
  return objectPrices.filter((product) => parseInt(product.price));
};

console.log(priceCheckerFunction(products));

// 12. Method definitions

// forEach() calls a provided callback function once for each element in an array in ascending order. It is not invoked for index properties that have been deleted or are uninitialized. callback is invoked with three arguments:

// the value of the element
// the index of the element
// the Array object being traversed

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

// 13.

//  The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

// 14.

// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
