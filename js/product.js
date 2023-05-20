const inputQuantity = document.querySelector("#quantity");
const inputSubstract = document.querySelector("#substract");
const inputAdd = document.querySelector("#add");

let quantity = inputSubstract.addEventListener("click", () => {
  inputQuantity.value--;
});

inputAdd.addEventListener("click", () => {
  inputQuantity.value++;
});
