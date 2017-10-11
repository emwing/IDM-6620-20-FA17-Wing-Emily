//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;



document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  // received error when trying to remove previous donation message???
  // document.getElementById('SideNav').removeChild(newDonate);

  // create the html elements for each piece of info in the div
  var newDonate = document.createElement("h3");

  var donation = window.prompt('How much would you like to donate?');

  // create textNodes for new elements
  if(donation < 100) {
    var newDonateText = document.createTextNode("Thank you for your donation of $" + donation + "!");
  } else if(donation >= 100) {
    var newDonateText = document.createTextNode("Thank you for your very generous donation!");
  } else {
    var newDonateText = document.createTextNode("Sorry, I don\'t understand the donation amount.");
  }

  // add textNodes to elements
  newDonate.appendChild(newDonateText);

  // insert into html document
  document.getElementById("SideNav").appendChild(newDonate);

  // set attributes
  var articleClass = document.getElementsByTagName("article");

  for (i = 0; i < articleClass.length; i++) {
    if (donation >= 100) {
      newDonate.setAttribute("style", "color: red;"); // color the h3 in the SideNav
      articleClass[i].className = ("generous-donation"); // color the h2s in the articles
    }
  }
});


// For the ConsoleDisplay appends, I chose to not use innerHTML since it isn't as specific.

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  // empty the div
  document.getElementById('ConsoleDisplay').innerHTML = "";

  // create the html elements for each piece of info in the div
  var newParaInfo = document.createElement("p");
  var newParaBCE = document.createElement("p");
  var newParaYear = document.createElement("p");

  // create textNodes for new elements
  var newParaInfoText = document.createTextNode('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year + '.');

  if(speechesArray[0].yearIsBCE === true){
    var newParaBCEText = document.createTextNode('This speech took place before the common era.');
  }else{
    var newParaBCEText = document.createTextNode('This speech took place during the common era.');
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    var newParaYearText = document.createTextNode('This is the oldest speech on the page.');
  }
  if(speechesArray[0].year === newest){
    var newParaYearText = document.createTextNode('This is the most recent speech on the page.');
  }
  if(speechesArray[0].year !== newest && speechesArray[0].year !== oldest){
    var newParaYearText = document.createTextNode('');
  }

  // add textNodes to elements
  newParaInfo.appendChild(newParaInfoText);
  newParaBCE.appendChild(newParaBCEText);
  newParaYear.appendChild(newParaYearText);

  // insert into html document
  document.getElementById("ConsoleDisplay").appendChild(newParaInfo);
  document.getElementById("ConsoleDisplay").appendChild(newParaBCE);
  document.getElementById("ConsoleDisplay").appendChild(newParaYear);
});



document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  // empty the div
  document.getElementById('ConsoleDisplay').innerHTML = "";

  // create the html elements for each piece of info in the div
  var newParaInfo = document.createElement("p");
  var newParaBCE = document.createElement("p");
  var newParaYear = document.createElement("p");

  // create textNodes for new elements
  var newParaInfoText = document.createTextNode('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year + '.');

  if(speechesArray[1].yearIsBCE === true){
    var newParaBCEText = document.createTextNode('This speech took place before the common era.');
  }else{
    var newParaBCEText = document.createTextNode('This speech took place during the common era.');
  }

  var oldest = speechesArray[1].year,
      newest = speechesArray[1].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
    var newParaYearText = document.createTextNode('This is the oldest speech on the page.');
  }
  if(speechesArray[1].year === newest){
    var newParaYearText = document.createTextNode('This is the most recent speech on the page.');
  }
  if(speechesArray[1].year !== newest && speechesArray[1].year !== oldest){
    var newParaYearText = document.createTextNode('');
  }

  // add textNodes to elements
  newParaInfo.appendChild(newParaInfoText);
  newParaBCE.appendChild(newParaBCEText);
  newParaYear.appendChild(newParaYearText);

  // insert into html document
  document.getElementById("ConsoleDisplay").appendChild(newParaInfo);
  document.getElementById("ConsoleDisplay").appendChild(newParaBCE);
  document.getElementById("ConsoleDisplay").appendChild(newParaYear);
});



document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  // empty the div
  document.getElementById('ConsoleDisplay').innerHTML = "";

  // create the html elements for each piece of info in the div
  var newParaInfo = document.createElement("p");
  var newParaBCE = document.createElement("p");
  var newParaYear = document.createElement("p");

  // create textNodes for new elements
  var newParaInfoText = document.createTextNode('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year + '.');

  if(speechesArray[2].yearIsBCE === true){
    var newParaBCEText = document.createTextNode('This speech took place before the common era.');
  }else{
    var newParaBCEText = document.createTextNode('This speech took place during the common era.');
  }

  var oldest = speechesArray[2].year,
      newest = speechesArray[2].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    var newParaYearText = document.createTextNode('This is the oldest speech on the page.');
  }
  if(speechesArray[2].year === newest){
    var newParaYearText = document.createTextNode('This is the most recent speech on the page.');
  }
  if(speechesArray[2].year !== newest && speechesArray[2].year !== oldest){
    var newParaYearText = document.createTextNode('');
  }

  // add textNodes to elements
  newParaInfo.appendChild(newParaInfoText);
  newParaBCE.appendChild(newParaBCEText);
  newParaYear.appendChild(newParaYearText);

  // insert into html document
  document.getElementById("ConsoleDisplay").appendChild(newParaInfo);
  document.getElementById("ConsoleDisplay").appendChild(newParaBCE);
  document.getElementById("ConsoleDisplay").appendChild(newParaYear);
});
