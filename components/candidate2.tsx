import Image from 'next/image'

const Candidate2ProfilePage = () => {
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
                <div className="bg-green-100 rounded-lg shadow-lg p-6">
                    <div className="flex items-center justify-center mb-6">
                        <Image src="/candidate2.png" width={200} height={5} alt="Candidate 2"/>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">Gabriel Smith</h2>
                    <p className="text-lg text-gray-600 mb-2">Uniting Voices, Shaping Tomorrow</p>
                    <p className="text-lg text-gray-600 mb-4">Age: 42</p>
                    <p className="text-lg text-gray-600 mb-4">City: Los Angeles</p>
                    <p className="text-lg text-gray-600 mb-4">Occupation: Lawyer</p>
                    <p className="text-lg text-gray-600 mb-6">Education: JD, Harvard Law School</p>
                    <p className="text-gray-700">
                        Gabriel Smith is a dedicated champion for social justice and equality. With a vision to foster a community where every individual has equitable access to resources and opportunities, John brings his extensive legal expertise in civil rights cases to the forefront of his campaign. His mission is clear: to dismantle systemic inequalities and promote inclusivity across all facets of governance. Through targeted policies aimed at supporting marginalized communities, enhancing healthcare and education accessibility, and driving sustainable economic growth, John aims to create a more just and equitable society for all.
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

export default Candidate2ProfilePage;
