import React, { Component } from "react";
import Axios from "axios";

class Overzicht extends Component {
  state = {
    movies: ""
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    Axios.get(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4bc044ddb757b980e41e9e71ef3aafae"
    ).then(response => {
      console.log(response);
    });
  }
  render() {
    return (
      <div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="card mb-4">
            <img className="card-img-top" src="" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">title</h5>
              <p className="card-text">Released: 2020</p>
              <p className="card-text">Score: 18</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Overzicht;
