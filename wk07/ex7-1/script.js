// create new elements: heading and paragraph
var newH2 = document.createElement("h2");
var newPara = document.createElement("p");

// create textNodes for new elements
var newH2text = document.createTextNode("Hello.");
var newParaText = document.createTextNode ("My name is Suki. I\'m a 6-year-old shiba inu who loves to sleep on my humans\' beds, go for long walks, and eat white rice. Don\'t let my cuteness fool you! I\'m super independent and stubborn, and given the chance, I\'ll go and do my own thing rather than listen to my\u00A0human.");

// add textNodes to elements
newH2.appendChild(newH2text);
newPara.appendChild(newParaText);

// insert into html document
document.getElementById("firstDiv").appendChild(newH2);
document.getElementById("firstDiv").appendChild(newPara);

// center the js-added paragraph
newPara.setAttribute("align", "center");
