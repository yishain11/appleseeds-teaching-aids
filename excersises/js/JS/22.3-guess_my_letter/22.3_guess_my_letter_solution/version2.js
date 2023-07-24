const message = document.querySelector('#message');
const guessedKeysEl = document.querySelector('#guessed-keys');
const restartEl = document.querySelector('#restart');
const restartButton = document.querySelector('button');
const answer = document.querySelector('#answer');

const guessedKeys = [];
//5
const guessedKey = (keyPressed) => {
  guessedKeys.push(keyPressed);
  guessedKeysEl.textContent = guessedKeys;
};
//3
const randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
console.log(randomLetter);
//1
document.addEventListener('keydown', (e) => {
  if (restartEl.classList.contains('hide')) {
    //2

    const key = e.key;
    console.log(key);
    //4
    if (!/^[A-Z]$/i.test(key)) {
      return (message.textContent = 'please enter a valid letter');
    }
    if (guessedKeys.includes(key)) {
      return (message.textContent = 'already guessed this letter');
    }
    if (randomLetter !== key) {
      message.textContent = 'Nope, wrong letter';
      message.classList.add('red');
      return guessedKey(key);
    }
    if (randomLetter === key) {
      message.textContent = 'Right letter!';
      message.classList.add('green');
      answer.textContent = randomLetter;

      restartEl.classList.remove('hide');
    }
  }
});
const restart = () => {
  message.textContent = ' Guess a letter';
  message.classList.remove('green');
  message.classList.remove('red');
  guessedKeys.splice(0, guessedKeys.length);
  console.log(guessedKeys);
  guessedKeysEl.textContent = guessedKeys;
  answer.textContent = '?';

  console.log('restart game');
};
restartButton.addEventListener('click', (e) => {
  restartEl.classList.add('hide');
  restart();
});

//pseudo code
//! 1.create an event listener that will listen to the key
//! 2.get the users letter
//! 3.generate a random letter and store it in a variable
//! 4.check if the key being pressed is a letter
//* if it isn't write a message that it is an invalid key
//! if it is a letter
//* 5.store the letter in an array
//* display the guessed words to the user
//* 6.if the letter is already in the array display a message that you typed this letter already
//* if it is the wrong letter, display to the user it is the wrong letter.
//* if it is the right letter display a message that it is thew right letter.
//* if it is the right letter display to the user it is the right letter.
//* display to the user an option to restart the game
//* restart the html to the original state.
//*! Don't forget to change the colors of the text
