import React from 'react';


function MovieList (props) {

    return (
      <>
        {props.movies.map((movie, i) => (
			<div ><Movie key={i} title={movie.title} description={movie.description} posterUrl={movie.posterUrl}
      rate={movie.rated}/></div>
				))}
      </>
    )
        };
     
  
  export default MovieList;

