import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateEmail } from '../utils/Validate';
import { validatePassword } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const [emailValidMessage, setEmailValidMessage] = useState(null);
    const [passwordValidMessage, setPasswordValidMessage] = useState(null);
    const [isDisabled, setIsDisabled] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const checkEmail = () => {
        const message = validateEmail(email.current.value);
        setEmailValidMessage(message);
        setIsDisabled(message ? true : false)

    }

    const checkPassword = () => {
        const message = validatePassword(password.current.value);
        setPasswordValidMessage(message);
        setIsDisabled(message ? true : false)


    }

    const handleSubmission = () => {
        checkEmail();
        checkPassword();

        if (email.current.value === "" || password.current.value === "") {
            return;
        }

        if (isSignIn) {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate("/browse");
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    setErrorMessage(error.message);
                });

        } else {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    setErrorMessage(error.message);
                    console.log(errorMessage);
                    // ..
                });
        }

    }
    const handleFormType = () => {
        setIsSignIn(!isSignIn);
        console.log(isSignIn);
    }
    return (
        <div>

            <div className='bg-black'>
                <div className='mx-36'>
                    <img className='w-48 absolute z-10 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' />
                </div>



                <div className='absolute justify-between w-full flex flex-wrap bg-gradient-to-l from-black z-10'>

                    <form onSubmit={(e) => e.preventDefault()} className='md:w-4/12 absolute py-6 px-10 bg-black my-28 mx-auto right-0 left-0 text-white rounded-sm bg-opacity-80'>
                        <h1 className='text-3xl font-bold m-6'>
                            {isSignIn ? "Sign In" : "Sign Up"}
                        </h1>
                        <h1 className='text-red-500 mx-6'>{errorMessage}</h1>
                        <input ref={email} className="w-10/12 mx-6 my-2 py-4 px-2 rounded-md bg-black bg-opacity-70 border border-gray-100" type='text' placeholder='Email or Mobile Number' onBlur={() => { checkEmail() }} />
                        <h3 className='text-red-500 mx-6'>{emailValidMessage}</h3>
                        <input ref={password} className="w-10/12 mx-6 my-2 py-4 px-2 rounded-md bg-black bg-opacity-70 border border-gray-100" type='password' placeholder='Password' onBlur={() => { checkPassword() }} />
                        <h3 className='text-red-500 mx-6'>{passwordValidMessage}</h3>
                        <button className="w-10/12 mx-6 my-2 py-3 bg-red-800 rounded-md disabled:opacity-30" disabled={isDisabled} onClick={() => handleSubmission()}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                        
                        <p className='text-center py-4'>Forgot Password ?</p>
                        <input className='ml-6 py-4 text-xl w-4 h-4 ' type='checkbox'/> <span>Remember me.</span>
                        {isSignIn ?
                            <h1 className='mx-6 my-2'>New to Netflix? <span className='cursor-pointer' onClick={() => { handleFormType() }}>Sign Up Now.</span></h1>
                            : <h1 className='mx-6 my-2'>Already on Netflix? <span className='cursor-pointer' onClick={() => { handleFormType() }}>Sign In.</span></h1>
                        }
                        
                    </form>
                </div>



                <div className='opacity-40 relative'>
                    <img className='h-auto max-2xl:' src='https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_medium.jpg' />
                </div>

            </div>
        </div>
    )
}

export default Login
