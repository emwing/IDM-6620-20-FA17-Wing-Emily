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

// click on the h1 "Click Here for a Treat" to activate animations
document.getElementById("jackolantern").onclick = function () {
  changeClass("faceGroup", "glowfill");
  changeClass("cover", "fillopacity");
  changeClass("body", "nighttime");
  changeClass("booH2", "show");
}

// click on the h2 "Click Here for a Trick" to activate ghost animation
document.getElementById("booH2").onclick = function () {
  changeClass("ghost", "haunt");
}
