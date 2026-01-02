import React, { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { AddUser } from "../utils/userSlice";
import Header from "./Header";
import { checkValiddate } from "../utils/validate";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [isFormSignIn, setisFormSignIn] = useState(true);
  const [message, setmessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // Toggle between Sign In and Sign Up forms
  const toggleLoginForm = () => {
    setisFormSignIn(!isFormSignIn);
  };

  // Handle form submission for Sign In and Sign Up
  const handleButtonClick = () => {
    // Implement form submission logic here

    const message = checkValiddate(
      email.current?.value,
      password.current?.value,
      name.current?.value
    );
    setmessage(message);

    if (message) return;

    if (!isFormSignIn) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name.current?.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(AddUser({ uid: uid, email: email, name: displayName }));

              setmessage("Sign Up Successful. Please Login.");
            })
            .catch((error) => {
              // An error occurred
              setmessage("Profile update failed: " + error.message);
            });

          const user = userCredential.user;
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setmessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign in logic can be implemented here
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setmessage("Login Successful");
        })
        .catch((error) => {
          setmessage("*User not found, Please sign up first");
          console.log(error.code + "-" + error.message);
        });
    }
  };

  return (
    <div className="bg-linear-to-l h-screen w-screen flex items-center justify-center bg-img ">
      <Header />
      <div className=" w-screen h-screen absolute bg-linear-to-t from-blue-400 opacity-50 blur-xl z-10"></div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" md:mt-25 w-8/12 md:w-3/12 p-7 md:p-10 md:pb-20 md:m-auto gap-5 border-2 z-10 rounded-2xl shadow-2xl text-white flex flex-col "
      >
        <h2 className=" text-2xl font-bold mb-3">
          {isFormSignIn ? "Login" : "Sign Up"}
        </h2>
        {!isFormSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Your name"
            className="bg-zinc-700 border  -2 border-zinc-400 rounded-md p-2"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className=" bg-zinc-700 border  -2 border-zinc-400 rounded-md p-2"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" bg-zinc-700 border-2 border-zinc-400 rounded-md p-2"
        />
        <p className=" font-semibold text-red-600">{message}</p>
        <button
          onClick={handleButtonClick}
          className=" md:mt-4 bg-red-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-red-700"
        >
          {isFormSignIn ? "Login" : "Sign Up"}
        </button>
        <p className=" cursor-pointer" onClick={toggleLoginForm}>
          {isFormSignIn
            ? "New to Cinema? Sign Up here"
            : "Already have an account? Login here"}
        </p>
      </form>
    </div>
  );
};

export default Login;
