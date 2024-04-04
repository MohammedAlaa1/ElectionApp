'use client'
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const ElectionResultsPage = () => {
    const [candidates, setCandidates] = useState([])
    const [sum, setSum] = useState(0)
    const [winner, setWinner] = useState<any>({});
    
    const handelResult = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/result');
            setCandidates(response.data);
            const add = response.data.reduce((acc: any, candidate: { votes: any; }) => acc + candidate.votes, 0);
            setSum(add)
            console.log('number of votes', candidates, sum);
        
            // Calculate the winner based on the candidate with the most votes
            let maxVotes = 0;
            candidates.forEach((candidate: any) => {
                if (candidate.votes > maxVotes) {
                    maxVotes = candidate.votes
                    setWinner(candidate)
                }
            });  
            console.log(winner)
        
        } catch (error) {
            console.error('Error fetching candidates:', error);
        }
    };
    

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
                            <Image src={"/candidate1.png"} width={200} height={5} alt="Candidate 1"/>
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-black">Liam Thompson</h2>
                        <p className="text-gray-600 mb-4">Votes: { 
                        (((candidates.find((candidate: any) => candidate.id === 1) as any)?.votes ?? 0) / sum * 100).toFixed(2)}%
                        </p>
                        <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-4">
                            <div className="w-full h-full bg-gray-200 absolute"></div>
                            <div className="h-full bg-green-500 absolute" 
                            style={{ width: (((candidates.find((candidate: any) => candidate.id === 1) as any)?.votes ?? 0) / sum * 100).toFixed(2) + '%' }}>
                            </div>
                        </div>
                    </div>

                    {/* Candidate 2 */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center justify-center mb-6 pt-4">
                            <Image src="/candidate2.png" width={200} height={10} alt="Candidate 2"/>
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-black">Gabriel Smith</h2>
                        <p className="text-gray-600 mb-4">Votes: { 
                        (((candidates.find((candidate: any) => candidate.id === 2) as any)?.votes ?? 0) / sum * 100).toFixed(2)}%
                        </p>
                        <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-4">
                            <div className="w-full h-full bg-gray-200 absolute"></div>
                            <div className="h-full bg-green-500 absolute" 
                            style={{ width: (((candidates.find((candidate: any) => candidate.id === 2) as any)?.votes ?? 0) / sum * 100).toFixed(2) + '%' }}>
                            </div>
                        </div>
                    </div>

                    {/* Candidate 3 */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center justify-center mb-6">
                            <Image src="/candidate3.png" width={200} height={5} alt="Candidate 3"/>
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-black">Alexander Rodriguez</h2>
                        <p className="text-gray-600 mb-4">Votes: { 
                        (((candidates.find((candidate: any) => candidate.id === 3) as any)?.votes ?? 0) / sum * 100).toFixed(2)}%
                        </p>
                        <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-4">
                            <div className="w-full h-full bg-gray-200 absolute"></div>
                            <div className="h-full bg-green-500 absolute" 
                            style={{ width: (((candidates.find((candidate: any) => candidate.id === 3) as any)?.votes ?? 0) / sum * 100).toFixed(2) + '%' }}>
                            </div>
                        </div>
                    </div>

                    {/* Candidate 4 */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center justify-center mb-6">
                            <Image src="/candidate5.png" width={193} height={5} alt="Candidate 5"/>
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-black">Benjamin Patel</h2>
                        <p className="text-gray-600 mb-4">Votes: { 
                        (((candidates.find((candidate: any) => candidate.id === 4) as any)?.votes ?? 0) / sum * 100).toFixed(2)}%
                        </p>
                        <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-4">
                            <div className="w-full h-full bg-gray-200 absolute"></div>
                            <div className="h-full bg-green-500 absolute" 
                            style={{ width: (((candidates.find((candidate: any) => candidate.id === 4) as any)?.votes ?? 0) / sum * 100).toFixed(2) + '%' }}>
                            </div>
                        </div>
                    </div>

                    {/* Show Result Button */}
                </div>
                <div className="flex justify-center pt-5">
                        <button onClick={handelResult} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Show Result
                        </button>
                </div>
            </div>

            {winner && winner.votes && (
                <div className="max-w-4xl mx-auto px-4 py-12 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-white">Winner</h2>
                    <div className="bg-white rounded-lg shadow-lg p-6 inline-block">
                        <h3 className="text-xl font-bold mb-2 text-black">{winner.name}</h3>
                        <div className="flex items-center justify-center mb-6">
                            <Image src={winner.imagePath} width={200} height={5} alt={winner.name}/>
                        </div>
                        <p className="text-gray-600 mb-4">Congratulations!</p>
                        <p className="text-gray-600 mb-4">Votes: {(winner.votes.toFixed(2)/sum*100).toFixed(2)}%</p>
                        <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-4">
                            <div className="w-full h-full bg-gray-200 absolute"></div>
                            <div className="h-full bg-green-500 absolute" style={{ width: candidates.length >= 3 ? `${(winner.votes / sum * 100).toFixed(2)}%` : '0%' }}></div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default ElectionResultsPage;
