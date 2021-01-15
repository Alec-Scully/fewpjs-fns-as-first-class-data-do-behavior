/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const timeCheck = parseInt(time.split(":"))
  // debugger
  if (timeCheck < 12) {
    return "Good Morning"
  } else if ( 12 < timeCheck && timeCheck < 17) {
    return "Good Afternoon"
  } else if (timeCheck > 17) {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  // debugger
  document.querySelector("#greeting").innerText = string

}