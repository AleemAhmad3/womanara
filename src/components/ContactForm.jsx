"use client";

import React, { useState } from "react";
import "./ContactForm.css";

// React Icons
import { AiOutlineMail, AiOutlinePhone, AiOutlineInstagram, AiOutlineFacebook, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { createLead } from "../DAL/create";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await createLead(formData);
            console.log("Lead created successfully:", response);
            alert("Message sent successfully 👌");

            // Reset form
            setFormData({
                name: "",
                phone: "",
                email: "",
                subject: "",
                message: "",
            });

        } catch (error) {
            console.error("Error sending lead:", error);
            alert("Something went wrong ❌");
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-wrapper">

                {/* Left Info Section */}
                <div className="contact-left">
                    <h1 className="contact-title">
                        Let's talk on
                        <br />
                        <span className="contact-highlight">something great</span>
                        <br />
                        together
                    </h1>

                    <div className="contact-info">
                        <div className="contact-info-item">
                            <AiOutlineMail className="contact-icon" />
                            <a href="mailto:info@womanarafoundation.org">info@womanarafoundation.org</a>
                        </div>
                        <div className="contact-info-item">
                            <AiOutlinePhone className="contact-icon" />
                            <a href="tel:+34123456789">+34 123 456 789</a>
                        </div>
                        <div className="contact-info-item">
                            <GoLocation className="contact-icon" />
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://www.linkedin.com/company/womanara/" className="social-icon" aria-label="LinkedIn">
                            <FaLinkedinIn size={24} />
                        </a>
                        <a href="https://www.facebook.com/Womanara-Foundation-114142357015520/" className="social-icon" aria-label="Facebook">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="https://www.instagram.com/womanarafoundation/" className="social-icon" aria-label="Instagram">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>

                {/* Right Form Section */}
                <div className="contact-right">
                    <div className="form-card">
                        <form onSubmit={handleSubmit} className="form-content">

                            <div className="form-group">
                                <label htmlFor="name">Your name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Smith"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Your phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+1 (555) 123-4567"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email@gmail.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Your message</label>
                                <textarea
                                    name="message"
                                    placeholder="Leave a message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <button type="submit" className="submit-btn">
                                Send message
                            </button>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
