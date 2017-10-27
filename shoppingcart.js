var currentSize = 's';
var currentType = 'bed';

var sizeInfo = {
  s: {
    dimensions: '16"x16"',
    price: 19.99
  },
  m: {
    dimensions: '18"x18"',
    price: 29.99
  },
  l: {
    dimensions: '20"x20"',
    price: 49.99
  },
  xl: {
    dimensions: '24"x24"',
    price: 999.99
  },
};

var typeInfo = {
  bed: {
    name: "Bed Pillow"
  },
  couch: {
    name: "Couch Pillow"
  },
  floor: {
    name: "Floor Pillow"
  },
  round: {
    name: "Round Pillow"
  },
};

function main() {
  redraw();
}

function redraw() {
  var currentCart = JSON.parse(localStorage.getItem('cart'));
  console.log(currentCart);
  var totalCost = 0;

  currentCart.forEach(function(item, i) {
    var size = sizeInfo[item.size];
    var type = typeInfo[item.type];
    var cartItem = $('#product-details').clone();
    cartItem.removeClass('template');
    cartItem.find('.cart-type').html(type.name);
    cartItem.find('.cart-size').html(size.dimensions);
    cartItem.find('.cart-price').html('$' + size.price);
    cartItem.find('.delete').data('index', i);
    $('#shopping-cart').append(cartItem);
    totalCost += size.price;
  });

  $('.cart-subtotal').html('$' + (Math.round(totalCost * 100, 2) / 100));
  $('.cart-items').html(currentCart.length);
  $('.template').remove();

  $('.delete').click(function() {
    var i = $(this).data('index');
    var currentCart = JSON.parse(localStorage.getItem('cart'));
    currentCart.splice(i, 1);
    localStorage.setItem('cart', JSON.stringify(currentCart));
    location.reload();
  });
}

main();
