'use client'
import axios from 'axios';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import useUser from "../lib/useUser"

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {addUser} = useUser()

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        //e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3000/api/login", {
                email,
                password,
            }
            )
            // Check if response contains user data
            if (response && response.data) {
                // Pass user data to addUser function
                addUser(response.data);
                // Redirect after successful login
                window.location.href = '/';
            }
        } catch (error) {
            console.log("an error occurred: ", error);
        }
    }
 
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-blue-50 rounded-lg shadow-lg p-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                </div>
                <form onSubmit={onSubmit} className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                {/* Heroicon name: lock-closed */}
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M4 7a4 4 0 118 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2V7zm10-3a1 1 0 011 1v5a1 1 0 01-1 1h-1V7a2 2 0 00-2-2H7a2 2 0 00-2 2v4H4a1 1 0 110-2h1V5a1 1 0 011-1h4V3a1 1 0 012 0v1h1zM6 7h2v5H6V7zm6 0h2v5h-2V7z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Sign in
                        </button>
                        <div className="text-center p-5">
                            <p className="text-sm text-gray-600">New to the app? <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up from here</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
