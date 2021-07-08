import './App.css';
import React, {Component} from 'react';
import { Header, MoviesList, MoviesDetails } from './components';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies:[{
        title: 'Tom & Jerry',
        img:'https://media2.woopic.com/api/v1/images/174%2Faudiovisual%2Fmovie%2F770%2F5ef%2Fdf99d2c8a5fab30650b64c884e%2Fmovies-268680-21793300.jpg?format=822x700&quality=85',
        details: 'R 175 min Dessin animé',
        description:'tom &  jerry'
      },
      {
        title: 'Tom & Jerry',
        img:'https://media2.woopic.com/api/v1/images/174%2Faudiovisual%2Fmovie%2F770%2F5ef%2Fdf99d2c8a5fab30650b64c884e%2Fmovies-268680-21793300.jpg?format=822x700&quality=85',
        details: 'R 175 min Dessin animé',
        description:'tada'
      },
      {
        title: 'Tom & Jerry',
        img:'https://media2.woopic.com/api/v1/images/174%2Faudiovisual%2Fmovie%2F770%2F5ef%2Fdf99d2c8a5fab30650b64c884e%2Fmovies-268680-21793300.jpg?format=822x700&quality=85',
        details: 'R 175 min Dessin animé',
        description:'wouhou'
      },
      {
        title: 'Tom & Jerry',
        img:'https://media2.woopic.com/api/v1/images/174%2Faudiovisual%2Fmovie%2F770%2F5ef%2Fdf99d2c8a5fab30650b64c884e%2Fmovies-268680-21793300.jpg?format=822x700&quality=85',
        details: 'R 175 min lala animé',
        description:'yes'
      }
    ],
      selectedMovie: 0,
    }
  }

  updateSelectedMovie = (title) => {
    const index = this.state.movies.findIndex((m) => {
      return title === m.title;
    })
    this.setState({
      selectedMovie : index
    })
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className="d-flex flex-row flex-fill pt-4 p-2">
          <MoviesList movies={this.state.movies} updateSelectedMovie={this.updateSelectedMovie} />
          <MoviesDetails movie={ this.state.movies[this.state.selectedMovie]} />
        </div>
      </div>
    );
  }
}

export default App;
