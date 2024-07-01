// Speed Detector 

const ps = require("prompt-sync");
const prompt = ps({sigint: true});
const speed = prompt(("What is your speed? "));

function speedOperator() {
  if (speed < 70) {
    return "OK";
  }
  if (speed >= 70) {
    let greatSpeed = speed - 70;
    let rem = greatSpeed / 5;
    if (rem < 12) {
      return `Points: ${rem}`;
    } else {
      return `License suspended`;
    }
  }
}

console.log(speedOperator());
