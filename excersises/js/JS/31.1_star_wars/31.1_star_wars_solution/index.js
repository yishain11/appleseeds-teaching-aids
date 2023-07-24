//different way to solve this (to create dynamic rows):
// http://plnkr.co/edit/mE6xzSwVLQ9q4kqbCsLX?preview

const startApp = async () => {
  // const data = [];
  // let urls = [];
  const titles = ['Name', 'Height', 'Hair Color', 'Planet Name', 'Planet Population'];

  const getData = async () => {
    const data = [];
    let urls = [];
    console.time('normal loop');
    for (let i = 1; i <= 10; i++) {
      const reqPeople = await fetch(`https://swapi.dev/api/people/${i}/`);
      const peopleData = await reqPeople.json();
      const reqPlanet = await fetch(peopleData.homeworld);
      const planetData = await reqPlanet.json();

      data.push({
        name: peopleData.name,
        hair: peopleData.hair_color,
        height: peopleData.height,
        planet: {
          name: planetData.name,
          population: planetData.population,
        },
      });
    }
    // console.timeEnd('normal loop');

    // console.time('promise.all');
    for (let i = 1; i <= 10; i++) {
      urls.push(fetch(`https://swapi.dev/api/people/${i}/`));
    }

    const peopleResponse = await Promise.all(urls);
    const peopleData = await Promise.all(peopleResponse.map((p) => p.json()));
    const planetResponse = await Promise.all(
      peopleData.map(async (people) => {
        return await fetch(people.homeworld);
      })
    );
    const planetData = await Promise.all(planetResponse.map((p) => p.json()));

    for (let i = 0; i < 10; i++) {
      data.push({
        name: peopleData[i].name,
        hair: peopleData[i].hair_color,
        height: peopleData[i].height,
        planet: {
          name: planetData[i].name,
          population: planetData[i].population,
        },
      });
    }
    console.timeEnd('promise.all');

    displayData();
  };
  const displayData = () => {
    const table = document.createElement('table');
    table.classList.add('star-wars');
    const tableBody = document.createElement('tbody');
    const tr = document.createElement('tr');
    const title = document.createElement('td');
    title.setAttribute('colspan', '5');
    title.classList.add('header');
    title.innerHTML = 'Star Wars';

    const categories = document.createElement('tr');
    titles.forEach((title) => {
      category = `<td>${title}</td>`;
      categories.innerHTML += category;
    });

    tr.appendChild(title);
    tableBody.appendChild(tr);
    tableBody.appendChild(categories);

    data.forEach((item) => {
      if (item.titles) {
        return;
      }
      const tr = document.createElement('tr');
      let td1 = document.createElement('td');
      td1.innerHTML += item.name;
      let td2 = document.createElement('td');
      td2.innerHTML += item.hair;
      let td3 = document.createElement('td');
      td3.innerHTML += item.height;
      let td4 = document.createElement('td');
      td4.innerHTML += item.planet.name;
      let td5 = document.createElement('td');
      td5.innerHTML += item.planet.population;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      tableBody.appendChild(tr);
    });
    table.appendChild(tableBody);
    document.body.appendChild(table);
  };
  console.log('');
  getData();
};
startApp();
