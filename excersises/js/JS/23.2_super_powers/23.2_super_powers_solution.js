const storm = {
  superPower: 'flying',
  printSuperPower: printSuperPower,
};

function printSuperPower() {
  console.log('my super power is ' + this.superPower);
}

storm.printSuperPower();
