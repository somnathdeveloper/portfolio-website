import React from 'react';
import { projects } from '../../constants';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const WorkProjects = () => {
    return (
        <section id="workProjects" className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans">
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">PROJECTS</h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    Showcasing my technical skills through various projects
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <Tilt
                        key={project.id}
                        className="h-full"
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        gyroscope={true}
                    >
                        <div className="bg-gray-900 backdrop-blur-md rounded-2xl overflow-hidden h-full border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] flex flex-col">
                            {/* Project Image */}
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            
                            {/* Project Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span 
                                            key={index} 
                                            className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Links */}
                                <div className="flex gap-4">
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-white hover:text-[#8245ec] transition-colors"
                                    >
                                        <FaGithub size={20} />
                                        <span>Code</span>
                                    </a>
                                    <a 
                                        href={project.webapp} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-white hover:text-[#8245ec] transition-colors"
                                    >
                                        <FaExternalLinkAlt size={18} />
                                        <span>Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                ))}
            </div>
        </section>
    );
};

export default WorkProjects;