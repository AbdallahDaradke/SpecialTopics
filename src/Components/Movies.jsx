import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Movies() {
  // useEffect(() => {
  //   axios(
  //     "https://api.themoviedb.org/3/movie/popular?api_key=0deab0293bbd61498681898d121390ca"
  //   )
  //     .then((response) => {
  //       setMovies(response.data.results);
  //       // console.log(response.data.results);
  //       return response.data.results;
  //     })
  //     .then((response) => {
  //       // console.log(response);
  //       let test = movies.map((movie) => {
  //         return movie.adult;
  //       });
  //       console.log(test);
  //       return test;
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     });
  // }, []);

  const [movies, setMovies] = useState([]); // State to store movie data

  //Fetch Objects from API that contain movie details
  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/movie/popular?api_key=0deab0293bbd61498681898d121390ca"
    ).then((response) => {
      setMovies(response.data.results); //fetching data from API and setting it to movies state
      console.log(response.data.results);
    });
  }, []);

  //At first, I was putting the whole logic(axios + console.log(test)) in one useEffect, but it was not working. So I separated the logic into two useEffects. And in the second useEffect, I ensured that the movies state is not empty before running the logic. This way, I can access the movies state and log the test variable correctly.
  // This useEffect runs whenever the movies state changes

  useEffect(() => {
    let test = movies.map((movie) => movie.backdrop_path);
    console.log(test);
  }, [movies]); // This runs whenever movies changes
  let movieId;
  let movieTitle;
  let moviePosterPath;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {movies.map((movie) => (
        <div key={movie.id} style={{ width: "200px" }}>
          <Link
            to={`/details/${(movieId = movie.id)}/${(movieTitle =
              movie.title)}`}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Movies;
