import Image from 'next/image'

const Candidate3ProfilePage = () => {
    return (
        <div className="min-h-screen bg-gray-900">
            {/* Header */}
            <header className="bg-gray-800 py-12">
                <div className="max-w-4xl mx-auto px-4 text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Candidate Profile</h1>
                    <p className="text-lg">
                        Learn about the candidate and their plans for the community.
                    </p>
                </div>
            </header>

            {/* Candidate Profile */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-yellow-100 rounded-lg shadow-lg p-6">
                    <div className="flex items-center justify-center mb-6">
                        <Image src="/candidate3.png" width={200} height={5} alt="Candidate 3"/>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">Alexander Rodriguez</h2>
                    <p className="text-lg text-gray-600 mb-2">Equity for All: Together We Thrive</p>
                    <p className="text-lg text-gray-600 mb-4">Age: 39</p>
                    <p className="text-lg text-gray-600 mb-4">City: Chicago</p>
                    <p className="text-lg text-gray-600 mb-4">Occupation: Community Organizer.</p>
                    <p className="text-lg text-gray-600 mb-6">Education: JD, Chicago Sociology School</p>
                    <p className="text-gray-700">    
                    Alexander Rodriguez is a fervent champion for social justice and equality. With a visionary outlook, he strives to establish a community where every individual enjoys equitable opportunities and access to essential resources. Drawing from his robust background as a seasoned lawyer specializing in civil rights cases, Alexander is dedicated to confronting systemic injustices and fostering inclusivity in every facet of governance. His comprehensive agenda encompasses the implementation of policies geared towards uplifting marginalized communities, enhancing healthcare and educational accessibility, and propelling economic prosperity through sustainable initiatives.                    </p>
                </div>
                 {/* Vote for Me Button */}
                    <div className="flex justify-center">
                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
                            Vote for Me
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default Candidate3ProfilePage;
