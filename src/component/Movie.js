import React, { Component } from 'react'
import '../style/style.scss'
import Moviebox from './Moviebox'
// import axios from 'axios';
import myJson from "../data.json"
import MovieSide from './MovieSide';


export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      tempMovies: [],
      genreArray: [],
      filterMovie: [],
      filterSubject: [],
    }
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    fetch('/json/data.json')
      .then(response => response.json())
      .then(data => this.setState({
        posts: data.movies,
        tempMovies: data.movies
      },() => this.getGenre()))
  }

  activeClass = (event) => {
    switch (event.target.className) {
      case 'active':
        event.target.className = 'unactive';
        break;

      case 'unactive':
        event.target.className = 'active';
        break;
    }
    this.getMovie(event);
  }

  getMovie = (event) => {

    var eventGenre = event.target.value;
    var movies = this.state.tempMovies;
    var filterMovie = [];
    var filterSubject = this.state.filterSubject;
    var searchSubject = filterSubject.includes(eventGenre)
    if (!searchSubject) {
      filterSubject.push(eventGenre);
    } else {
      let i = filterSubject.indexOf(eventGenre);
      if (i >= 0) {
        filterSubject.splice(i, 1);
      }
    }
    console.log(filterSubject);
    if (filterSubject.length > 0) {
      for (let j = 0; j < filterSubject.length; j++) {
        console.log(filterSubject[j]);
        for (let i = 0; i < movies.length; i++) {
          let genre = movies[i].Genre;
          let searchResult = genre.includes(filterSubject[j]);
          if (searchResult) {
            filterMovie.push(movies[i]);
          }
        }
      }
    } else {
      console.log(filterMovie);
      filterMovie = this.state.tempMovies;
    }
    this.setState({
      posts: filterMovie
    })
  }

  getGenre = () => {
    var array = [];
    var genre = '';
    var myArray = [];
    var toarray = [];
    console.log(this.state)
    this.state.tempMovies.map((movie) => {
      genre = movie.Genre
      console.log(movie)
      myArray = genre.split(", ");
      toarray = [...array, ...myArray]
      array = toarray
    })
    const uniqGenre = new Set(array)
    const arrayUniqGenre = [...uniqGenre];
    this.setState({
      genreArray: arrayUniqGenre
    })
  }


  changeInutHandler = (event) => {
    var text = event.target.value.toLowerCase();
    const movies = this.state.tempMovies;
    const filterMovie = [];

    for (let i = 0; i < movies.length; i++) {
      let Title = movies[i].Title.toLowerCase();
      let searchmyWord = Title.includes(text);
      if (searchmyWord) {
        filterMovie.push(movies[i]);
      }
    }

    this.setState({
      posts: filterMovie
    })
  }

  render() {
    return (
      <div className='moviecontainer'>
        <div className='movie'>
          {this.state.posts.map((post) =>
            <>
              < Moviebox key={post.Id} Id={post.Id - 1} Title={post.Title} Director={post.Director} Year={post.Year} Genre={post.Genre} />
            </>
          )}
        </div>
        <div className='movieSide'>
          <input type="text" name="" id="" onChange={this.changeInutHandler} />
          <MovieSide genreArray={this.state.genreArray} activeClass={this.activeClass} unactiveClass={this.unactiveClass} />
        </div>
      </div>
    )
  }
}
