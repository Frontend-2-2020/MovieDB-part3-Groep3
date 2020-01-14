import React, { Component } from "react";
import { KEY } from "../config";
import Axios from "axios";

class Detail extends Component {
  // Defining our state with an empty array
  state = {
    movies: []
  };

  // Excuting our Axios Call once to avoid an never-ending loop
  componentDidMount() {
    const { MovieDetail } = this.props.match.params;
    console.log(MovieDetail);
    this.getDetail();
  }
  
  // Making our Axios Call en updating our state
  getDetail(id) {
    
    Axios.get(
      "https://api.themoviedb.org/3/movie/"+id+"?api_key=" +
        KEY
    ).then(response => {
      // this.setState({ movies: response.data.results });
      console.log(response);
    });
  }
  render() {
    return <div className="container-fluid">

    </div>;
  }
}

export default Detail;
