import React, { Component } from "react";
import { getMovies } from "./../services/fakeMovieService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Like from "./like";
import Pagination from "./pagination";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  componentDidMount() {
    const movies = [
      ...this.state.movies.map((movie) => {
        movie["isLiked"] = false;
        return movie;
      }),
    ];
    this.setState({ movies });
  }

  handleLiked = (movie) => {
    //console.log("movie", movie);
    const movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].isLiked = !movies[index].isLiked;
    console.log(movies[index].isLiked);
    this.setState({ movies });
  };

  renderMovies() {
    return this.state.movies.map((movie, index) => {
      return (
        <tr key={movie._id}>
          {/* <th scope="row">{movie._id}</th> */}
          <td>
            <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
          </td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <Like
              isLiked={movie.isLiked}
              onLiked={() => this.handleLiked(movie)}
            />
          </td>
          <td onClick={() => this.handleDelete(movie._id)}>
            <FontAwesomeIcon icon={faTrashAlt} className="text-danger" />
          </td>
        </tr>
      );
    });
  }

  informationMovies() {
    //if (this.state.movies.length === 0) return "There is no movies !";

    return (
      this.state.movies.length > 0 &&
      `Showing ${this.state.movies.length} in the database.`
    );
  }

  handleDelete = (id) => {
    // utilisation arrow function pour les événements (ici onClick)
    const movies = [...this.state.movies.filter((m) => m._id !== id)];

    this.setState({ movies }); // identique à this.setState({ movies: movies });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return "There is no movies !";

    return (
      <>
        <p>{this.informationMovies()}</p>
        <table className="table">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{this.renderMovies()}</tbody>
        </table>
        <Pagination />
      </>
    );
  }
}

export default Movies;
