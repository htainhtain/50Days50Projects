let movies;
let images;
let movieDisplay = document.querySelector(".movie-display");
let movieDisplayMovieDiv;
let input = document.querySelector("input");
let logo = document.querySelector(".logo");

const createMovieDisplay = (title, rating, imgUrl, overview) => {
  movieDisplayMovieDiv = document.createElement("div");
  movieDisplayMovieDiv.classList.add("movie-display_movie");

  movieDisplayMovieDiv.innerHTML = `
  <div class='movie-display_movie_image' style='background-image: url("https://image.tmdb.org/t/p/w500/${imgUrl}")'></div>
  <div class='movie-display_movie_descirption'>
    <div class='title'>${title}</div>
    <div class='rating'>${rating}</div>
  </div>
  <div class='movie-display_movie_overview'>
    <h3>Overview</h3>
    <p>${overview}</p>
  </div>
  `;

  movieDisplay.appendChild(movieDisplayMovieDiv);
};

const getMovies = async () => { 
  let res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=6f19e6239469181019ba9191b5879ee2"
  );
  movies = await res.json();
  movieDisplay.innerHTML = "";
  movies.results.forEach((movie) => {
    createMovieDisplay(
      movie.title,
      movie.vote_average,
      movie.poster_path,
      movie.overview
    );
  });
};

const searchMovies = async (keyword) => {
  let searchRes = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=6f19e6239469181019ba9191b5879ee2&query=${keyword}`
  );
  let searchMovies = await searchRes.json();
  movieDisplay.innerHTML = "";
  searchMovies.results.forEach((movie) => {
    createMovieDisplay(
      movie.title,
      movie.vote_average,
      movie.poster_path,
      movie.overview
    );
  });
};

getMovies();

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchMovies(input.value);
    input.value = "";
  }
});

logo.addEventListener("click", () => {
  getMovies();
});
