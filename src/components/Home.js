import React, { useEffect } from 'react'
import Header from './Header'

const Home = () => {
    
    

  return (
    <div className=''>
        <Header/>
        <img 
          className="h-screen absolute w-screen object-cover z-0" 
          src="images\home-background.png"
          alt="Background"
        />
      
    </div>
  )
}

export default Home
