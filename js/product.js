const inputQuantity = document.querySelector("#quantity");
const inputSubstract = document.querySelector("#substract");
const inputAdd = document.querySelector("#add");

let quantity = inputSubstract.addEventListener("click", () => {
  if (parseInt(inputQuantity.value) === 0) return;
  inputQuantity.value--;
});

inputAdd.addEventListener("click", () => {
  inputQuantity.value++;
});
