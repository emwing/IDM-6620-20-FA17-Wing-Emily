// Object Constructor for speeches
function Speech(author, year, bce) {
  this.author = author;
  this.year = year;
  this.bce = bce;
}
var speech1 = new Speech ("Winston Churchill", 1940, false);
var speech2 = new Speech ("Ghandi", 1942, false);
var speech3 = new Speech ("Demosthenes", 342, true);

// Array
var speechArray = [
  speech1, speech2, speech3
];

// calculation and console log
var speechYearDifference = speech2.year - speech1.year;
window.onload = function() {
  console.log(
    "Ghandi\'s speech and Churchill\'s speech are "
    + speechYearDifference +
    " years apart."
  )
};

// updated to add console log array length
document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  console.log(
    "There are "
    + speechArray.length +
    " speeches on the page."
  );
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log(
    "This speech was written by "
    + speech1.author +
    " in "
    + speech1.year +
    ". It is "
    + speech1.bce +
    " that this year is B.C.E."
  );
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log(
    "This speech was written by "
    + speech2.author +
    " in "
    + speech2.year +
    ". It is "
    + speech2.bce +
    " that this year is B.C.E."
  );
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log(
    "This speech was written by "
    + speech3.author +
    " in "
    + speech3.year +
    ". It is "
    + speech3.bce +
    " that this year is B.C.E."
  );
});
