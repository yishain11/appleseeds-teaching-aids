const cells = document.querySelectorAll('[cell]');
const button = document.querySelector('#restart');
let boardArr = Array(9).fill(null);
let turn = 'X';
const winningComb = [
  //row
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //col
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //
  [0, 4, 8],
  [2, 4, 6],
];
cells.forEach((cell, index) => {
  cell.addEventListener(
    'click',
    (event) => {
      handleClick(event.target, index);
    },
    { once: true }
  );
});

button.addEventListener('click', restart);
//? functions:

function handleClick(cell, index) {
  cell.textContent = turn;
  boardArr[index] = turn;
  console.log(boardArr);
  checkForWin();
  checkForEnd();
  turn = turn === 'X' ? 'O' : 'X';
}

function checkForEnd() {
  if (boardArr.every((e) => e)) {
    alert('end');
  }
}
function checkForWin() {
  const res = winningComb.filter((comb) => {
    return comb.every((cell) => boardArr[cell] === turn);
  });
  if (res.length > 0) {
    alert(turn + ' won');
  }
}

function restart() {
  cells.forEach((e, index) => {
    e.textContent = '';
    if (boardArr[index]) {
      cells[index].addEventListener(
        'click',
        (e) => {
          console.log(index);
          handleClick(e, index);
        },
        { once: true }
      );
    }
  });
  boardArr = Array(9).fill(null);
}
