import React, { Component } from "react";
import { KEY } from "../config.js";
import Axios from "axios";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "../Components/MovieCard";
import ScrollButton from "../Components/ScrollButton";

class Overzicht extends Component {
  // Defining our state with an empty array
  state = {
    movies: []
  };

  // Excuting our Axios Call once to avoid an never-ending loop
  componentDidMount() {
    this.getMovies();
  }

  // Making our Axios Call en updating our state
  getMovies() {
    Axios.get(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" +
        KEY
    ).then(response => {
      this.setState({ movies: response.data.results });
    });
  }

  // Making our container filled with our MovieCards and passing our props
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.state.movies.map((movie, index) => (
            <MovieCard movie={movie} />
          ))}
        </div>
        <ScrollButton />
      </div>
    );
  }
}

export default Overzicht;
