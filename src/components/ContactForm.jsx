"use client";

import React, { useState } from "react";
import "./ContactForm.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GoLocation } from "react-icons/go";
import { createLead } from "../DAL/create";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export default function ContactForm() {
    const [errors, setErrors] = useState({});
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
            const res = await createLead(formData);
            if (res.status === 201) {
                toast.success(res?.message || "Message sent successfully");
                setErrors({});

                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            }
            if (res?.status == 400) {
                const fieldErrors = {};
                res.missingFields.forEach((field) => {
                    fieldErrors[field.name] = field.message;
                });
                setErrors(fieldErrors);
            }
        } catch (err) {
            if (err?.status == 400) {
                const fieldErrors = {};
                err.missingFields.forEach((field) => {
                    fieldErrors[field.name] = field.message;
                });
                setErrors(fieldErrors);
                toast.error();
            }
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-wrapper">
                {/* Left Section */}
                <div className="contact-left">
                    <h1 className="contact-title">
                        We’re Here to
                        <br />
                        <span className="contact-highlight">Help </span>
                        You
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

                    <div className="social-links"> <a href="https://www.linkedin.com/company/womanara/" className="social-icon"> <FaLinkedinIn size={24} />
                    </a> <a href="https://www.facebook.com/Womanara-Foundation-114142357015520/" className="social-icon"> <FaFacebookF size={24} /> </a>
                        <a href="https://www.instagram.com/womanarafoundation/" className="social-icon"> <FaInstagram size={24} /> </a>
                    </div>

                </div>

                {/* Right Form */}
                <div className="contact-right">
                    <div className="form-card">
                        <form onSubmit={handleSubmit} className="form-content">

                            <div className="form-group">
                                <label>Your name</label>
                                {errors.name && <p className="error-msg">{errors.name}</p>}
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Smith"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Your phone</label>
                                {errors.phone && <p className="error-msg">{errors.phone}</p>}
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
                                {errors.email && <p className="error-msg">{errors.email}</p>}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Subject</label>
                                {errors.subject && <p className="error-msg">{errors.subject}</p>}
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
                                {errors.message && <p className="error-msg">{errors.message}</p>}
                                <textarea
                                    name="message"
                                    placeholder="Leave a message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <button type="submit" className="submit-btn">Send message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}
