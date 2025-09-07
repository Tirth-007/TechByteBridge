"use client"; // Important for App Router if this is a client component
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from 'react';

export default function Contact() {
  const [state, handleSubmitFormspree] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID); // You'll get this ID from Formspree

  // 1. State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    countryCode: "+44", // default to UK code
  });

  const [buttonText, setButtonText] = useState("Send Message");

  // const formRef = useRef(null);
  const [showThankYou, setShowThankYou] = useState(false);

  // 2. State for validation errors
  const [errors, setErrors] = useState({});

  useEffect(() => {
    let timer;
    // Optional: Clear form after successful submission (if not redirecting/showing success message)
    // Only clear if Formspree submission also succeeded
    if (state.succeeded) {
      setFormData({ name: "", email: "", message: "", phone: "", countryCode: "+44" }); // Reset form data
      setErrors({}); // Clear any validation errors
      setButtonText("Message Sent"); // Change button text to indicate success
      setShowThankYou(true); // Show thank you message

      setTimeout(() => {
        setButtonText("Send Message"); // Reset button text after a delay
        setShowThankYou(false); // Hide thank you message
      }, 3000); // Reset after 3 seconds

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [state.succeeded]); // Run effect when Formspree state changes


  // 3. onChange handler to update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error for the field as user types
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null, // Clear specific error
      }));
    }
  };


  // Basic email validation regex
  const validateEmail = (email) => {
    // Regex from https://emailregex.com/ (simple version)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // 4. Client-side validation logic
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    }

    if (!/^\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number (7–15 digits).";
      isValid = false;
    }


    setErrors(newErrors); // Update the errors state
    return isValid;
  };

  // 5. Custom onSubmit handler
  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser form submission

    if (validateForm()) {
      setButtonText("Sending..."); // Change button text to indicate submission in progress
      // If client-side validation passes, then submit to Formspree
      await handleSubmitFormspree(e); // Pass the event object to Formspree's handler


    }
  };


  return (
    <>
      {/* <Head><title>Contact | Tech Byte Bridge</title></Head> */}
      <Head>
        <title>Contact Us | Tech Byte Bridge</title>
        <meta
          name="description"
          content="Get in touch with Tech Byte Bridge. Contact us for web development, cloud integration, digital marketing, and analytics services. We respond within 24 hours."
        />
        <meta
          name="keywords"
          content="Contact Tech Byte Bridge, Web development UK, Cloud services, Digital marketing, SEO, Business analytics, Hire developers UK"
        />
        <meta name="author" content="Tech Byte Bridge" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Contact Tech Byte Bridge" />
        <meta
          property="og:description"
          content="Have a project in mind? Reach out to Tech Byte Bridge for web, cloud, and digital services. Let's build something great together."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/contact" />
        <meta property="og:image" content="https://yourdomain.com/preview-contact.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Tech Byte Bridge" />
        <meta
          name="twitter:description"
          content="Fill out our contact form to discuss your project. Web, cloud, and digital solutions tailored for your business growth."
        />
        <meta name="twitter:image" content="https://yourdomain.com/preview-contact.jpg" />
      </Head>

      <Navbar />
      <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">

        {/* Contact Intro */}
        <section className="relative bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white px-4 py-24 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight animate-fade-in">
              Let's Work Together
            </h1>
            <p className="text-lg md:text-xl mb-10 text-indigo-100 max-w-2xl mx-auto animate-fade-in-delay">
              Feel free to reach out by filling the form below.
              {/* Fill out the form below or drop us a message. We usually respond within 24 hours. */}
            </p>
          </div>
        </section>


        {/* Contact Form Section */}
        <section className="py-20 px-4 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Let’s Connect</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a question or project in mind? Fill out the form below and we’ll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            {showThankYou ? (
              <div className="text-center text-green-600">
                <h2 className="text-2xl font-bold mb-4">✅ Thank you for contacting us!</h2>
                <p>We’ll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} name="contact" method="POST" className="space-y-6">

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => {
                      const noNumbers = e.target.value.replace(/[0-9]/g, "");
                      setFormData((prev) => ({ ...prev, name: noNumbers }));
                      if (errors.name) setErrors((prev) => ({ ...prev, name: null }));
                    }}
                    required
                    className={`w-full px-4 py-3 border rounded-xl bg-gray-50 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition ${errors.name ? "border-red-500" : ""
                      }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-xl bg-gray-50 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition ${errors.email ? "border-red-500" : ""
                      }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-xl bg-gray-50 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition ${errors.message ? "border-red-500" : ""
                      }`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>



                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium">Phone</label>
                  <div className="flex flex-col sm:flex-row xs:flex-row gap-2">
                    <select
                      id="countryCode"
                      value={formData.countryCode}
                      onChange={(e) => setFormData((prev) => ({ ...prev, countryCode: e.target.value }))}
                      className="sm:w-full xs:w-1/4 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border rounded-lg sm:rounded-xl bg-gray-50 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                    >
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+971">🇨🇦 +1</option>
                    </select>

                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      pattern="\d{7,15}"
                      maxLength={15}
                      onChange={(e) => {
                        const onlyNums = e.target.value.replace(/\D/g, "");
                        setFormData((prev) => ({ ...prev, phone: onlyNums }));
                      }}
                      required
                      className={`w-full xs:w-3/4 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border rounded-lg sm:rounded-xl bg-gray-50 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition ${errors.phone ? "border-red-500" : ""
                        }`}
                    />
                  </div>

                  <input
                    type="hidden"
                    name="Full Phone Number"
                    value={`${formData.countryCode} ${formData.phone}`}
                  />

                  {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-transform duration-300 hover:scale-105 shadow-lg"
                  >
                    {buttonText}
                  </button>
                </div>

                <ValidationError errors={state.errors} />
              </form>
            )}
          </div>

          {/* Extra Contact Info */}
          <div className="text-center mt-8 text-gray-600 dark:text-gray-400">
            <p>📧 hello@techbytebridge.com</p>
            <p>📞 +44 7778 170 089</p>
          </div>
        </section>


      </main>
      <BackToTop />
      <Footer />
    </>
  )
}
