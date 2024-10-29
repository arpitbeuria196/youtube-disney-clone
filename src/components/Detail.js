import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Detail = () => {
    const { id } = useParams();
    const recommendedMovies = useSelector((state) => state.movie.Recommended);
    const newDisneyPlusMovies = useSelector((state) => state.movie.NewDisneyPlus);
    const originalsMovies = useSelector((state) => state.movie.Originals);
    const trendingMovies = useSelector((state) => state.movie.Trending);

    const movies = [
        ...recommendedMovies,
        ...newDisneyPlusMovies,
        ...originalsMovies,
        ...trendingMovies,
    ];
    const movie = movies.find((movie) => movie.id === id);

    if (!movie) return <div>Movie not found!</div>;

    return (
        <div className="relative">
            {/* Background Image */}
            <img
                src={movie.backgroundImg}
                alt={movie.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            
            {/* Overlay for Content */}
            <div className="relative z-10 p-4 flex flex-col items-start justify-end h-full">
                <h1 className="text-4xl font-bold text-white">{movie.title}</h1>
                <img 
                    src={movie.titleImg} 
                    alt={movie.title} 
                    className="rounded-lg shadow-lg mt-4 w-1/2" 
                />
                
                {/* Buttons Section */}
                <div className="mt-6 flex space-x-4">
                    <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition text-lg font-semibold shadow-lg">
                        Play
                    </button>
                    <button className="bg-transparent border border-light-gray text-light-gray px-6 py-3 rounded hover:bg-gray-200 transition text-lg font-semibold shadow-lg">
                        My List
                    </button>
                </div>

                <p className="mt-4 text-white">{movie.description}</p>
            </div>
        </div>
    );
};

export default Detail;
