function greet(whatToSay) {
  return function (name) {
    console.log(whatToSay + ' ' + name);
  };
}
// greet('hello')
// greet('hello')()
// greet('hello')('Bob')

// sayHello = greet('Hello')
// sayGoodbye = greet('Hi')
// sayHello('Mordi');
// sayGoodbye('Mordi');

const counter = () => {
  let count = 0;
  return () => {
    count++;
    console.log(count);
  };
};

// const counter1 = counter();
// counter1();
// counter1();
// counter1();
// const counter2 = counter();
// counter2();
// counter2();
// counter2();

const makeGreeting = (language) => {
  return (firstName, lastName) => {
    if (language === 'en') {
      console.log(`Hello ${firstName} ${lastName}`);
    } else if (language === 'es') {
      console.log(`Hola ${firstName} ${lastName}`);
    }
  };
};
// const greetEnglish = makeGreeting('en');
// const greetSpanish = makeGreeting('es');

const buildFunction = () => {
  let arr = [];
  for (var i = 0; i < 3; i++) {
    // let j = i;
    arr.push(() => {
      console.log(i);
    });
  }
  return arr;
};
const fs = buildFunction();
// fs[0]();
// fs[1]();
// fs[2]();
