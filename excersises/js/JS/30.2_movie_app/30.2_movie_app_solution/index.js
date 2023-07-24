const API_KEY = 'c9f0874f';
const fetchMovie = async (movie) => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}`);
  console.log(response);
  const data = await response.json();
  displayMovie(data);
};
displayMovie = (movie) => {
  const container = document.querySelector('.container');
  const image = document.querySelector('.image');
  const title = document.querySelector('.year');

  console.log(movie);
};
fetchMovie('free willy');
