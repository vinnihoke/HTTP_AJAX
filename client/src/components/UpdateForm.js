import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateForm = props => {
  const [updated, setUpdated] = useState({
    id: 0,
    title: "",
    director: "",
    metascore: 0,
    stars: []
  });

  const { match, movies } = props;

  useEffect(() => {
    const movieID = match.params.id;
    const movieToUpdate = movies.find(movie => {
      console.log(`${movie.id}`, movieID);
      return `${movie.id}` === movieID;
    });
    console.log(movieToUpdate);
    setUpdated(movieToUpdate);
  }, [match, movies]);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${updated.id}`, updated)
      .then(res => props.history.push(`/movies/${updated.id}`))
      .catch(err => console.log(err));
  };

  const changeHandler = e => {
    setUpdated({ ...updated, [e.target.name]: e.target.value });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title
        <input
          type="text"
          name="title"
          value={updated.title}
          onChange={changeHandler}
        />
      </label>
      <label htmlFor="director">
        Director
        <input
          type="text"
          name="director"
          value={updated.director}
          onChange={changeHandler}
        />
      </label>
      <label htmlFor="metascore">
        Metascore
        <input
          type="text"
          name="metascore"
          value={updated.metascore}
          onChange={changeHandler}
        />
      </label>
      {/* <label htmlFor="stars">
        Stars
        <input type="text" name="stars" value={updated.stars} />
      </label> */}
      <button>Submit</button>
    </form>
  );
};

export default UpdateForm;
