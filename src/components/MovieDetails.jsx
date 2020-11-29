import React from "react";

const MovieDetails = (props) => {
  return (
    <div>
      <h2>Movie Details - {props.match.params.id}</h2>
      <button className="btn btn-primary btn-sm">Save</button>
    </div>
  );
};

export default MovieDetails;
