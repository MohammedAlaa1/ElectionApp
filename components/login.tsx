'use client'
import axios from 'axios';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import useUser from "../lib/useUser"

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {addUser} = useUser()
    const [voteMessage, setVoteMessage] = useState('')

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(
                "http://localhost:3000/api/login", {
                email,
                password,
            });
    
            // Check if the request was successful (status code 2xx)
            if (response.status >= 200 && response.status < 300) {
                console.log("successful response", response.data);
                // Add the response data to global state
                addUser(response.data);
                // Redirect or perform any other action after successful login
                window.location.href = '/';
            }
        } catch (error) {
            console.log("An error occurred: ", error);
            setVoteMessage('email or password is invalid');
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
                            <input onChange={(e)=> setEmail(e.target.value)} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input onChange={(e)=> setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
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
                        {/* Display vote message */}
                        <div className="flex justify-center mt-4">
                        {voteMessage && <p className={voteMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}>{voteMessage}</p>}
                        </div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
