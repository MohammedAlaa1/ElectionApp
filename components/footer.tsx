import Link from "next/link";
import {
    FiGithub,
    FiTwitter,
    FiLinkedin,
    FiGlobe,
    FiYoutube,
    } from "react-icons/fi";

const socialLinks = [
        {
            id: 1,
            icon: <FiGlobe />,
            url: "https://www.stoman.me/",
        },
        {
            id: 2,
            icon: <FiGithub />,
            url: "https://github.com/",
        },
        {
            id: 3,
            icon: <FiTwitter />,
            url: "https://twitter.com/",
        },
        {
            id: 4,
            icon: <FiLinkedin />,
            url: "https://www.linkedin.com/in/",
        },
        {
            id: 5,
            icon: <FiYoutube />,
            url: "https://www.youtube.com/c/",
        },
        ];

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <Link href="/about"><h3 className="text-xl font-semibold text-white mb-4">About Us</h3></Link>
                <p className="text-gray-300 mb-4">We are dedicated to providing transparent and secure election services to our users.</p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                <p className="text-gray-300 mb-4">Email: info@electionsystem.com</p>
                <p className="text-gray-300 mb-4">Phone: +1234567890</p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex justify-center items-center space-x-4">
                <ul className="flex gap-4 sm:gap-8">
                    {socialLinks.map((link) => (
                    <a
                        href={link.url}
                        target="__blank"
                        key={link.id}
                        className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
                    >
                        <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
                    </a>
                    ))}
                </ul>
        </div>
            </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
