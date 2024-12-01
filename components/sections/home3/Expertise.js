'use client';

import { useState } from "react";
import Image from "next/image";

export default function Expertise() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "Tax Management", // Default service selected
    });
    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            await emailjs.send(
                "service_5b2kdcp",
                "template_gi615z7",
                {
                    ...formData,
                    to_email: "bonifacecoutinho@gmail.com",
                },
                "_9cuYkV2p6GKYAmFR"
            );
            setStatus("sent");
            setFormData({
                name: "",
                email: "",
                phone: "",
                service: "Tax Management",
            });
        } catch (error) {
            console.error("Error sending email:", error);
            setStatus("error");
        }
    };

    return (
        <section className="expertise-section alternat-2 p_relative bg-color-1">
            <div className="pattern-layer">
                <div
                    className="pattern-3"
                    style={{ backgroundImage: 'url(assets/images/shape/shape-36.png)' }}
                ></div>
            </div>
            <figure className="image-layer">
                <Image
                    height={618}
                    width={518}
                    src="/assets/images/resource/men-1.png"
                    alt=""
                />
            </figure>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 offset-lg-6 content-column">
                        <div className="content_block_four">
                            <div className="content-box p_relative ml_30 mt_20 centred">
                                <h3>Request for Our Free <br />Consultation</h3>
                                <div className="form-inner">
                                    <form onSubmit={handleSubmit} className="default-form">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Your name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email address"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    placeholder="Phone number"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <div className="select-box">
                                                    <select
                                                        name="service"
                                                        className="selectmenu"
                                                        value={formData.service}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="Tax Management">Tax Management</option>
                                                        <option value="Strategy & Planning">Strategy & Planning</option>
                                                        <option value="Bookkeeping">Bookkeeping</option>
                                                        <option value="Forensic Audit">Forensic Audit</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                <button
                                                    type="submit"
                                                    className={`theme-btn-one ${status === "sending" ? "opacity-50 cursor-not-allowed" : ""}`}
                                                    disabled={status === "sending"}
                                                >
                                                    {status === "idle" && "Send Request"}
                                                    {status === "sending" && "Sending..."}
                                                    {status === "sent" && "Sent!"}
                                                    {status === "error" && "Error. Try again."}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
