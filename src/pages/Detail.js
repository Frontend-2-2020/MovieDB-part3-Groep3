import React, { Component } from "react";
import { KEY } from "../config";
import Axios from "axios";
import "../style/Detail.css";
import ProductionCompanyList from "../Components/ProductionCompanyList";

class Detail extends Component {
  
    state = {
      movieInfo: [{genres:[], production_companies:[]}]
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

    return <div className="jumbotron jumbotron-fluid mt-0 h-200 pt-2 pb-2" style={{
      backgroundImage: `url('https://image.tmdb.org/t/p/original${data.backdrop_path} ')`
    }}>
        <div className="container-fluid">
            <img className="float-left mr-4 img-fluid pt-5" src={"https://image.tmdb.org/t/p/w300/"+ data.poster_path}  alt=""/>
         
            <div className="" >
            <h1 className="display-4 pt-5">{data.title} <span className="small font-weight-light text-secondary">({data.release_date})</span></h1>
            <p className="lead">score: {data.vote_average}</p>
            
            <p>{data.overview}</p>
            <div>
            
              
            </div>
            
        </div> 
        </div>
        
        
        
      </div>;
  }
}

export default Detail;
