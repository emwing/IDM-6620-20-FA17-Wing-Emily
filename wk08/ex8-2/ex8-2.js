// reusable function for changing classes per video lesson 8.2.5

/* function changeClass():
  -Accepts ID of HTML elementID
  -Accepts CS class name to apply to HTML element
  -Gets reference to HTML element
  -logs on console "changed the class" if successful */

function changeClass(elementID, newClass) {
  var item = document.getElementById(elementID);
  item.setAttribute("class", newClass);
  console.log("changed the class");
}

// click on the h2 to activate animations
// swaps the background color and h2 text to match
document.getElementById("1").onclick = function () {
  changeClass("1", "end violet");
  document.getElementById("1").innerHTML = "<h2>Violet</h2>"
}
document.getElementById("2").onclick = function () {
  changeClass("2", "end indigo");
  document.getElementById("2").innerHTML = "<h2>Indigo</h2>"
}
document.getElementById("3").onclick = function () {
  changeClass("3", "end blue");
  document.getElementById("3").innerHTML = "<h2>Blue</h2>"
}
document.getElementById("4").onclick = function () {
  changeClass("4", "end teal");
  document.getElementById("4").innerHTML = "<h2>Teal</h2>"
}
document.getElementById("5").onclick = function () {
  changeClass("5", "end green");
  document.getElementById("5").innerHTML = "<h2>Green</h2>"
}
document.getElementById("6").onclick = function () {
  changeClass("6", "end yellow");
  document.getElementById("6").innerHTML = "<h2>Yellow</h2>"
}
document.getElementById("7").onclick = function () {
  changeClass("7", "end orange");
  document.getElementById("7").innerHTML = "<h2>Orange</h2>"
}
document.getElementById("8").onclick = function () {
  changeClass("8", "end red");
  document.getElementById("8").innerHTML = "<h2>Red</h2>"
}
