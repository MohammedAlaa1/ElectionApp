'use client'
import Link from 'next/link';
import useUser from '../lib/useUser'; // Import the useUser hook



const Navbar = () => {
    var result = '/result'
    var candidates = '/candidates'
    var candidate1 = '/candidate1'
    var candidate2 = '/candidate2'
    var candidate3 = '/candidate3'
    var candidate4 = '/candidate4'
    const { userInfo, logout } = useUser(); // Destructure userInfo and logout function from useUser hook
    if (Object.keys(userInfo).length === 0) {
        var candidates = candidate1 = candidate2 = candidate3 = candidate4 = result = "/login";
    }
    return (
        
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-white font-bold text-xl">VoteForMe</Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                            <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</Link>

                            <div className="relative group">
                                <Link href={candidates} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none">Candidates</Link>
                                <ul className="absolute z-10 hidden bg-gray-800 text-gray-300 rounded-md py-1 mt-2 group-hover:block">
                                    <li><Link href={candidate1} className="block px-4 py-2 text-sm hover:bg-gray-700">Candidate 1</Link></li>
                                    <li><Link href={candidate2} className="block px-4 py-2 text-sm hover:bg-gray-700">Candidate 2</Link></li>
                                    <li><Link href={candidate3} className="block px-4 py-2 text-sm hover:bg-gray-700">Candidate 3</Link></li>
                                    <li><Link href={candidate4} className="block px-4 py-2 text-sm hover:bg-gray-700">Candidate 4</Link></li>
                                </ul>
                            </div>
                            <Link href={result} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Result</Link>
                            
                            {/* Conditional rendering based on user authentication state */}
                            {userInfo && userInfo.email ? (
                                // If user is logged in, show logout button
                                <Link href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={logout}>Log out</Link>
                            ) : (
                                // If user is not logged in, show both sign up and log in buttons
                                <>
                                    <Link href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Log in</Link>
                                    <Link href="/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign up</Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
