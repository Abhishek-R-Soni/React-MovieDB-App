import React from 'react';
import MovieCardView from './MovieCardView'

const Movies = (props) => {

    console.log(props.movies)
    return (
      <div className="container">
        <div className="row">
            {
               props.movies.map(movie => (
                    <MovieCardView img={movie.poster_path} title={movie.original_title}/>
                ))   
            }
        </div>
      </div>
    );
}

export default Movies;