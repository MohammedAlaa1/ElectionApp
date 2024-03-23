'use client'

import Link from 'next/link'
import axios from 'axios';
import { FormEvent, useState } from 'react';

const SignupPage = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [full_name, setFullname] = useState("")
  const [DOB, setDob] = useState("")
  const [national_id, setNationalId] = useState("")
  const [gender, setGender] = useState("")
  const [city, setCity] = useState("")
  const [usernameError,setUsernameError] = useState("")
  const [emailError, setEmailError] = useState("");


      // Email validation function
      const validateEmail = (email: string) => {
        // Regular expression for email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    //e.preventDefault()

    //username validation
    if (username.length < 2) {
      setUsernameError("Username must be at least two characters long");
      e.preventDefault()
      return;
    } else {
      setUsernameError("");
    }
    //email validation
    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      e.preventDefault()
      return;
    } else {
      setEmailError("");
    }


    try{
      await axios.post(
        "http://localhost:3000/api/signup",{
          username,
          email,
          password,
          full_name,
          DOB,
          national_id,
          gender,
          city,
        }
      )
      setUsername("")
      setEmail("")
      setPassword("")
      setFullname("")
      setDob("")
      setNationalId("")
      setGender("")
      setCity("")
      console.log("user were inserted successsfully ")
      window.location.href = '/';
    }catch(error){
      console.log("an error accured: ", error);
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="max-w-md w-full bg-blue-50 p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-4 text-black">Create your account</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input onChange={(e)=> setUsername(e.target.value)} id="username" name="username" type="text" autoComplete="username" required className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" placeholder="Enter your username" />
          </div>
          {usernameError && (
              <p className="text-red-500 text-sm mt-1">{usernameError}</p>
            )}
          <div>
            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
            <input onChange={(e)=> setEmail(e.target.value)} id="email-address" name="email" type="email" autoComplete="email" required className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" placeholder="Enter your email address" />
          </div>
          {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input onChange={(e)=> setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="new-password" required className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" placeholder="Enter your password" />
          </div>
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input onChange={(e)=> setFullname(e.target.value)} id="fullname" name="fullname" type="text" autoComplete="name" required className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" placeholder="Enter your full name" />
          </div>
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input onChange={(e)=> setDob(e.target.value)} id="dob" name="dob" type="date" required className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" placeholder="Enter your date of birth" />
          </div>
          <div>
            <label htmlFor="national-id" className="block text-sm font-medium text-gray-700">National ID</label>
            <input onChange={(e)=> setNationalId(e.target.value)} id="national-id" name="national-id" type="text" autoComplete="off" pattern="[0-9]{14}" required className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" placeholder="Enter your national ID (14 numbers)" />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <select onChange={(e)=> setGender(e.target.value)}  id="gender" name="gender" autoComplete="gender" required className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <select onChange={(e)=> setCity(e.target.value)} id="city" name="city" autoComplete="city" required className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900">
              <option value="">Select City</option>
              <option value="Cairo">Cairo</option>
              <option value="Alexandria">Alexandria</option>
              <option value="Giza">Giza</option>
              {/* Add other governorates */}
            </select>
          </div>
          <div>
            <button type="submit" className="w-full bg-indigo-500 text-white py-3 rounded-md font-semibold hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Sign up</button>
          </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Aleardy have an account? <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">log in from here</Link></p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
