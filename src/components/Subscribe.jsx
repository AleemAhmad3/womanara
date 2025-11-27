"use client";

import React, { useState } from "react";
import "./Subscribe.css";
import { toast } from "react-toastify";
import { createSubscriber } from "../DAL/create";

export default function Subscribe() {
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState("");

    const handleSubscribe = async () => {



        try {
            const res = await createSubscriber({ email });

            if (res?.status === 201) {
                toast.success(res?.message || "Subscribed successfully!");
                setErrors({});
                setEmail("");
            } if (res?.status == 400) {
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
        <div className="subscribe">
            <h2>Stay Connected</h2>
            <p className="desc1">
                Stay updated on Womanara Foundation programs and events. Enter your email to receive news, stories, and ways to support women's health and cancer care. The updates keep you close to the work.
            </p>
            <p className="desc2">
                You track progress in real time. You see new campaigns and fresh efforts. The foundation shows the impact of your support. The goal is to improve access to care in areas with limited help. You take part in better health results for women who need it most.
            </p>

            <div className="subscribe-box">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="subscribe-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="subscribe-btn" onClick={handleSubscribe}>
                    Subscribe
                </button>
            </div>
            {errors.email && <p className="error-msg">{errors.email}</p>}
        </div>
    );
}
