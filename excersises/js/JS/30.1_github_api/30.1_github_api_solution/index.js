const input = document.querySelector('input');
const dataa = [];
const names = [];

const getData = async () => {
  //better solution before even making a request for simple caching
  const isName = names.includes(input.value);
  if (isName) {
    return handleError('user already exists');
  }
  names.push(input.value);

  try {
    const response = await fetch(`https://api.github.com/users/${input.value}`);

    const data = await response.json();
    //fetch only rejects a promise if there was a network connection issue not with a 404 or 505.
    //We have a method with fetch, which is .ok
    //It returns to you a boolean if there request was true (200) or false (404,405) and then you can do an if statement and then get the error message from the data.message that the github returns to me
    if (!response.ok) {
      return handleError(data.message);
    }

    //don't call the server stam
    // for (let user of data) {
    //   if (user.id === github.node_id) {
    //     handleError("user profile already exists!");
    //     return;
    //   }
    // }
    const obj = {
      id: data.node_id,
      name: data.name,
      avatar: data.avatar_url,
      repos: data.public_repos,
      url: data.html_url,
    };
    dataa.push(obj);
    displayCard(obj);
  } catch (e) {
    console.log('hi');
    console.log(e);
    handleError(e);
  }
};

const displayCard = (person) => {
  input.value = '';
  input.focus();
  const container = document.querySelector('.container');
  const cardEl = document.createElement('div');
  cardEl.classList.add('card');
  const aEl = document.createElement('a');
  aEl.href = person.url;
  aEl.target = '_blank';
  const imageEl = document.createElement('img');
  const nameEl = document.createElement('h2');
  const repoEl = document.createElement('h5');
  imageEl.src = person.avatar;
  imageEl.classList.add('image');
  nameEl.textContent = person.name;
  repoEl.textContent = person.repos;
  cardEl.appendChild(aEl);
  aEl.appendChild(imageEl);
  aEl.appendChild(nameEl);
  aEl.appendChild(repoEl);
  container.appendChild(cardEl);
};
const handleError = (error) => {
  const errorContainer = document.querySelector('.error');
  errorContainer.textContent = error;
};
window.addEventListener('load', () => {
  input.focus();
});

const button = document.querySelector('button');
button.addEventListener('click', getData);
