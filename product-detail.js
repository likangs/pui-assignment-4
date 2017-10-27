var currentSize = 's';
var currentType = 'bed';

var sizeInfo = {
  s: {
    dimensions: '16"x16"',
    price: '$19.99'
  },
  m: {
    dimensions: '18"x18"',
    price: '$29.99'
  },
  l: {
    dimensions: '20"x20"',
    price: '$49.99'
  },
  xl: {
    dimensions: '24"x24"',
    price: '$999.99'
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
  var currentCart = localStorage.getItem('cart');
  var currentWishList = localStorage.getItem('wishlist');

  if (currentCart == null) {
    localStorage.setItem('cart', JSON.stringify([]));
  }

  if (currentWishList == null) {
    localStorage.setItem('wishlist', JSON.stringify([]));
  }

  $('#size-select').change(function() {
    currentSize = $(this).val();
    redraw();
  });

  $('#type-select').change(function() {
    currentType = $(this).val();
    redraw();
  });

  $('#add-to-cart').click(function() {
    var currentCart = JSON.parse(localStorage.getItem('cart'));
    currentCart.push({
      size: currentSize,
      type: currentType
    });
    localStorage.setItem('cart', JSON.stringify(currentCart));
    location.reload();
  });

  $('#wishlist').click(function() {
    var currentWishList = JSON.parse(localStorage.getItem('wishlist'));
    currentWishList.push({
      size: currentSize,
      type: currentType
    });
    localStorage.setItem('wishlist', JSON.stringify(currentWishList));
  });
}

function redraw() {
  var size = sizeInfo[currentSize];
  var type = typeInfo[currentType];
  $('#opt-size').html(size.dimensions);
  $('#opt-price').html(size.price);
  $('#opt-type').html(type.name);
}

main();
