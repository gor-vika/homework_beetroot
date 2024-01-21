"use strict";

var CART = [];

function _el(id) {
  return document.getElementById(id);
}

function addToCart() {
  var title = _el('prod_title').value;

  var qty = _el('prod_qty').valueAsNumber;

  var price = _el('prod_price').valueAsNumber;

  if (title === "") {
    toast.error('Enter title');
    return;
  }

  if (qty <= 0) {
    toast.error('Incorrerct quantity');
    return;
  }

  if (isNaN(price)) {
    toast.error('Enter price');
    return;
  }

  var prodIndex = CART.findIndex(function (prod) {
    return prod.title === title;
  });

  if (prodIndex === -1) {
    CART.push({
      title: title,
      qty: qty,
      price: price
    });
  } else {
    CART[prodIndex].qty += qty;
  }

  _el('prod_title').value = '';
  _el('prod_qty').valueAsNumber = 1;
  _el('prod_price').value = '';
  toast.success('Product successfully added');
  productList();
}

function productList() {
  var tbody = '';
  CART.forEach(function (prod, index) {
    tbody += "<tr>\n        <td>".concat(index + 1, "</td>\n        <td>").concat(prod.title, "</td>\n        <td>").concat(prod.qty, "</td>\n        <td>").concat(prod.price.toFixed(2), "</td>\n        <td>").concat((prod.qty * prod.price).toFixed(2), "</td>\n        </tr>");
  });
  _el('cart_tbody').innerHTML = tbody;
}