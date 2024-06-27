//  Step 1: do the following between the --- comments below
//  after 5 seconds, execute the fiveSeconds function
//  after 10 seconds, execute the tenSeconds function
//  after 15 seconds, execute the timeUp function

// ---------------------
setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 15);
// ---------------------

// Step 2:
// Fill in the blanks to these functions.
function fiveSeconds() {
  let element = document.getElementById("time-left");
  let newH2 = document.createElement("h2");
  let text = document.createTextNode("About 10 Seconds Left!");

  newH2.appendChild(text);
  element.appendChild(newH2);

  console.log("10 seconds left");
  // in the element with an id of `time-left` add an h2 saying About 10 Seconds Left!

  // console log 10 seconds left
}

function tenSeconds() {
  // in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
  let element = document.getElementById("time-left");
  let newH2 = document.createElement("h2");
  let text = document.createTextNode("About 5 Seconds Left!");

  newH2.appendChild(text);
  element.appendChild(newH2);
  // console log 5 seconds left
  console.log("5 seconds left");
}

function timeUp() {
  // in the element with an id of `time-left` add an h2 saying Time's Up!
  let element = document.getElementById("time-left");
  let newH2 = document.createElement("h2");
  let text = document.createTextNode("Time's Up!");

  newH2.appendChild(text);
  element.appendChild(newH2);
  // console log done
  console.log("Time's Up!");
}
