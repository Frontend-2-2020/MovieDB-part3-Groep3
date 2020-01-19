import React, { Component } from "react";
import { KEY } from "../config";
import Axios from "axios";
import "../style/Detail.css";

class Detail extends Component {
  
    state = {
      movieInfo: []
    };
  

  // Excuting our Axios Call once to avoid an never-ending loop
  componentDidMount() {
    const { MovieDetail } = this.props.match.params;
   
    this.getDetail(MovieDetail);
    
  }
  
  // Making our Axios Call en updating our state
  getDetail(id) {
    
    Axios.get(
      "https://api.themoviedb.org/3/movie/"+id+"?api_key=" +
        KEY
    ).then(response => {
     
      this.setState({ movieInfo: response.data });
      console.log(this.state);
    });
  }
  
  render() {
    const data = this.state.movieInfo;
    const jumbotImg = "https://image.tmdb.org/t/p/w500/" +data.backdrop_path;
    console.log(jumbotImg);
    return <div className="jumbotron jumbotron-fluid mt-0" >
        <div className="container container-fluid">
            <img className="float-left mr-4 img-fluid" src={"https://image.tmdb.org/t/p/w500/"+ data.poster_path}  alt=""/>
            {/* <img src={jumbotImg} class="background" alt=""/> */}
            <div className="" >
            <h1 className="display-4">{data.title} ({data.release_date})</h1>
            <p className="lead">score: {data.vote_average}</p>
            
            <p>{data.overview}</p>
        </div>
        </div>
        
        
        
      </div>;
  }
}

export default Detail;
