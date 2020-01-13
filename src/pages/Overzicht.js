import React, { Component } from "react";
import Axios from "axios";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

class Overzicht extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    Axios.get(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4bc044ddb757b980e41e9e71ef3aafae"
    ).then(response => {
      //   console.log(response.data);
      this.setState({ movies: response.data.results });
      console.log(this.state.movies);
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.state.movies.map((movie, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
              <div className="card mb-4">
                <img
                  className="card-img-top"
                  src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">Released: {movie.release_date}</p>
                  <p className="card-text">Score: {movie.vote_average}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Overzicht;
