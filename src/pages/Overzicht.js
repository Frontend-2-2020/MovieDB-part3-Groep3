import React, { Component } from "react";
import { KEY } from "../config.js";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import Axios from "axios";

import MovieCard from "../Components/MovieCard";
import ScrollButton from "../Components/ScrollButton";

class Overzicht extends Component {
  // Defining our state with an empty array
  state = {
    movies: [],
    dataList: [],
    page: 1
  };

  // Excuting our Axios Call once to avoid an never-ending loop
  componentDidMount() {
    this.getMovies();
  }
  // Making our Axios Call en updating our state
  getMovies() {
    Axios.get(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=" +
        this.state.page +
        "&api_key=" +
        KEY
      //https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=" + page + "&api_key=" + KEY
    ).then(response => {
      this.setState({
        movies: response.data.results,
        dataList: response.data
      });
      console.log(response.data);
    });
  }
  onChange = current => {
    console.log(current);
    this.setState({
      page: current
    });
    this.getMovies();
  };

  // Making our container filled with our MovieCards and passing our props
  render() {
    return (
      <div className="container-fluid">
        <Pagination
          onChange={this.onChange}
          page={this.state.page}
          total={this.state.dataList.total_pages}
        />
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
