import Image from "next/image";

const ElectionResultsPage = () => {
    return (
        <div className="min-h-screen bg-gray-900">
            {/* Header */}
            <header className="bg-gray-800 py-12">
                <div className="max-w-4xl mx-auto px-4 text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Election Results</h1>
                    <p className="text-lg">
                        Results of the recent election between the four candidates.
                    </p>
                </div>
            </header>

            {/* Candidate Results */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Candidate 1 */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center justify-center mb-6">
                            <Image src="/candidate1.png" width={200} height={5} alt="Candidate 1"/>
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-black">Liam Thompson</h2>
                        <p className="text-gray-600 mb-4">Votes: 35%</p>
                        <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-4">
                            <div className="w-full h-full bg-gray-200 absolute"></div>
                            <div className="h-full bg-green-500 absolute" style={{ width: '35%' }}></div>
                        </div>
                    </div>

                    {/* Candidate 2 */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center justify-center mb-6 pt-4">
                            <Image src="/candidate2.png" width={200} height={10} alt="Candidate 2"/>
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-black">Gabriel Smith</h2>
                        <p className="text-gray-600 mb-4">Votes: 28%</p>
                        <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-4">
                            <div className="w-full h-full bg-gray-200 absolute"></div>
                            <div className="h-full bg-blue-500 absolute" style={{ width: '28%' }}></div>
                        </div>
                    </div>

                    {/* Candidate 3 */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center justify-center mb-6">
                            <Image src="/candidate3.png" width={200} height={5} alt="Candidate 3"/>
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-black">Alexander Rodriguez</h2>
                        <p className="text-gray-600 mb-4">Votes: 20%</p>
                        <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-4">
                            <div className="w-full h-full bg-gray-200 absolute"></div>
                            <div className="h-full bg-yellow-500 absolute" style={{ width: '20%' }}></div>
                        </div>
                    </div>

                    {/* Candidate 4 */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center justify-center mb-6">
                            <Image src="/candidate5.png" width={193} height={5} alt="Candidate 5"/>
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-black">Benjamin Patel</h2>
                        <p className="text-gray-600 mb-4">Votes: 17%</p>
                        <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-4">
                            <div className="w-full h-full bg-gray-200 absolute"></div>
                            <div className="h-full bg-red-500 absolute" style={{ width: '17%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Winner Section */}
            <div className="max-w-4xl mx-auto px-4 py-12 text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Winner</h2>
                <div className="bg-white rounded-lg shadow-lg p-6 inline-block">
                    <h3 className="text-xl font-bold mb-2 text-black">Liam Thompson</h3>
                    <div className="flex items-center justify-center mb-6">
                        <Image src="/candidate1.png" width={200} height={5} alt="Candidate 1"/>
                    </div>
                    <p className="text-gray-600 mb-4">Congratulations!</p>
                    <p className="text-gray-600 mb-4">Votes: 35%</p>
                    <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-4">
                        <div className="w-full h-full bg-gray-200 absolute"></div>
                        <div className="h-full bg-green-500 absolute" style={{ width: '35%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElectionResultsPage;
