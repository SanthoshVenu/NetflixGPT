import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(false);
    const handleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
      <Header />
      <div>
        <form className=" w-4/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-60">
          <h1 className="p-4 text-3xl">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              className="p-4 m-2 w-full bg-gray-100 rounded-xl "
              type="text"
              placeholder="Full Name"
            ></input>
          )}

          <input
            className="p-4 m-2 w-full bg-gray-100 rounded-xl "
            type="email"
            placeholder="Email Address"
          ></input>
          <input
            className="p-4 m-2 w-full  bg-gray-100 rounded-xl"
            type="password"
            placeholder="Password"
          ></input>
          <button className="p-4 m-2 w-full bg-red-700">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="p-4 " onClick={handleSignInForm}>
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
