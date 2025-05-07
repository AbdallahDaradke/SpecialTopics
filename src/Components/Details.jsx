import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams(); // Get the movie ID from the URL parameters
  // const { title } = useParams(); // Get the movie title from the URL parameters
  // const { posterpath } = useParams(); // Get the movie poster path from the URL parameters
  console.log(id); // Log the movie ID to the console
  // console.log(title); // Log the movie title to the console
  // console.log(posterpath); // Log the movie poster path to the console
  const [movie, setMovie] = useState(null); // State to store movie data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Fetch Objects from API that contain movie details
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=0deab0293bbd61498681898d121390ca`
    )
      .then((response) => {
        setMovie(response.data); //fetching data from API and setting it to movies state
        console.log(response.data);
        console.log(response.data.results);
      })
      .catch((error) => {
        setError(error.message); // Set error message if the request fails
      })
      .finally(() => {
        setLoading(false); // Set loading to false after the request is complete
      });
  }, [id]);

  console.log(`Movie: ${movie}`); // Log the movies to the console

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <h1>{movie.title}</h1>
      <p>
        {" "}
        <b>Overview:</b> {movie.overview}
      </p>
      <p>
        <b>Rating: </b>
        {movie.vote_average}
      </p>
    </div>
  );
}

export default MovieDetails;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function MovieDetails() {
//   const { id } = useParams(); // Get the movie ID from the URL parameters
//   const [movie, setMovie] = useState(null); // State to store single movie data
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/movie/${id}?api_key=0deab0293bbd61498681898d121390ca`
//         );
//         setMovie(response.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovieDetails();
//   }, [id]); // Re-run when ID changes

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!movie) return <div>Movie not found</div>;

//   return (
//     <div>
//       <h1>{movie.title}</h1>
//       <img
//         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//         alt={movie.title}
//       />
//       <p>
//         <strong>Overview:</strong> {movie.overview}
//       </p>
//       <p>
//         <strong>Release Date:</strong> {movie.release_date}
//       </p>
//       <p>
//         <strong>Rating:</strong> {movie.vote_average}/10
//       </p>
//       <p>
//         <strong>Runtime:</strong> {movie.runtime} minutes
//       </p>
//       {/* Add more details as needed */}
//     </div>
//   );
// }

// export default MovieDetails;
