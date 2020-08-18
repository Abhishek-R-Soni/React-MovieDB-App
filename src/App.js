import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LatestMovies from './components/LatestMovies'
import PlayingMovies from "./components/PlayingMovies";
import UpcomingMovies from './components/UpcomingMovies'
import Header from './components/Header'
import Movies from './components/Movies';
import Error from './components/Error';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      movies: [],
      searchTag: ''
    }
    this.API_Key = 'd2167da493e1622c863708176904de3d';
  }

   
  changeHandler = (e) => {
    this.setState({searchTag: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_Key}&query=${this.state.searchTag}`)
      .then(data => data.json())
      .then(data => {
        this.setState({movies: [...data.results]})
      })
  }
 
  render(){
    return (
      <div>
        <Header
          searchTag={this.state.searchTag}
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
        />
        <BrowserRouter>
          <switch>
            <Route path="/nowplayingmovies" component={PlayingMovies} />
            <Route path="/upcomingmovies" component={UpcomingMovies} />
            <Route path="/latestmovies" component={LatestMovies} />
          </switch>
        </BrowserRouter>

        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
