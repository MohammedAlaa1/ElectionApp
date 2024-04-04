'use client'
import Link from 'next/link'
import Image from 'next/image'
import useUser from '../lib/useUser';


const HomePage = () => {
  const { userInfo, logout } = useUser();

  return (
    <div>
      {/* Hero Section */}
<div className="bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen flex items-center justify-center">
  <div className="max-w-4xl mx-auto px-4 py-8 text-white text-center">
    <h1 className="text-5xl font-bold mb-4">Welcome to Our Election System</h1>
    <p className="text-lg mb-8">
      Your one-stop platform for managing and participating in elections.
    </p>
    <div className="flex justify-center">
      {/*<Image
          src="/election-app/photo.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
      />*/}
    </div>
  </div>
</div>

      {/* Main Content */}

      {userInfo && userInfo.email?<>
      <div className="bg-gray-900 from-teal-400 to-teal-600 min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 py-8 text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Welcome to Voter Portal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-teal-600">Access Candidate Profile</h3>
                <p className="text-gray-700 mb-4">
                  View the Candidates profile, check all thier details, and securely cast your vote.
                </p>
                  <Link href="/candidates" className="block py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300">
                    Go to candidates
                  </Link>
              </div>
              <div className="p-8 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-teal-600">Explore the result</h3>
                <p className="text-gray-700 mb-4">
                  Discover the details of the result features and functionalities available in the voter portal.
                </p>
                  <Link href="/result" className="block py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300">
                    Go to result
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </>: 
      
  <>
  <div className="bg-gray-900 min-h-screen flex items-center justify-center">
    <div className="max-w-4xl mx-auto px-4 py-8 text-center">
      <h2 className="text-3xl font-bold mb-8 text-teal-400">Get Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-gray-800 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Voter Portal</h3>
          <p className="text-gray-300 mb-4">
            Access your voter profile, view election details, and cast your vote securely.
          </p>
          <br />
          <Link href="/login" className="text-blue-400 hover:underline">Log in</Link>
        </div>
        <div className="p-6 bg-gray-800 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Voter Portal</h3>
          <p className="text-gray-300 mb-4">
            If you are a new user looking to participate in voting, registration is required to access our services.
          </p>
          <Link href="/signup" className="text-blue-400 hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  </div>
  </>

        }
    </div>
  );
};

export default HomePage;
