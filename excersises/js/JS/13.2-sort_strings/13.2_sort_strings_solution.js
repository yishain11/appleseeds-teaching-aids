//Don't forget the sort method mutates our arrays. So to test each sort function out, comment out the previous sort functions.
//ascending and descending an array of strings

const foods = [
  'falafel',
  'Sbich',
  'sabich',

  'hummus',
  'pizza with extra pineapple',
];

const sortedAscending = foods.sort();
const sortDescending = foods.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
  //or with a ternary
  // return a == b ? 0 : a > b ? -1 :1
});

//ascending and descending an array of strings that includes uppercase

const foodsWithUpperCase = [
  'falafel',
  'sabich',
  'Sbich',

  'hummus',
  'pizza with extra pineapple',
];

const sortedAscendingUpperCase = foodsWithUpperCase.sort((a, b) => {
  let x = a.toLowerCase();
  let y = b.toLowerCase();
  if (x > y) return 1;
  if (x < y) return -1;
  return 0;
});
// console.log(
//   foodsWithUpperCase.sort((a, b) => {
//     let x = a.toLowerCase();
//     let y = b.toLowerCase();
//     if (x > y) return 1;
//     if (x < y) return -1;
//     return 0;
//   })
// );

const sortedDescendingUpperCase = foodsWithUpperCase.sort((a, b) => {
  let x = a.toLowerCase();
  let y = b.toLowerCase();
  if (x < y) return 1;
  if (x > y) return -1;
  return 0;
});

//sort by longest string
const words = ['apple', 'supercalifragilisticexpialidocious', 'hi', 'zoo'];

const longestWordSort = words.sort((a, b) => {
  let x = a.length;
  let y = b.length;
  if (x < y) return 1;
  if (x > y) return -1;
  return 0;
});
