import React, { useState, useEffect } from 'react';
import { useAuth } from '../Context';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify"
const LogIn = () => {
    const { login, IsAuth } = useAuth();
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


    const LogInHandler = async (e) => {
        e.preventDefault();

        if ([email, password].includes("")) {

            toast.error("All fields are required",
                {
                    theme: "dark"
                }
            )

            return
        } else {
            if (password.length < 8) {
                localStorage.setItem("auth", false)
                toast.error("The password must contain 8 characters or more",
                    {
                        theme: "dark"
                    }
                )

                return
            } else {

                login(email, password)

            }
        }
    }
    return (
        <div className="h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <h1 className="font-bold text-center text-2xl mb-5">Your Logo</h1>
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <form onSubmit={LogInHandler}>
                        <div className="px-5 py-7">

                            <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />

                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                            />

                            <button
                                type="submit"
                                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                            >
                                <span className="inline-block mr-2">Login</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-4 h-4 inline-block"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <div className="text-right my-2">

                                <Link to="/forgotpassword" className="text-gray-500 hover:text-sky-600 hover:underline transition-all">
                                    Forgot password?
                                </Link>
                            </div>

                        </div>
                    </form>

                    <div className="py-8">
                        <div className="">
                            <div className="text-center">
                                Don't have an account? <Link to="/signln" className="text-sky-600 font-medium hover:underline transition-all">Sign In  </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LogIn;