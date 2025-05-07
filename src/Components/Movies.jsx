import axios from "axios";
import React, { useEffect, useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/movie/popular?api_key=0deab0293bbd61498681898d121390ca"
    )
      .then((response) => {
        setMovies(response.data.results);
        return response.data.results;
      })
      .then((response) => {
        console.log(response);
      });
  }, []);

  return (
    <div>
      <form>
        <img src="" />
      </form>
    </div>
  );
}

export default Movies;
