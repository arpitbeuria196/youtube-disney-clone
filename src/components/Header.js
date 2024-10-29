import React, { useEffect, useState } from 'react';
import { FaHome, FaSearch, FaPlus, FaStar } from 'react-icons/fa';
import { GiFilmSpool } from 'react-icons/gi';
import { IoTvSharp } from 'react-icons/io5';
import { auth, provider } from './firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setSignIndetails, setSignOut } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/home");
        setLoginStatus(false);
      } else {
        navigate("/");
        setLoginStatus(true);
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const onHandleGoogleAuth = async () => {
    try {
      if (loginStatus) {
        const result = await signInWithPopup(auth, provider);
        const userDetails = {
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };
        dispatch(setSignIndetails(userDetails));
      } else {
        await signOut(auth);
        dispatch(setSignOut());
      }
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <div className='top-0 left-0 right-0 z-10 shadow-md'>
      <div className='flex items-center p-2'>
        <img 
          className='w-28 ml-4'
          src='images/logo.svg' 
          alt="Logo" 
        />
        
        {loginStatus ? (
          <React.Fragment>
            <div className='flex-1'></div>
            <button 
              onClick={onHandleGoogleAuth} 
              className='rounded-md border text-xl py-2 px-5 mr-4 border-gray-100'
            >
              Login
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className='flex text-xl space-x-14 px-10 mt-4 mx-1'>
              <h2 className='flex items-center'><FaHome className='mr-2' />Home</h2>
              <h2 className='flex items-center'><FaSearch className='mr-2' />Search</h2>
              <h2 className='flex items-center'><FaStar className='mr-2' />Watchlist</h2>
              <h2 className='flex items-center'><FaPlus className='mr-2' />Originals</h2>
              <h2 className='flex items-center'><GiFilmSpool className='mr-2' />Movies</h2>
              <h2 className='flex items-center'><IoTvSharp className='mr-2' />Series</h2>
            </div>
            <div className="flex items-center space-x-4 mr-4">
              {user && user.displayName ? (
                <>
                 <img className='h-10 border border-spacing-2 hover:opacity-75'
                 src='https://lh3.googleusercontent.com/a/ACg8ocIejKO5grLKCSphumx7I__DbL_1mg8qdNJ8rgyIUehs8iYodXMh=s96-c'/>
                  <span className='text-sm font-semibold'>Welcome, {user.displayName}</span>
                  <button 
                    onClick={onHandleGoogleAuth} 
                    className='rounded-md border text-xl py-2 px-5 border-gray-100'
                  >
                    Logout
                  </button>
                </>
              ) : (
                <span className='text-lg font-semibold'>Welcome!</span>
              )}
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Header;
