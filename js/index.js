const openCart = document.querySelector('#cart');
const closeCart = document.querySelector('#close-cart');
const modalCart = document.querySelector('#modal-cart');

openCart.addEventListener('click', () => {
  modalCart.classList.add('modal-active');
})

closeCart.addEventListener('click', () => {
  modalCart.classList.remove('modal-active');
  modalCart.classList.add('modal-cart');
})