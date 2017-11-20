let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');

    if(answer === '' || attempt === '') {
      setHiddenfields();
    }

    if(!validateInput(input.value)) {
      return false;
    } else {
      attempt++;
    }

    if(getResults(input)) {
      setMessage( "You Win! :)" );
      showAnswer(true);
      showReplay();
    } else if (!getResults() && attempt >= 10) {
      setMessage( "You Lose! :(" );
      showAnswer(false);
      showReplay();
    } else {
      setMessage("Incorrect, try again.");
    }
}

function setHiddenFields() {
  let randomNum = Math.floor( Math.random() * 9999 ).toString();

  while(randomNum.length < 4) {
    randomNum = "0" + randomNum;
  }
  answer.value = randomNum;
  attempt.value = "0";
}

function setMessage(newMessage) {
  document.getElementById('message').innerHTML = newMessage;
}

function validateInput(input) {
  if(input.length === 4) {
    return true;
  } else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}

function getResults(input) {
  document.getElementById('results').innerHTML = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';

  let numCorrect = 4;

  numCorrect === 4 ? true : false;
}

function showAnswer(input) {
  let codeElem = document.getElementById('code');
  codeElem.innerHTML(answer);
  input ? codeelem.addClass(' success') : codeElem.addClass(' failure');
}

function showReplay() {
  document.getElementById('guessing-div').css({display: "block"});
}
