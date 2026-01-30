import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 py-10 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans">
            <div className="container mx-auto">
                {/* Social Links */}
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://github.com/somnathdeveloper?tab=overview&from=2024-12-01&to=2024-12-31"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#8245ec] transition-colors"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/somnath-gatkul/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#8245ec] transition-colors"
                    >
                        <FaLinkedin size={24} />
                    </a>


                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        &copy; {currentYear} Somnath Gatkul. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
