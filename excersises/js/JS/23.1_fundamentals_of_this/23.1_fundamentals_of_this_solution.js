//first assignment
console.log(this);

//second assignment
const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();

//third assignment
const myFuncDec = function () {
  console.log(this);
};

//fourth assignment
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();

//fifth assignment

document.querySelector(".element").addEventListener(() => {
  console.log(this);
});
