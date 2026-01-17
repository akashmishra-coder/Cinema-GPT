import React, { use, useEffect, useState } from "react";
import { logo_Url, User_Icon } from "../utils/consent";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { AddUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Menu} from "lucide-react";
import { addClearGptSearchMovies, addToggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch(); //redux dispatch hook use for dispatching actions
  const navigator = useNavigate(); //navigation hook
  const user = useSelector((store) => store.user); //getting user data from redux store
  const [navSlider, setnavSlider] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(AddUser({ uid: uid, email: email, name: displayName }));
        navigator("/browse");
      } else {
        dispatch(removeUser());
        navigator("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        //  navigator("/error");
      });
  };

  const handleMouseEnter = () => {
    setnavSlider(true);
  };

  const handleMouseLeave = () => {
    setnavSlider(false);
  };

  const hnadleGptSearchView = ()=>{
    dispatch(addToggleGptSearchView());
    dispatch(addClearGptSearchMovies());
  }

  const showGptSearch = useSelector((store) => store.gpt.gptSearchView);

  return (
    <div className="w-screen px-4 md:px-10 flex items-center justify-between h-20 absolute top-0 left-0 z-30 bg-linear-to-b from-black/90 via-black/70 to-transparent backdrop-blur-md border-b border-amber-500/10">
      {/* Logo Section */}
      <div className="flex items-center gap-3 group">
        <div className="relative">
          <img src={logo_Url} alt="logo-image" className="w-10 md:w-12 transition duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </div>
        <div>
          <p className="text-2xl md:text-3xl text-amber-500 font-bold drop-shadow-lg">CinemaGpt</p>
        </div>
      </div>

      {user && (
        <div className="flex gap-3 items-center">
          {/* GPT Search Button */}
          <button 
            onClick={hnadleGptSearchView} 
            className=' text-xs md:text-md px-4 md:px-6 py-2 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition duration-300 cursor-pointer transform hover:scale-105 active:scale-95 shadow-lg '
          >
            {!showGptSearch ? " GPT Search" : " Homepage"}
          </button>

          {/* User Icon */}
          <div className="hidden md:flex items-center">
            <img 
              src={User_Icon} 
              alt="user-icon" 
              className="w-8 lg:w-10 rounded-full border-2 border-amber-500/30 p-1 hover:border-amber-500 transition duration-300" 
            />
          </div>

          {/* Menu Button */}
          <button
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
            className="cursor-pointer border-2 border-amber-500/40 bg-black/50 hover:bg-amber-500/20 text-white rounded-lg px-3 h-10 flex items-center justify-center transition duration-300 hover:border-amber-500"
          >
            <Menu size={20} />
          </button>
        </div>
      )}

      {/* Dropdown Menu */}
      {navSlider && (
        <div
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
          className="absolute top-15 z-50 right-4 md:right-10 w-48 bg-linear-to-b from-black/95 to-gray-900/95 backdrop-blur-md text-white rounded-xl shadow-2xl border border-amber-500/20 overflow-hidden animate-in fade-in slide-in-from-top-2"
        >
          {/* Profile Option */}
          <div className="px-4 py-3 border-b border-amber-500/10 hover:bg-amber-500/10 transition duration-200 cursor-pointer">
            <p className="font-semibold text-amber-400">Profile</p>
            <p className="text-xs text-gray-400">{user?.email}</p>
          </div>

          {/* Saved Option */}
          <Link 
            to={"/saved"} 
            className="block px-4 py-3 border-b border-amber-500/10 hover:bg-amber-500/10 transition duration-200 font-semibold text-white"
          >
            ⭐ Saved Movies
          </Link>

          {/* Sign Out Option */}
          <p 
            onClick={handleSignOut} 
            className="px-4 py-3 hover:bg-red-600/20 transition duration-200 text-red-400 font-semibold cursor-pointer"
          >
            🚪 Sign out
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
