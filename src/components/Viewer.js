import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { setRecommendedMovies, setNewDisneyPlusMovies, setOriginalsMovies, setTrendingMovies } from '../utils/movieSlice';
import Recommended from './Recommended';
import Originals from './Originals';
import Trending from './Trending';
import NewDisneyPlus from './NewDisneyPlus';

const Viewer = () => {
  const dispatch = useDispatch();

  const recommendMoviesSelector = useSelector((state) => state.movie.Recommended);
  const newDisneyPlusMoviesSelector = useSelector((state) => state.movie.NewDisneyPlus);
  const originalsMoviesSelector = useSelector((state) => state.movie.Originals);
  const trendingMoviesSelector = useSelector((state) => state.movie.Trending);

  useEffect(() => {
    fetchMovies();
    console.log("Firebase is Calling");
  }, [dispatch]);

  const fetchMovies = async () => {
    const movieCollection = collection(db, "movies");
    const movieSnapshot = await getDocs(movieCollection);
    const moviesData = movieSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    const recommendMovies = moviesData.filter((movie) => movie.type === 'recommend');
    const newDisneyPlusMovies = moviesData.filter(movie => movie.type === 'new');
    const originalsMovies = moviesData.filter(movie => movie.type === 'original');
    const trendingMovies = moviesData.filter(movie => movie.type === 'trending');

    // Dispatch the organized movies to Redux
    dispatch(setRecommendedMovies(recommendMovies));
    dispatch(setNewDisneyPlusMovies(newDisneyPlusMovies));
    dispatch(setOriginalsMovies(originalsMovies));
    dispatch(setTrendingMovies(trendingMovies));
  };

  return (
    <div className="m-5">
      <Recommended movies={recommendMoviesSelector} />
      <NewDisneyPlus movies={newDisneyPlusMoviesSelector} />
      <Originals movies={originalsMoviesSelector} />
      <Trending movies={trendingMoviesSelector} />
    </div>
  );
};

export default Viewer;
