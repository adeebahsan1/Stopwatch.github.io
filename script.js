let hr = 0;
let min = 0;
let sec = 0;
let milisec = 0;

let timer = false;

function start() {
  timer = true;
  stopWatch();
}

function stop() {
  timer = false;
}

function reset() {
  timer = false;

  hr = 0;
  min = 0;
  sec = 0;
  milisec = 0;

  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("milisec").innerHTML = "00";
}

function stopWatch() {
  if (timer == true) {
    milisec = milisec + 1;

    if (milisec == 100) {
      sec = sec + 1;
      milisec = 0;
    }

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }

    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    let hrString = hr;
    let minString = min;
    let secString = sec;
    let milisecString = milisec;

    if (hr < 10) {
      hrString = "0" + hrString;
    }

    if (min < 10) {
      minString = "0" + minString;
    }

    if (sec < 10) {
      secString = "0" + secString;
    }

    if (milisec < 10) {
      milisecString = "0" + milisecString;
    }

    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("milisec").innerHTML = milisecString;
    setTimeout("stopWatch()", 10);
  }
}
