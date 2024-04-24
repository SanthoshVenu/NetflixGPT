import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateForm } from "../Utils/validateForm";
import { auth } from "../Utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const email = useRef("");
  const password = useRef("");
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const checkFormValidation = () => {
    const message = validateForm(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (isSignInForm) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    }
  };
  return (
    <div>
      <Header />
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" w-4/12 absolute p-12 my-36 mx-auto right-0 left-0 text-black bg-black bg-opacity-60"
        >
          <h1 className="p-4 text-3xl text-white ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              className="p-4 m-2 w-full bg-gray-100 rounded-xl text-black "
              type="text"
              placeholder="Full Name"
            ></input>
          )}

          <input
            ref={email}
            className="p-4 m-2 w-full bg-gray-100 rounded-xl text-black "
            type="email"
            placeholder="Email Address"
          ></input>
          <input
            ref={password}
            className="p-4 m-2 w-full  bg-gray-100 rounded-xl "
            type="password"
            placeholder="Password"
          ></input>
          <p className="text-red-500 font-bold">{errorMessage}</p>
          <button
            onClick={checkFormValidation}
            className="p-4 m-2 w-full bg-red-700"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="p-4  text-white" onClick={handleSignInForm}>
            {isSignInForm
              ? "New to Netflix ? Sign Up"
              : "Already have an Account? Please Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
