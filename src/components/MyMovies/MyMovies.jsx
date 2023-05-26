/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import MovieDrawer from "../MovieDrawer/MovieDrawer";
import { useMovieContext } from "../../context/MyMoviesContext";

import "./MyMovies.css";

function MyMovies() {
  const [open, setOpen] = useState(false);
  const { movies, addMovies } = useMovieContext();
  return (
    <div className="my_movies" onClick={() => setOpen(true)}>
      <p>0</p>
      <FiEye />
      {movies.map((movie) => (
        <p key={movie}>{movie}</p>
      ))}
      <MovieDrawer open={open} setOpen={setOpen} />
    </div>
  );
}

export default MyMovies;
