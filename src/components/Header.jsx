import React, { use, useEffect, useState } from "react";
import { logo_Url, User_Icon } from "../utils/consent";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { AddUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
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
    <div className=" w-screen px-4 md:px-10 flex items-center justify-between h-20 text-black absolute top-0 left-0 z-30 bg-linear-to-b from-black">
      <div className=" flex items-center">
        <img src={logo_Url} alt="logo-image" className=" w-10 md:w-12 " />
        <p className=" text-shadow-2xs text-shadow-white pl-1 text-3xl md:text-4xl text-red-500 font-(family-name:--chewy-regular)">
         Cinema Gpt
        </p>
      </div>

      {user && (
        <div className=" flex gap-2 pr-2 px-2 border-black rounded-full items-center ">
          <button onClick={hnadleGptSearchView} className=" px-4 text-xl py-2 border-2 border-blue-700 bg-black text-white cursor-pointer rounded-lg hover:scale-105">{!showGptSearch ? "GPT Search" : "Homepage"}</button>
          <img src={User_Icon} alt="user-icon" className=" hidden md:block w-7 lg:w-10" />
          <button
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
            className="  md:text-xl cursor-pointer border-2 border-blue-700 bg-black text-white rounded-lg px-2 h-10 hover:bg-zinc-700"
          >
            <Menu />{" "}
          </button>
        </div>
      )}

      {navSlider && (
        <div
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
          className=" flex w-28 h-40 text-lg md:text-md bg-black text-white flex-col justify-around items-center absolute top-15 right-2 md:right-6 rounded-md cursor-pointer "
        >
          <p>Profile</p>
          <p>about us</p>
          <p onClick={handleSignOut} className="text-red-600 hover:underline">
            Sign out
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
