import React from 'react';
import { education } from '../../constants';
import Tilt from 'react-parallax-tilt';

const Education = () => {
    return (
        <section id="Education" className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans">
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    My academic background and educational qualifications
                </p>
            </div>

            {/* Education Cards */}
            <div className="space-y-10">
                {education.map((edu) => (
                    <Tilt
                        key={edu.id}
                        className="w-full"
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                        perspective={1000}
                        scale={1.02}
                        transitionSpeed={1000}
                        gyroscope={true}
                    >
                        <div className="bg-gray-900 backdrop-blur-md p-6 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* School Logo */}
                                <div className="md:w-1/6 flex justify-center">
                                    <img 
                                        src={edu.img} 
                                        alt={`${edu.school} logo`} 
                                        className="w-24 h-24 object-contain rounded-full border-2 border-[#8245ec] p-1"
                                    />
                                </div>
                                
                                {/* Education Details */}
                                <div className="md:w-5/6">
                                    <div className="flex flex-col md:flex-row justify-between mb-2">
                                        <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                                        <p className="text-[#8245ec] font-semibold">{edu.date}</p>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-300 mb-1">{edu.degree}</h4>
                                    <p className="text-green-400 font-medium mb-3">Grade: {edu.grade}</p>
                                    <p className="text-gray-400">{edu.desc}</p>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                ))}
            </div>
        </section>
    );
};

export default Education;