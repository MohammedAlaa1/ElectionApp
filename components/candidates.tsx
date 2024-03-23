import Image from 'next/image'
import Link from 'next/link';

const CandidatePage = () => {
    return (
        <div className="min-h-screen bg-gray-900">
            {/* Header */}
            <header className="bg-gray-900 py-12">
                <div className="max-w-4xl mx-auto px-4 text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Meet the Candidates</h1>
                    <p className="text-lg">
                        Learn about the candidates running for office in the upcoming election.
                    </p>
                </div>
            </header>


            {/* Candidates Section */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Candidate Card 1 */}
                    <Link href="/candidate1">
                        <div className="bg-blue-100 rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
                        <Image src="/candidate1.png" width={200} height={5} alt="Candidate 1"/>
                        <h2 className="text-xl font-bold mb-2 text-black">Liam Thompson</h2>
                        <p className="text-gray-600 mb-2">Age: 35</p>
                        <p className="text-gray-600 mb-2">City: New York</p>
                        <p className="text-gray-600">Devoted community leader dedicated to fostering unity, prosperity, and positive change.</p>
                        </div>
                    </Link>

                    {/* Candidate Card 2 */}
                    <Link href="/candidate2">    
                        <div className="bg-green-100 rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
                            <Image src="/candidate2.png" width={200} height={5} alt="Candidate 2"/>
                            <h2 className="text-xl font-bold mb-2 text-black mt-4">Gabriel Smith</h2>
                            <p className="text-gray-600 mb-2">Age: 42</p>
                            <p className="text-gray-600 mb-2">City: Los Angeles</p>
                            <p className="text-gray-600">Experienced advocate for social justice, economic growth, and environmental sustainability.</p>
                        </div>
                    </Link>

                    {/* Candidate Card 3 */}
                    <Link href="/candidate3">    
                        <div className="bg-yellow-100 rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
                            <Image src="/candidate3.png" width={200} height={5} alt="Candidate 3"/>
                            <h2 className="text-xl font-bold mb-2 text-black mt-4">Alexander Rodriguez</h2>
                            <p className="text-gray-600 mb-2">Age: 39</p>
                            <p className="text-gray-600 mb-2">City: Chicago</p>
                            <p className="text-gray-600">Passionate visionary committed to empowering citizens, promoting diversity, and fostering inclusivity</p>
                        </div>
                    </Link>
                    {/* Candidate Card 4 */}
                    <Link href="/candidate4">  
                        <div className="bg-red-100 rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
                            <Image src="/candidate5.png" width={195} height={5} alt="Candidate 5"/>
                            <h2 className="text-xl font-bold mb-2 text-black mt-4">Benjamin Patel</h2>
                            <p className="text-gray-600 mb-2">Age: 45</p>
                            <p className="text-gray-600 mb-2">City: Houston</p>
                            <p className="text-gray-600">Proven leader with a strong track record of integrity, empathy, and effective governance.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CandidatePage;
