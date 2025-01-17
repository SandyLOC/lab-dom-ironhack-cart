// ITERATION 1

function updateSubtotal(product) {
  //alert('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subtotal = price.innerHTML * quantity.value;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0;
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
  // ITERATION 3
  //... your code goes here
    total += updateSubtotal(products[i]);
  }
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let removeBtn = document.parentElement(target);
  console.log(removeBtn)
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  //... your code goes here
  const removeBtn = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
}
});