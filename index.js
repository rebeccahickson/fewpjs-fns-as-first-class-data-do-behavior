/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

function greet(string) {
  const time = parseInt(string.split(":"));
  if (time < 12) {
    return "Good Morning";
  } else if (time > 17) {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
}

function displayMessage(string) {
  document.querySelector("h1#greeting").innerText = string;
}
