import React from 'react';
import MovieCard from '../components/MovieCards';

const Originals = ({ movies }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-6 mb-4">Originals</h2>
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

export default Originals;
