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
    userNamePrompt,
    favoriteSpeechPrompt,
    // variables for newest/oldest speeches
    newestSpeech = speechesArray[0].year,
    oldestSpeech = speechesArray[0].year,
    i = 0; // new variable added, and end of variable list

// Loop through speeches to display the author
while (i < speechesArray.length) {
  console.log("This speech is written by " + speechesArray[i].author);
  i++;
} // closes while loop

// loop through speech year to determine newest/oldest
for (i = 0; i < speechesArray.length; i++) {
  if (speechesArray[i].year >= newestSpeech) {
    newestSpeech = speechesArray[i].year;
  } else if (speechesArray[i].year <= oldestSpeech) {
    oldestSpeech = speechesArray[i].year;
  } // closes if and else if
} //closes for loop

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  favoriteSpeechPrompt = window.prompt('Which speech author is your favorite?');

  /* switch(favoriteSpeechPrompt){
    case 'Churchill':
      console.log(speechesArray[0].author + ' was ' + speechesArray[0].authorAge + ' during this speech.');
      break;
    case 'Ghandi':
      console.log(speechesArray[1].author + ' was ' + speechesArray[1].authorAge + ' during this speech.');
      break;
    case 'Demosthenes':
      console.log(speechesArray[2].author + ' was ' + speechesArray[2].authorAge + ' during this speech.');
      break;
    default:
      console.log('Did you spell that name correctly?');
      break;
  } */

  // for loop through speeches to find match
  for(var i = 0; i < speechesArray.length; i++) {
    if (favoriteSpeechPrompt === speechesArray[i].author) {
      console.log(speechesArray[i].author + ' was ' + speechesArray[i].authorAge + ' during this speech.');
      break;
    } // closes the if
  } // closes the for loop
});  // closes the function

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

  if(speechesArray[0].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  /* if(speechesArray[0].year < speechesArray[1].year && speechesArray[0].year < speechesArray[2].year){
    console.log('This is the oldest speech on the page.');
  }else if(speechesArray[0].year > speechesArray[1].year && speechesArray[0].year > speechesArray[2].year){
    console.log('This is the most recent speech on the page.');
  } */

  // check against newest/oldest speech year
  if (speechesArray[0].year >= newestSpeech) {
    console.log('This is the most recent speech on the page.');
  } else if (speechesArray[0].year <= oldestSpeech) {
    console.log('This is the oldest speech on the page.');
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[1].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  /* if(speechesArray[1].year < speechesArray[0].year && speechesArray[1].year < speechesArray[2].year){
    console.log('This is the oldest speech on the page.');
  }else if(speechesArray[1].year > speechesArray[0].year && speechesArray[1].year > speechesArray[2].year){
    console.log('This is the most recent speech on the page.');
  } */

  // check against newest/oldest speech year
  if (speechesArray[1].year >= newestSpeech) {
    console.log('This is the most recent speech on the page.');
  } else if (speechesArray[1].year <= oldestSpeech) {
    console.log('This is the oldest speech on the page.');
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

  if(speechesArray[2].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  /* if(speechesArray[2].year < speechesArray[0].year && speechesArray[2].year < speechesArray[1].year){
    console.log('This is the oldest speech on the page.');
  }else if(speechesArray[2].year > speechesArray[0].year && speechesArray[2].year > speechesArray[1].year){
    console.log('This is the most recent speech on the page.');
  } */

  // check against newest/oldest speech year
  if (speechesArray[2].year >= newestSpeech) {
    console.log('This is the most recent speech on the page.');
  } else if (speechesArray[2].year <= oldestSpeech) {
    console.log('This is the oldest speech on the page.');
  }
});

/* userNamePrompt = window.prompt('Hello, what is your name?');

if(typeof userNamePrompt === 'string' && userNamePrompt !== ''){
  console.log('Hi ' + userNamePrompt + '!');
}else{
  console.log('Ok, I\'ll just call you User.');
  userNamePrompt = 'User';
} */
