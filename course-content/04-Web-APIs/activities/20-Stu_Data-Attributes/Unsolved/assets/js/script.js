const container = document.querySelector(".container");
const dataNumber = document.querySelectorAll("data-number");
const dataState = document.querySelectorAll("data-state");

container.addEventListener("click", function (event) {
  const element = event.target;
  if (element.hasAttribute("data-number")) {
    const currentState = element.getAttribute("data-state");

    if (currentState === "visible") {
      element.setAttribute("data-state", "hidden");
      element.classList.add("hidden");
    } else {
      element.setAttribute("data-state", "visible");
      element.classList.remove("hidden");
    }
  }
  // TODO: Complete function
});
