import React from 'react'
import Header from './Header';
import { useState , useRef} from 'react';
import { checkValidateData } from '../utils/validate';
//import {  createUserWithEmailAndPassword } from "firebase/auth";
//import { auth } from '../utils/firebase';


const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true);
    const [errorMessage , setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {
        //validation
        const message = checkValidateData(email.current.value , password.current.value)
        setErrorMessage(message);
        
        if(message) return;
        //signin signup
        //sign in sign up logic 
    }
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Header />

      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_medium.jpg"
        alt="Background-img"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Form Container */}
      <div className="absolute inset-0 flex justify-center items-center z-20 px-4">
        <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md bg-black/70 text-white p-8 sm:p-10 rounded-lg">
          <h1 className="text-3xl font-bold mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>


        {isSignInForm ? "" :
          (<input type="text" 
            ref = {name}
          placeholder='Full Name'
          className="p-4 my-3 w-full bg-gray-700/80 rounded outline-none"/>)}

          <input
          ref={email}
          onChange={() => setErrorMessage(null)}
            className="p-4 my-3 w-full bg-gray-700/80 rounded outline-none"
            type="email"
            placeholder="Enter email address"
          />


          <input
          ref={password}
          onChange={() => setErrorMessage(null)}
            className="p-4 my-3 w-full bg-gray-700/80 rounded outline-none"
            type="password"
            placeholder="Password"
          />
          <p className='text-red-500 font-bold text-leg p-2'>{errorMessage}</p>

          <button className="p-4 my-5 bg-red-700 w-full rounded font-bold hover:bg-red-800 transition duration-200" onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="mt-4 text-gray-300 text-sm cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
           
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login