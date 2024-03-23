// AboutPage.js

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-black">About Our Election App</h1>
                <p className="text-lg text-gray-800 mb-4">
                    Welcome to our election app! We're dedicated to providing transparent and fair elections for all.
                </p>
                <p className="text-lg text-gray-800 mb-4">
                    Our mission is to empower voters, facilitate candidate participation, and ensure the integrity of the electoral process.
                </p>
                <h2 className="text-2xl font-bold mb-4 text-black">Our Team</h2>
                <ul className="list-disc pl-6 text-lg text-gray-800 mb-8">
                    <li>John Doe - Founder and CEO</li>
                    <li>Jane Smith - Head of Operations</li>
                    <li>Michael Johnson - Lead Developer</li>
                </ul>
                <h2 className="text-2xl font-bold mb-4 text-black">Goals and Achievements</h2>
                <p className="text-lg text-gray-800 mb-4">
                    Since our inception, we've successfully conducted multiple elections with high voter turnout and satisfaction rates.
                </p>
                <p className="text-lg text-gray-800 mb-4">
                    Our goals include expanding voter education initiatives, enhancing accessibility features, and improving security measures.
                </p>
                <h2 className="text-2xl font-bold mb-4 text-black">Upcoming Plans</h2>
                <p className="text-lg text-gray-800 mb-4">
                    We're continuously working on updates to enhance user experience, streamline administrative processes, and strengthen data privacy.
                </p>
                {/* Add more sections and content as needed */}
            </div>
        </div>
    );
};

export default AboutPage;
