  
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './component/MovieList';
import Filter from'./component/Filter';


const App = () => {
	const [movies, setMovies] = useState({title:"Terrifier", description:"On Halloween night, Tara Heyes finds herself as the obsession of a sadistic murderer known as Art the Clown", posterUrl:"https://m.media-amazon.com/images/M/MV5BYmMxNzA0OTUtOTJiOS00NTc4LWJmNTItMGM3OWE0N2Y0NjhjXkEyXkFqcGdeQXVyMTg5NjU4NjE@._V1_SX300.jpg", rated:"unrated"},
  {title:"Nightingale", description:"Set in 1825, Clare, a young Irish convict woman, chases a British officer through the rugged Tasmanian wilderness, bent on revenge for a terrible act of violence he committed against her family. On the way she enlists the services of an Aboriginal tracker named Billy, who is also marked by trauma from his own violence-filled past.", posterUrl:"https://m.media-amazon.com/images/M/MV5BNjVmZmY1NmQtMWNhZS00ZDUwLTk5ZTQtZGE4NWIyM2YwMDRiXkEyXkFqcGdeQXVyODY3Nzc0OTk@._V1_SX300.jpg", rated:"R"},
  {title:"Little Woods", description:"A modern Western about two sisters who work outside the law to better their lives.", posterUrl:"https://m.media-amazon.com/images/M/MV5BMTU2NjcyODQ0MF5BMl5BanBnXkFtZTgwMjgwNTcxNzM@._V1_SX300.jpg", rated:"R"},
  {title:"Mirrors", description:"An ex-cop and his family are the target of an evil force that is using mirrors as a gateway into their home ",posterUrl:"https://m.media-amazon.com/images/M/MV5BMTI2NTA1ODEyOF5BMl5BanBnXkFtZTcwNjc3MjY3MQ@@._V1_SX300.jpg" ,rate:"R"},
  {title:"The Tunnel", description:"An investigation into a government cover-up leads to a network of abandoned train tunnels deep beneath the heart of Sydney. As a journalist and her crew hunt for the story it quickly becomes clear the story is hunting them" ,posterUrl:"https://m.media-amazon.com/images/M/MV5BMTY3NTEwNTQ3NV5BMl5BanBnXkFtZTcwMTAyOTM0NA@@._V1_SX300.jpg", rated:"unrated"},
  {title:"Split", description:"Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th", posterUrl:"https://m.media-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_SX300.jpg", rated:"PG-13"
});
	
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);
	
   addMovie=(e)=>
  {e.preventDefault();
   this.state.movies;
      newMovie=this.newMovie.value;
    this.setState({movies: [...this.state.movies,newMovie]});
  }
	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				 <h1>Movie-app-react</h1>
				<Filter searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
      <br/>
      <form className="from-inline" onSubmit={(e)=>{this.addMovie(e)}}>
        <div className="form-group">
          <label className="sr-only" htmlFor="newMovieInput">Add</label>
          <input ref ={input =this.newMovie = input} type="text" placeholder="addMovie" className="form-control"id="newMovieInput"/>
          <button type="submit" className="btn btn-primary">AddNewMovie</button>
          
          
        </div>
      </form>
			<div className='row'>
				<MovieList
					movies={movies}
					
				/>
			</div>
			
		</div>
	);
};

export default App;