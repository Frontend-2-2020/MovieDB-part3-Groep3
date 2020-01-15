import React, { Component } from "react";

//Filling out our movieCard with the data from our props
class MovieCard extends Component {
  render() {
    let movieLink = "/Detail/";
    const movieProp = this.props.movie;
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={this.props.index}>
        <div className="card mb-4">
          <img
            className="card-img-top"
            src={"https://image.tmdb.org/t/p/w500/" + movieProp.poster_path}
            alt="Card image cap"
          />
          <div className="card-body">
            <a href={movieLink + movieProp.id} class="btn btn-primary">
              Details
            </a>
            <h5 className="card-title">{movieProp.title}</h5>
            <p className="card-text">
              <span className="font-weight-bold">Released:</span>{" "}
              {movieProp.release_date}
            </p>
            <p className="card-text">
              <span className="font-weight-bold">Score:</span>{" "}
              {movieProp.vote_average}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
