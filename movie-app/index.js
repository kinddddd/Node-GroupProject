const container = document.querySelector(".container");
const moviesList = document.createElement("ul");
moviesList.className = "movie";
container.appendChild(moviesList);

fetch("http://localhost:3000/movies")
  .then((res) => res.json())
  .then((movies) => showMoviesList(movies));

showMoviesList = (movies) => {
  console.log(movies);
  movies.forEach((movie) => {
    const movieElement = document.createElement("li");
    const movieBox = document.createElement("div");
    const movieTitle = document.createElement("h2");
    const movieImage = document.createElement("img");

    movieElement.className = "movie-box";
    movieBox.className = "movie-box-front";
    movieImage.setAttribute("src", movie.img);

    movieTitle.textContent = movie.title;

    moviesList.appendChild(movieElement);
    movieElement.appendChild(movieBox);
    movieBox.appendChild(movieTitle);
    movieBox.appendChild(movieImage);
  });
};
