import React, { useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Replace these with your actual EmailJS service ID, template ID, and public key
        emailjs.sendForm(
            'YOUR_SERVICE_ID', // Replace with your service ID
            'YOUR_TEMPLATE_ID', // Replace with your template ID
            formRef.current,
            'YOUR_PUBLIC_KEY' // Replace with your public key
        )
            .then(() => {
                setLoading(false);
                toast.success('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
                toast.error('Failed to send message. Please try again.');
            });
    };

    return (
        <section id="contact" className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans">
            <ToastContainer position="bottom-right" theme="dark" />

            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">CONTACT ME</h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    Get in touch with me for collaborations or opportunities
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-10">
                {/* Contact Information */}
                <div className="md:w-1/3 space-y-6">
                    <div className="bg-gray-900 backdrop-blur-md p-6 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
                        <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#8245ec] p-3 rounded-full">
                                    <FaEnvelope className="text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Email</p>
                                    <p className="text-white">somnathgatkul096@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-[#8245ec] p-3 rounded-full">
                                    <FaPhone className="text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Phone</p>
                                    <p className="text-white">+91 8421339621</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-[#8245ec] p-3 rounded-full">
                                    <FaMapMarkerAlt className="text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Location</p>
                                    <p className="text-white">Pune, Maharashtra, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="md:w-2/3">
                    <div className="bg-gray-900 backdrop-blur-md p-6 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
                        <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-400 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8245ec]"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-400 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8245ec]"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-400 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8245ec]"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-gradient-to-r from-purple-500 to-[#8245ec] text-white py-3 px-6 rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center justify-center"
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;