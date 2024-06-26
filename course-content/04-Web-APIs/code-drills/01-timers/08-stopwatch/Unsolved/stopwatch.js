//  Interval Exercise (follow the instructions below).

// This code will run as soon as the page loads.
// window.onload vs document.ready
//The $(document).ready() is a jQuery event which occurs when the HTML document has been fully loaded, while the window.onload event occurs later, when everything including images on the page loaded. Also window.onload is a pure javascript event in the DOM, while the $(document).ready() event is a method in jQuery.
window.onload = function () {
  //  Click events are done for us:
  document.getElementById("lap").addEventListener("click", stopwatch.recordLap);
  document.getElementById("stop").addEventListener("click", stopwatch.stop);
  document.getElementById("reset").addEventListener("click", stopwatch.reset);
  document.getElementById("start").addEventListener("click", stopwatch.start);
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

//  Our stopwatch object.
var stopwatch = {
  time: 0,
  lap: 1,

  reset: function () {
    stopwatch.time = 0;
    stopwatch.lap = 1;

    //  TODO: Change the "display" div to "00:00."
    let getDisplay = document.getElementById("display");
    getDisplay.innerHTML = "00:00";
    document.getElementById("laps").innerText = "";
  },

  start: function () {
    //  TODO: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(stopwatch.count, 1000);
      clockRunning = true;
    }
  },
  stop: function () {
    //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },

  recordLap: function () {
    //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
    let lapTime = stopwatch.time;
    //        and save the result in a variable.
    let lapTimeConverter = stopwatch.timeConverter(lapTime);
    //  TODO: Add the current lap and time to the "laps" div.
    let lapDiv = document.getElementById("laps");
    lapDiv.innerHTML += `Lap ${stopwatch.lap} : ${lapTimeConverter}<br>`;
    //  TODO: Increment lap by 1. Remember, we can't use "this" here.
    stopwatch.lap++;
  },
  count: function () {
    //  TODO: increment time by 1, remember we cant use "this" here.
    stopwatch.time++;
    //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
    let currentTime = stopwatch.time;
    let currentTimeConverter = stopwatch.timeConverter(currentTime);
    //        and save the result in a variable.
    //  TODO: Use the variable you just created to show the converted time in the "display" div.
    let displayDiv = document.getElementById("display");
    displayDiv.textContent = currentTimeConverter;
  },

  //  THIS FUNCTION IS DONE FOR US!
  //  We do not need to touch it.

  timeConverter: function (t) {
    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - minutes * 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  },
};
