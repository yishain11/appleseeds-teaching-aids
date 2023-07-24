const arr = [1, 2, 3, 4];

//filter

Array.prototype.myFilter = function (callback) {
  const returnArr = [];
  if (typeof callback !== "function") {
    throw new TypeError("must provide a callback");
  }
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      returnArr.push(this[i]);
    }
  }
  return returnArr;
};
console.log(Array.prototypes);

const x = arr.myFilter((el) => {
  return el > 2;
});
console.log(x);

//find

Array.prototype.myFind = function (callback) {
  let result = undefined;
  if (typeof callback !== "function") {
    throw new TypeError("must provide a callback");
  }
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return (result = this[i]);
    }
  }
  return result;
};

const y = arr.myFind((el, i, arr) => {
  return el > 2;
});
console.log(y);
