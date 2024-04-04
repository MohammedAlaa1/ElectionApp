'use client'
import { useState } from 'react';
import candidates from '../data/candidates';
import Image from 'next/image';
import useUser from '../lib/useUser';
import axios from 'axios';

const Candidate4ProfilePage = () => {
    const [voteMessage, setVoteMessage] = useState('');
    const candidate = candidates[3]; 
    const { userInfo } = useUser();

    const handleVote = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/vote', { 
                email: userInfo.email,
                id: 4,
            });
            console.log({ email: userInfo.email });

            if (response.status === 200) {
                // Update the vote message
                setVoteMessage('Your vote was recorded successfully.');
                console.log('Vote recorded successfully.');
            }
            
        } catch (error) {
            console.log('Failed to record vote.');
            console.error('Failed to record vote:', error);
            setVoteMessage('You can not vote twice.');
        }
    };

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
                        {/* Display candidate image */}
                        <Image src={candidate.image} width={200} height={200} alt={candidate.name} />
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">{candidate.name}</h2>
                    <p className="text-lg text-gray-600 mb-2">{candidate.tagline}</p>
                    {/* Display candidate information */}
                    <p className="text-lg text-gray-600 mb-4">Age: {candidate.age}</p>
                    <p className="text-lg text-gray-600 mb-4">City: {candidate.city}</p>
                    <p className="text-lg text-gray-600 mb-4">Occupation: {candidate.occupation}</p>
                    <p className="text-lg text-gray-600 mb-4">Education: {candidate.education}</p>
                    <p className="text-gray-700">{candidate.description}</p>
                </div>
                {/* Display vote message */}
                <div className="flex justify-center mt-4">
                {voteMessage && <p className={voteMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}>{voteMessage}</p>}
                </div>
                {/* Vote for Me Button */}
                <div className="flex justify-center">
                    <button onClick={handleVote} className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
                        Vote for Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Candidate4ProfilePage;
