import state from "./state";

const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const result = document.getElementById("result");

incrementButton.addEventListener("click", () => {
  state.count += 1;
  result.innerHTML = state.count;
});
decrementButton.addEventListener("click", () => {
  state.count -= 1;
  result.innerHTML = state.count;
});
