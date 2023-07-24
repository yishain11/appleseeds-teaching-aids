//! sumWithFor
// function sumWithFor(arr) {
//   let sum = 0;
//   for (const val of arr) {
//     sum += val;
//   }
//   return sum;
// }
// sumWithFor([1, 3, 5, 7]); // 16

//! sumWithReduce

//! accumulator (מצבר) -> SNOWBALL
function sumWithReduce(arr) {
  return arr.reduce((acc, cur, i) => {
    console.log(
      `iteretion num ${i} : ${acc} + ${cur} next iteretion ${acc + cur}`
    );
    return acc + cur;
  }, 50);
}
console.log(sumWithReduce([1, 3, 5, 7])); // 16

/** -------------------------------------
 * Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.
Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/
function extractValue(arr, key) {
  return arr.reduce(function (acc, next) {
    acc.push(next[key]);
    return acc;
  }, []);
}
/** ---------------------------------
 * Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
  vowelCount('Elie') // {e:2,i:1};
  vowelCount('Tim') // {i:1};
  vowelCount('Matt') // {a:1})
  vowelCount('hmmm') // {};
  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
  let vowels = 'aeoui';
  return str
    .toLowerCase()
    .split('')
    .reduce(function (acc, next) {
      if (vowels.indexOf(next) != -1) {
        if (acc[next]) acc[next]++;
        else acc[next] = 1;
      }
      return acc;
    }, {});
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
  var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
  
  addKeyAndValue(arr, 'title', 'Instructor') // 
    [
      {title: 'Instructor', name: 'Elie'}, 
      {title: 'Instructor', name: 'Tim'}, 
      {title: 'Instructor', name: 'Matt'}, 
      {title: 'Instructor', name: 'Colt'}
     ]
*/

function addKeyAndValue(arr, key, value) {
  console.log(arr);
  return arr.reduce(function (acc, next, idx) {
    acc[idx][key] = value;
    return acc;
  }, arr);
}
