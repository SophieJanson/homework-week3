// TODO:
// var products = []
var products = [
  { referenceNumber: 1231, name: "Super Lite Mat", category: "mats", price: 10 },
  { referenceNumber: 1232, name: "Power Mat", category: "mats", price: 20 },
  { referenceNumber: 1233, name: "Block", category: "attributes", price: 30 },
  { referenceNumber: 1234, name: "Meditation cushion", category: "mats", price: 30 },
  { referenceNumber: 1235, name: "The best T-shirt", category: "clothing", price: 200 },
  { referenceNumber: 1236, name: "The cutest yoga pants", category: "clothing", price: 300 },
  { referenceNumber: 1237, name: "Bring Yoga To Life", category: "books", price: 30 },
  { referenceNumber: 1238, name: "Light On Yoga", category: "misc", price: 10 }
]
// Declare `shoppingCart`, something where you will be storing all products that the user buys.
let shoppingCart = [];
let totalPrice = 0;

// Declare `products`, the different that you will be selling under each of the departments.
var shopFromStore = function (referenceNumber) {
  // Add the product with the matching referenceNumber to the shoppingCart

  var shop = function() {
    let price = products.find(product => product.referenceNumber === referenceNumber).price;
    let newProduct = {referenceNumber: referenceNumber, price: price};
    shoppingCart.push(newProduct);
    totalPrice += parseInt(newProduct.price);
    displayTotalPrice(totalPrice);
    displayProductsFromShoppingCart(newProduct);
  }

  shop();
  // calculate the total price of your cart, and use it:
}
  // Ask the user if they want to continue shopping,
  // if yes, call this function again
  // if no, print the goodbye message
var displayProductsFromShoppingCart = function(newProduct) {
  let product = newProduct;
  var referenceNumberElement = document.createElement('span');
  referenceNumberElement.className  = 'referenceNumber';
  referenceNumberElement.innerText = product.referenceNumber;

  var priceElement = document.createElement('span');
  priceElement.className  = 'price';
  priceElement.innerText = product.price;

  var productElement = document.createElement('div');
  productElement.className = 'product';
  productElement.setAttribute('data-ref-number', product.referenceNumber);

  productElement.appendChild(referenceNumberElement);
  productElement.appendChild(priceElement);

  // Hang that div on the page
  document.getElementById('shopping-cart').appendChild(productElement);
  // use the printProductsOnScreen function for inspiration
};

//
// do not change the code below (but feel free to change it if your WHOLE project works!)
//

var displayTotalPrice = function (amount = 0) {
  document.getElementById('total-price').innerText = amount;
};

var printProductsOnScreen = function () {
  for(var product of products){

    // create elements for refNr, name, price, with a class and the proper innerText
    var referenceNumberElement = document.createElement('span');
    referenceNumberElement.className  = 'referenceNumber';
    referenceNumberElement.innerText = product.referenceNumber;

    var nameElement = document.createElement('span');
    nameElement.className  = 'name';
    nameElement.innerText = product.name;

    var categoryElement = document.createElement('span');
    categoryElement.className  = 'category';
    categoryElement.innerText = product.category;

    var priceElement = document.createElement('span');
    priceElement.className  = 'price';
    priceElement.innerText = product.price;


    // Wrap our just created elements in a div
    var productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.setAttribute('data-ref-number', product.referenceNumber);

    productElement.appendChild(referenceNumberElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(categoryElement);
    productElement.appendChild(priceElement);

    // Hang that div on the page
    document.getElementById('product-overview').appendChild(productElement);
  }
};

var createProductEventListeners = function() {
  let products = document.querySelectorAll('div[data-ref-number]');
  console.log(products);
  for(var product of products) {
    product.addEventListener("click", function(){
      shopFromStore(parseInt(this.dataset.refNumber));
    });
  }
};

var runApp = function () {
  printProductsOnScreen();
  createProductEventListeners();
};

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    runApp();
  }
};
