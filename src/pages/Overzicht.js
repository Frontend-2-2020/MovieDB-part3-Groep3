import React, { Component } from 'react';
import Axios from 'axios';

class Overzicht extends Component {

componentDidMount(){
    this.getMovies();
}

getMovies(){
Axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4bc044ddb757b980e41e9e71ef3aafae")
.then(response =>{
    console.log(response);
})
};
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Overzicht;