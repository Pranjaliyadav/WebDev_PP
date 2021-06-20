import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Movies from './Components/Movies/Movies.jsx';
import axios from "axios";
import {API_URL , API_KEY , IMAGE_URL} from "./API/secrets";

class App extends Component {
  state = {
    moviesData : [],
    currentMovie:"mission"
    };

  async componentDidMount(){
    //API call
    //using axios -> npm i axios
    //parameter-> api key, page , query
    //https://api.themoviedb.org/3/search/movie?api_key=c4f79a656174a40d7584098be8efeb0e&query=mission&page=1&include_adult=false
    
    let data = await axios.get( API_URL + "/search/movie" , 
        {params : {api_key:API_KEY, page: 1,query: this.state.currentMovie }
    });
    let moviesData = data.data.results;
    
    this.setState({
      moviesData:moviesData
    })
    

  }

  render() { 
    return (  <div className="App">
      <Header></Header>
      <Movies movies = {this.state.moviesData}></Movies>
    </div> );
  }
}
 
export default App;

