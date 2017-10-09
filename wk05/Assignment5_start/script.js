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
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];

// on page load
var user = window.prompt("What is your name?");

  if(typeof user === "string" && user.length != 0) {
    console.log("Hi " + user + "!")
  } else {
    console.log("Ok, I\'ll just call you User.");
    user = "User";
  }


document.getElementById('BtnDonate').addEventListener('click', function(){
  // code added for favorite author and console response
  var favAuthor = window.prompt("Who is your favorite author?");

    switch (favAuthor) {
      case "Churchill" :
      window.alert(
        speechesArray[0].author +
        " was " +
        speechesArray[0].authorAge +
        " during this speech.");
      break;

      case "Ghandi" :
      window.alert(
        speechesArray[1].author +
        " was " +
        speechesArray[1].authorAge +
        " during this speech.");
      break;

      case "Demosthenes" :
      window.alert(
        speechesArray[2].author +
        " was " +
        speechesArray[2].authorAge +
        " during this speech.");
      break;

      default :
      window.alert(
        "Sorry, that author isn\'t listed here."
      );
      break;
    }
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  // speech info
  console.log(
    "This speech was written by " +
    speechesArray[0].author +
    " in " +
    speechesArray[0].year +
    ".");

    // speech bce check
    if(speechesArray[0].yearIsBCE === true) {
      console.log(
        "This speech took place before the common era."
      );
    } else {
      console.log("This speech took place during the common era.");
    }

    // speech age comparison
    if(speechesArray[0].year < speechesArray[1].year && speechesArray[0].year < speechesArray[2].year) {
      window.alert("This is the oldest speech on the page.")
    } else if(speechesArray[0].year > speechesArray[1].year && speechesArray[2].year) {
      window.alert("This is the most recent speech on the page.")
    } else {
      window.alert("This is speech occured between the time of the other speeches on this page.")
    }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  // speech info
  console.log(
    "This speech was written by " +
    speechesArray[1].author +
    " in " +
    speechesArray[1].year +
    ".");

    // speech bce check
    if(speechesArray[1].yearIsBCE === true) {
      console.log(
        "This speech took place before the common era."
      );
    } else {
      console.log("This speech took place during the common era.");
    }

    // speech age comparison
    if(speechesArray[1].year < speechesArray[0].year && speechesArray[1].year < speechesArray[2].year) {
      window.alert("This is the oldest speech on the page.")
    } else if(speechesArray[1].year > speechesArray[0].year && speechesArray[2].year) {
      window.alert("This is the most recent speech on the page.")
    } else {
      window.alert("This is speech occured between the time of the other speeches on this page.")
    }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  // speech info
  console.log(
    "This speech was written by " +
    speechesArray[2].author +
    " in " +
    speechesArray[2].year +
    ".");

    // speech bce check
    if(speechesArray[2].yearIsBCE === true) {
      console.log(
        "This speech took place before the common era."
      );
    } else {
      console.log("This speech took place during the common era.");
    }

    // speech age comparison
    if(speechesArray[2].year < speechesArray[0].year && speechesArray[2].year < speechesArray[1].year) {
      window.alert("This is the oldest speech on the page.")
    } else if(speechesArray[2].year > speechesArray[0].year && speechesArray[1].year) {
      window.alert("This is the most recent speech on the page.")
    } else {
      window.alert("This is speech occured between the time of the other speeches on this page.")
    }
});
