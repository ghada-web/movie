import React from 'react';

function movieCard (props) {
     
    return (
      <div>
        <div className="movie-card">
          <img src={props.posterUrl} alt="movie"/>
        </div>
        <p>Title: {props.title}</p>
        <p>Description : {props.description}</p>
        <p>Rating : {props.rated}</p>
      </div>
    )
 
}

export default movieCard;
