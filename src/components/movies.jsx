import React, { Component } from "react";
import { getMovies } from "./../services/fakeMovieService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Like from "./like";
import Pagination from "./pagination";
import { Link } from "react-router-dom";
import { paginate } from "./Utils/paginate";
import Genres from "./Genres";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: [],
    itemsPerPage: 4,
    currentPage: 1,
    genres: [],
    currentGenre: 'All genres',
  };

  componentDidMount() {
    const movies = getMovies().map((movie) => {
      movie["isLiked"] = false;
      return movie;
    });

    this.setState({ movies, genres: getGenres() })
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

  informationMovies(filteredMovies) {
    //if (this.state.movies.length === 0) return "There is no movies !";

    return (
      filteredMovies.length > 0 &&
      `Showing ${filteredMovies.length} in the database.`
    );
  }

  handleDelete = (id) => {
    // utilisation arrow function pour les événements (ici onClick)
    const movies = [...this.state.movies.filter((m) => m._id !== id)];

    this.setState({ movies }); // identique à this.setState({ movies: movies });
  };

  handlePage = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenre = genre => {
    this.setState({ currentGenre: genre, currentPage: 1 });
  }

  render() {
    const { movies: allMovies, itemsPerPage, currentPage, genres, currentGenre } = this.state;

    const filteredMovies = currentGenre !== 'All genres' ? allMovies.filter(movies => movies.genre.name === currentGenre) : allMovies;

    // utilisation de lodash dans la fonction paginate pour récupérer un nombre de movies en fonction du nombre itemPerPage
    // et dynamique selon la page sur laquelle on se situe
    const movies = paginate(filteredMovies, currentPage, itemsPerPage);

    const count = filteredMovies.length;

    if (count === 0) return "There is no movies !";

    return (
      <>
        <div className='row'>
          <Genres
            genres={genres}
            onGenre={this.handleGenre}
            currentGenre={currentGenre}
          />
          <div className="col">
            <div className="d-flex flex-column">
              <p>{this.informationMovies(filteredMovies)}</p>
              <table
                className="table"
              >
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {movies.map((movie, index) => {
                    return (
                      <tr key={movie._id}>
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
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination
          moviesSize={count}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onHandlePage={this.handlePage}
        />
      </>
    );
  }
}

export default Movies;
