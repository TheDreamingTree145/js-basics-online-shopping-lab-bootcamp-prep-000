var cart;

function setCart(newCart) {
  cart = newCart;
}

function viewCart() {
  console.log("Hello")
}
function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
