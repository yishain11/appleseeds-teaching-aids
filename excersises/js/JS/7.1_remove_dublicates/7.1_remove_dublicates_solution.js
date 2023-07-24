function solve(arr) {
  const removedDub = [];

  for (var i = 0; i < arr.length; ++i) {
    if (removedDub.indexOf(arr[i]) == -1) {
      removedDub.push(arr[i]);
    }
  }
  return removedDub;
}
console.log(solve([3, 4, 4, 3, 6, 3]));
