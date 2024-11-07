// pages/contact.tsx
"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "@/components/style/contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1 className="contact-heading">Contact Me</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="form-input"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="form-input"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here"
              className="form-input"
              rows={5}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" className="social-icon"> <FaTwitter /></a>
          <a href="https://linkedin.com/in/samra-shaikh-7164142b6" target="_blank" className="social-icon"><FaLinkedin /></a>
          <a href="https://github.com/Samrasahaikh" target="_blank" className="social-icon"><FaGithub /></a>
          <a href="https://facebook.com/samra.shaikh.14289" target="_blank" className="social-icon"><FaFacebook /></a>
        </div>
      </div>
    </div>
  );
}
