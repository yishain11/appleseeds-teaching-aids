const guessEl = document.querySelector('#answer');
const messageEl = document.querySelector('#message');
const guessedKeysEl = document.querySelector('#guessed-keys');
const confirmRestartEl = document.querySelector('button');
const restartEl = document.querySelector('#restart');
const answerEl = document.querySelector('#answer');

const guessedKeys = [];
const guessedKey = (keyPressed) => {
  guessedKeys.push(keyPressed);
  guessedKeysEl.textContent = guessedKeys;
};
const restart = () => {
  messageEl.textContent = 'Guess a letter';
  answerEl.textContent = '?';
  messageEl.classList.remove('green');
  messageEl.classList.remove('red');
  guessedKeys.splice(0, guessedKeys.length);
  guessedKeysEl.textContent = guessedKeys;
};
const randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

//or:
//const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
console.log(randomLetter);

document.addEventListener('keydown', (e) => {
  if (restartEl.classList.contains('hide')) {
    const key = e.key;
    //https://stackoverflow.com/questions/23476532/check-if-string-contains-only-letters-in-javascript
    if (!/^[a-z]$/i.test(key)) {
      return (messageEl.textContent = 'please enter a valid letter');
    }
    if (guessedKeys.includes(key)) {
      return (messageEl.textContent = `${key} has already been guessed!`);
    }
    if (randomLetter !== key) {
      messageEl.textContent = 'Nope, wrong letter';
      messageEl.classList.add('red');
      return guessedKey(key);
    }
    if (randomLetter === key) {
      messageEl.textContent = 'Right letter!';
      answerEl.textContent = randomLetter;
      messageEl.classList.remove('red');

      restartEl.classList.remove('hide');
    }
  }
});

confirmRestartEl.addEventListener('click', () => {
  restartEl.classList.add('hide');
  restart();
});
