import React, { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { checkValiddate } from "../utils/validate";

const Login = () => {
  const [isFormSignIn, setisFormSignIn] = useState(false);
  const [message, setmessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleLoginForm = () => {
    setisFormSignIn(!isFormSignIn);
  };

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
          const user = userCredential.user;
          console.log(user); //object with user details
          setmessage("Sign Up Successful. Please Login.");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setmessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="bg-linear-to-l bg-img ">
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" mt-10 w-3/12 p-10 pt-10 pb-30 m-auto gap-5 rounded-2xl bg-black text-white flex flex-col "
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
          className=" mt-4 bg-red-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-red-700"
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
