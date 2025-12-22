import React, { use, useEffect, useState } from "react";
import { logo_Url, User_Icon } from "../utils/consent";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { AddUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
      .then(() => {
      })
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

  return (
    <div className=" w-full  px-10 flex items-center justify-between h-20 text-black">
      <div className=" flex items-center  ">
        <img src={logo_Url} alt="logo-image" className=" w-20 " />
        <p className=" text-shadow-2xs text-shadow-white ml-2 text-5xl text-red-500  font-(family-name:--chewy-regular)">
          Cinema Gpt
        </p>
      </div>

      {user && (
        <div className=" flex gap-2 mr-2 p-2 border-black rounded-full items-center ">
          <img src={User_Icon} alt="user-icon" className=" w-15" />
          <button
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
            className=" font-bold text-xl cursor-pointer bg-black text-white rounded-lg px-2 h-10 hover:bg-zinc-700"
          >
            Sign out{" "}
          </button>
        </div>
      )}

      {navSlider && (
        <div
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
          className=" flex w-30 h-60 bg-black text-white flex-col justify-around items-center absolute top-15 right-10 rounded-lg cursor-pointer "
        >
          <p>Profile</p>
          <p>about us</p>
          <p onClick={handleSignOut} className=" text-xl ">
            Sign out
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
