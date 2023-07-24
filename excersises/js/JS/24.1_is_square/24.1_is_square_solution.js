function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;

  this.isSquare = () => {
    if (a === b && b === c && c === d) {
      return true;
    } else {
      return false;
    }
  };
}

let someSquare = new Square(3, 4, 4, 4).isSquare();
console.log(someSquare.__proto__);
