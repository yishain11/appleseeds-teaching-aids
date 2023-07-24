var wonderWoman = {
  name: "Diana Prince",
};
var batman = {
  name: "Bruce Wayne",
};
var superHeroes = [wonderWoman, batman];

function printName() {
  console.log("my name is " + this.name);
}

//solution

function printHeroes(heroes, printFunc) {
  for (let i = 0; i < heroes.length; i++) {
    console.log("This is our loved hero:");
    printFunc.call(heroes[i]);
  }
}
printHeroes(superHeroes, printName);
