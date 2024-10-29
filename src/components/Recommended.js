import React from 'react';
import MovieCard from '../components/MovieCards';

const Recommended = ({ movies }) => {
  return (
    <div className='my-3'>
      <h2 className="text-2xl font-bold mt-20 mb-4 text-white">Recommended Movies</h2>
      <div className="scroll-container">
        {movies.map((movie) => (
          <div key={movie.id} className="scroll-item">
            <MovieCard 
            id={movie.id}
            title={movie.title} imageUrl={movie.cardImg} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
