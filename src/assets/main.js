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
      attempt.value++;
    }

    if(getResults(input)) {
      setMessage( "You Win! :)" );
      showAnswer(true);
      showReplay();
    } else if (!getResults(input) && attempt >= 10) {
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
  let numCorrect = 0;
  let resultsDiv = document.getElementById('results');
  let inner = '<div class="row"><span class="col-md-6">';
  let ans = answer.value.split('');
  let guess = input.value.toString().split('');

  for (let i = 0; i < 4; i++) {
    if(guess[i] === ans[i]) {
      inner = inner + '<span class="glyphicon glyphicon-ok"></span>';
    } else if (ans.includes(guess[i])) {
      inner = inner + '<span class="glyphicon glyphicon-transfer"></span>';
    } else {
      inner = inner + '<span class="glyphicon glyphicon-remove"></span>';
    }
  }

  inner = inner + '</span><div class="col-md-6">';
  resultsDiv.innerHTML = inner;

  return numCorrect === 4 ? true : false;
}

function showAnswer(input) {
  let codeElem = document.getElementById('code');
  codeElem.innerHTML = answer;
  input ? codeelem.addClass(' success') : codeElem.addClass(' failure');
}

function showReplay() {
  document.getElementById('guessing-div').css({display: "block"});
}
