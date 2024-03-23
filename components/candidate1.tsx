import Image from 'next/image'

const Candidate1ProfilePage = () => {
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
                <div className="bg-blue-100 rounded-lg shadow-lg p-6">
                    <div className="flex items-center justify-center mb-6">
                        <Image src="/candidate1.png" width={200} height={5} alt="Candidate 1"/>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">Liam Thompson</h2>
                    <p className="text-lg text-gray-600 mb-2">Empowering Communities, Building Futures</p>
                    <p className="text-lg text-gray-600 mb-4">Age: 35</p>
                    <p className="text-lg text-gray-600 mb-4">City: New York</p>
                    <p className="text-lg text-gray-600 mb-4">Occupation: Politician</p>
                    <p className="text-lg text-gray-600 mb-6">Education: JD, Oxford Political Science School</p>
                    <p className="text-gray-700">
                        John Doe is a passionate advocate for social justice and equality. He has a vision to create a community where everyone has equal opportunities and access to resources. As a lawyer with extensive experience in civil rights cases, John aims to address systemic inequalities and promote inclusivity in all aspects of governance. His plans include implementing policies to support marginalized communities, improving access to healthcare and education, and fostering economic growth through sustainable initiatives.
                    </p>
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

export default Candidate1ProfilePage;
