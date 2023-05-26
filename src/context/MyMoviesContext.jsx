/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const MyMoviesContext = createContext();
export const useMovieContext = () => useContext(MyMoviesContext);

export const MyMoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    if (movies.includes(movie)) {
      const updatedMovies = movies.filter((movieId) => movieId !== movie);
      setMovies(updatedMovies);
    } else {
      setMovies([...movies, movie]);
    }
  };

  return (
    <MyMoviesContext.Provider value={{ movies, addMovie }}>
      {children}
    </MyMoviesContext.Provider>
  );
};
