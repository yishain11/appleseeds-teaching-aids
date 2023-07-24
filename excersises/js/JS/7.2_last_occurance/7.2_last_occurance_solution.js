const string = "The more you know, the more you know that you don't know";
const easyIndex = string.lastIndexOf("you");

let index = 1;
while (index != string.length) {
  const currentIndex = string.indexOf("you", string.length - index);
  if (currentIndex != -1) {
    console.log(currentIndex);
    break;
  }
  index++;
}

