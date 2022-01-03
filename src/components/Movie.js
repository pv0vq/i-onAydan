import React from 'react';

const Movie = ({movie, removeMovie}) => { // jxx로 리턴
    return(
        <div className="movie">
            <div className="movie-title">
                {movie.title}
            <span className="movie-year">
                ({movie.year})</span>
            </div>
            <button onClick={() => removeMovie(movie.id)}>삭제</button>
        </div>
    );
};

export default Movie;
