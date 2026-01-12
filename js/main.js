// Count Input Characters And Fill Borders Application:

let input = document.querySelector("input");
let rest = document.querySelector(".rest");
let progressBar = document.querySelector(".progress");

if (input.textContent === "") {
  rest.textContent = input.maxLength;
  // rest.style.color = "#ff5722";
}

input.addEventListener("input", () => {
  rest.textContent = input.maxLength - input.value.length;
  rest.style.color = "var(--main-color)";
  if (rest.textContent === "0") {
    rest.style.color = "#ff5722";
  }
  progressBar.style.width = `${Math.ceil(
    (input.value.length / input.maxLength) * 100
  )}%`;
});
