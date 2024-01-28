"use strict";

var CART = [{
  title: "Milk",
  isBuy: true,
  qty: 2,
  price: 25.50
}, {
  title: 'Beer',
  isBuy: false,
  qty: 1,
  price: 23.20
}, {
  title: 'Bread',
  isBuy: false,
  qty: 10,
  price: 14.50
}];
var editMode = false;
var editID = null;
productList();

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

  if (isNaN(qty)) {
    toast.error('Need to add quantity');
    return;
  }

  if (isNaN(price)) {
    toast.error('Enter price');
    return;
  }

  if (editMode) {
    CART[editID] = {
      title: title,
      qty: qty,
      price: price
    };
    toast.success('Product updated');
    editMode = false;
    editID = null;
  } else {
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

    toast.success('Product successfully added');
  }

  _el('prod_title').value = '';
  _el('prod_qty').valueAsNumber = 1;
  _el('prod_price').value = '';
  productList();
} // const sorted = CART.toSorted((a,b) => {
//     return (a.qty*a.price) - (b.qty*b.price)
// })


function productList() {
  var tbody = '';
  sortList();
  CART.forEach(function (prod, index) {
    var badge = prod.isBuy ? "<span class=\"badge rounded-pill text-bg-success\">Yes</span>" : "<span class=\"badge rounded-pill text-bg-danger\">No</span>";
    tbody += "<tr>\n        <td>".concat(index + 1, "</td>\n        <td>").concat(prod.title, "</td>\n        <td>").concat(badge, "</td>\n        <td>\n        <div class=\"input-group mb-3\">\n            <button class=\"btn btn-outline-secondary\" type=\"button\" onclick=\"changeQty(").concat(index, ",'dec')\">-</button>\n            <input type=\"text\" class=\"form-control\" value=\"").concat(prod.qty, "\">\n            <button class=\"btn btn-outline-secondary\" type=\"button\" onclick=\"changeQty(").concat(index, ",'inc')\">+</button>\n        </div>\n      </td>\n        <td>").concat(prod.price.toFixed(2), "</td>\n        <td>").concat((prod.qty * prod.price).toFixed(2), "</td>\n        <td>");

    if (!prod.isBuy) {
      tbody += "<button type='button' class='btn btn-info btn-sm' onclick='editProd(".concat(index, ")'>Edit</button>\n            <button type='button' class='btn btn-primary btn-sm' onclick='buyProd(").concat(index, ", \"").concat(prod.title, "\")'>Buy</button>\n            <button type='button' class='btn btn-danger btn-sm' onclick='deleteProd(").concat(index, ",\"").concat(prod.title, "\")'>Remove</button>");
    }

    tbody += "</td>\n        </tr>";
  });
  _el('cart_tbody').innerHTML = tbody;
  var disc = calcDisc();
  _el('cart_total').innerHTML = (sumProduct() - disc).toFixed(2);
  _el('cart_disc').innerHTML = disc.toFixed(2);
}

function buyProd(index, title) {
  if (confirm("Do you want to buy ".concat(title, "?"))) {
    CART[index].isBuy = true;
    productList();
    toast.success('Product bought');
  }
}

function deleteProd(index, title) {
  if (confirm("Do you want to delete ".concat(title, "?"))) {
    CART.splice(index, 1);
    productList();
    toast.success('Product was deleted');
  }
}

function editProd(index) {
  var prod = CART[index];
  editMode = true;
  editID = index;
  _el('prod_title').value = prod.title;
  _el('prod_qty').valueAsNumber = prod.qty;
  _el('prod_price').value = prod.price;
}

function sumProduct() {
  return CART.reduce(function (accum, prod) {
    return accum + prod.qty * prod.price;
  }, 0);
}

function changeQty(index, action) {
  var qtyFirst = CART[index].qty;
  CART[index].isBuy = false;

  if (action === 'inc') {
    CART[index].qty++;
  } else if (action === 'dec') {
    if (qtyFirst === 1) {
      deleteProd(index, CART[index].title);
    } else {
      CART[index].qty--;
    }
  }

  productList();
}

function applyDisc() {
  var amount = _el('disc_amount').valueAsNumber;

  if (isNaN(amount)) {
    toast.error('Enter discount value');
    return;
  }

  productList();
}

function calcDisc() {
  var type = _el('disc_type').value;

  var amount = _el('disc_amount').valueAsNumber || 0;
  var sum = sumProduct();

  if (type === 'percent') {
    return sum * amount / 100;
  }

  if (type === 'fixed') {
    return amount;
  }

  return 0;
}

function sortList() {
  var sort = _el('sorting').value; // let sortFn = ()=>{};
  // if (sort === 'subtotalAsc'){
  //     sortFn = (a,b)=> {
  //         return (a.qty * a.price) - (b.qty * b.price)
  //     }
  // }
  // if (sort === 'subtotalDesc'){
  //     sortFn = (a,b)=> {
  //         return (b.qty * b.price) - (a.qty * a.price)
  //     }
  // }
  // return CART.toSorted((a,b) => sortFn(a,b));


  var sortFn = {
    subtotalAsc: function subtotalAsc(a, b) {
      return a.qty * a.price - b.qty * b.price;
    },
    subtotalDesc: function subtotalDesc(a, b) {
      return b.qty * b.price - a.qty * a.price;
    },
    qtyAsc: function qtyAsc(a, b) {
      return a.qty - b.qty;
    },
    qtyDesc: function qtyDesc(a, b) {
      return b.qty - a.qty;
    },
    title: function title(a, b) {
      return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
    }
  };
  CART.sort(function (a, b) {
    return sortFn[sort](a, b);
  });
}