import Image from 'next/image'

const Candidate4ProfilePage = () => {
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
                <div className="bg-red-100   rounded-lg shadow-lg p-6">
                    <div className="flex items-center justify-center mb-6">
                        <Image src="/candidate5.png" width={200} height={5} alt="Candidate 5"/>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">Benjamin Patel</h2>
                    <p className="text-lg text-gray-600 mb-2">Building Bridges, Bridging Divides: Together Towards Equality</p>
                    <p className="text-lg text-gray-600 mb-4">Age: 45</p>
                    <p className="text-lg text-gray-600 mb-4">City: Houston</p>
                    <p className="text-lg text-gray-600 mb-4">Occupation: scientist.</p>
                    <p className="text-lg text-gray-600 mb-6">Education: JD, Houston science School</p>
                    <p className="text-gray-700">    
                    Benjamin Patel is deeply committed to advancing social justice and equality for all. With a forward-thinking approach, he envisions a community where every person has equal opportunities and essential resources at their disposal. Leveraging his extensive experience as a seasoned lawyer specializing in civil rights cases, Alexander is determined to address systemic injustices and promote inclusivity across all levels of governance. His holistic platform includes the enactment of policies aimed at empowering marginalized communities, improving access to vital services such as healthcare and education, and fostering sustainable economic growth.</p>
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

export default Candidate4ProfilePage;
