document.addEventListener("DOMContentLoaded", function () {
  // create a function which accesses event info
  function keydownAction(event) {
    // TODO: Complete keydown function
    // Display the key and code
    document.querySelector("#key").textContent = event.key;
    document.querySelector("#code").textContent = event.code;
    // Display the KEYDOWN Event status
    document.querySelector("#status").textContent = "KEYDOWN Event";
  }

  function keyupAction(event) {
    document.querySelector("#key").textContent = event.key;
    document.querySelector("#code").textContent = event.code;
    document.querySelector("#status").textContent = "KEYUP Event";
  }
  // pass functions through to event listeners
  document.addEventListener("keyup", keyupAction);
  // // TODO: Add Event Listener for 'keydown' event
  document.addEventListener("keydown", keydownAction);
});
