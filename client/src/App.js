import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./components/SavedList";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import UpdateForm from "./components/UpdateForm";

const App = props => {
  const [savedList, setSavedList] = useState([]);
  const [movies, setUpdatedMovie] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const getMovies = payload => {
    setUpdatedMovie(payload);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route
        exact
        path="/"
        render={props => {
          return <MovieList {...props} getMovies={getMovies} />;
        }}
      />
      <Route
        exact
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route
        exact
        path="/update-movie/:id"
        render={props => {
          return <UpdateForm {...props} movies={movies} />;
        }}
      />
    </>
  );
};

export default App;
