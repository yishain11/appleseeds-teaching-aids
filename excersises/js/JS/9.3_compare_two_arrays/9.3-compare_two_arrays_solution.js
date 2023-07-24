const food = ['Noodle', 'Pasta', 'Ice-cream', 'Meat', 'Cucumber', 'Olives'];
const food1 = ['Fries', 'Ice-cream', 'Pizza', 'Olives', 'Hamburgers'];

const matches = (arr, arr2) => {
  const matched = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr[i] === arr2[j]) {
        matched.push(arr[i]);
      }
    }
  }
  return matched.length ? matched : false;
};
//or

console.log(matches(food, food1));
