import React, { useEffect } from 'react';
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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setSignIndetails({ displayName: user.displayName, email: user.email, photoURL: user.photoURL }));
        navigate("/home");
      } else {
        dispatch(setSignOut());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const onHandleGoogleAuth = async () => {
    try {
      if (!user || !user.displayName) {
        const result = await signInWithPopup(auth, provider);
        dispatch(setSignIndetails({
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        }));
      } else {
        await signOut(auth);
        dispatch(setSignOut());
      }
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <div className='top-0 left-0 right-0 z-10 shadow-lg bg-black bg-opacity-80'>
      <div className='flex items-center justify-between p-4'>
        <img 
          className='w-28' 
          src='images/logo.svg' 
          alt="Logo" 
        />
        
        <div className='flex items-center space-x-10'>
          {user && user.displayName ? (
            <>
              <div className='flex text-lg space-x-4'>
                <h2 className='flex items-center transition duration-300 hover:text-gray-300'><FaHome className='mr-1' /> Home</h2>
                <h2 className='flex items-center transition duration-300 hover:text-gray-300'><FaSearch className='mr-1' /> Search</h2>
                <h2 className='flex items-center transition duration-300 hover:text-gray-300'><FaStar className='mr-1' /> Watchlist</h2>
                <h2 className='flex items-center transition duration-300 hover:text-gray-300'><FaPlus className='mr-1' /> Originals</h2>
                <h2 className='flex items-center transition duration-300 hover:text-gray-300'><GiFilmSpool className='mr-1' /> Movies</h2>
                <h2 className='flex items-center transition duration-300 hover:text-gray-300'><IoTvSharp className='mr-1' /> Series</h2>
              </div>

              <div className="flex items-center space-x-4">
                <img 
                  className='h-10 border border-gray-300 rounded-full shadow-lg hover:shadow-xl transition-all duration-300' 
                  src={user.photoURL || 'https://lh3.googleusercontent.com/a/default-avatar'} 
                  alt="User Avatar"
                />
                <span className='text-sm font-semibold text-white'>Welcome, {user.displayName}</span>
                <button 
                  onClick={onHandleGoogleAuth} 
                  className='bg-white text-black rounded-md text-lg py-2 px-4 hover:bg-gray-200 transition duration-300'
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className='flex justify-end'>
              <button 
                onClick={onHandleGoogleAuth} 
                className='bg-white text-black rounded-md text-lg py-2 px-4 hover:bg-gray-200 transition duration-300'
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
