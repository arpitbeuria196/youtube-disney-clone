import React from 'react';
import Header from './Header';

const Login = (props) => {
  return (
    <div>
      <Header />  
      <div className="flex items-center justify-center overflow-hidden h-screen relative">
        {/* Background Image */}
        <img 
          className="h-screen absolute w-screen object-cover z-0" 
          src="/images/login-background.jpg"
          alt="Background"
        />

        {/* Centered Content Container */}
        <div className="flex flex-col w-full max-w-md items-center justify-center relative z-10 p-4">
          {/* Logo */}
          <img 
            src="/images/cta-logo-one.svg" 
            alt="CTA Logo"
            className="w-3/4 mb-6" 
          />

          {/* Button */}
          <button className="w-full p-4 font-bold text-xl text-white bg-blue-600 hover:bg-blue-700 rounded">
            Get All Up Here
          </button>

          {/* Description */}
          <p className='mt-2 font-serif text-sm text-center'>
            This is a Clone of Disney Hotstar! Made by Arpit Beuria
          </p>

          <img 
            className='z-10 w-3/4 p-2 mt-2'
            src='images/cta-logo-two.png'
            alt="Additional Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
