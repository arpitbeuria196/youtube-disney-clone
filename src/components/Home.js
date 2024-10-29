import React, { useEffect } from 'react'
import Header from './Header';
import ImageSlider from './ImageSlider';
import { addMovies } from './firebaseData';
import Viewer from '../components/Viewer';

const Home = () => {
    
    //addMovies();

  return (
    <div className=''>
        <Header/>
        <img 
          className="h-screen absolute w-screen object-cover z-0" 
          src="images\home-background.png"
          alt="Background"
        />
      <div className="mt-5">
        <ImageSlider />
      </div>
        <Viewer/>
    </div>
  )
}

export default Home
