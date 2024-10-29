import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ id, title, imageUrl }) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/movie/${id}`); // Add the leading slash
  };

  return (
    <div className="relative group cursor-pointer z-10 transition-transform duration-300 transform hover:scale-105">
      <img
        onClick={handleDetail}
        src={imageUrl}
        alt={title}
        className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 ease-in-out group-hover:opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40 rounded-lg" />
      <div className="absolute inset-0 rounded-lg bg-black bg-opacity-30 backdrop-blur-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 ease-in-out">
        <div className="text-white text-lg font-semibold p-4">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-lg font-bold p-4 rounded-b-lg">
        {title}
      </div>
    </div>
  );
};

export default MovieCard;
