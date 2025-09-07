"use client";
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Arpit Patel",
    role: "Founder & Project Manager",
    bio: "I’m Arpit Patel, Founder and Project Manager at Tech Byte Bridge. I bring together people, process, and technology to turn ideas into reality and ensure every project runs smoothly — from the first conversation to the final delivery. For me, it’s not just about managing projects, but about building lasting relationships and helping businesses grow through smart, future-ready solutions.",
    img: "/arpitpatel.png",
  },
  {
    name: "Brijesh Karnavat",
    role: "Co-founder & Digital Marketing Strategist",
    bio: "“I’m Brijesh Karnavat, Co-founder and Digital Marketing Strategist at Tech Byte Bridge. I craft data-driven campaigns that boost visibility, engagement, and conversions — while keeping every brand’s voice authentic and impactful. For me, marketing isn’t just about impressions; it’s about delivering measurable growth and long-term success for businesses.",
    img: "/brijeshpatel.png",
  },
  {
    name: "Tirth Barot",
    role: "Digital Solutions Architect",
    bio: "As a Digital Solutions Architect, I build modern, mobile-first websites that don’t just look great but also perform. By integrating cloud solutions, I help businesses streamline operations and stay connected anywhere. With clear analytics and reporting, I turn data into insights that guide smarter decisions and long-term growth.",
    img: "/tirthbarot.png",
  },
];

export default function About() {

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % teamMembers.length);
  const prev = () => setIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

  return (
    <>
      <Head>
        <title>About | Tech Byte Bridge</title>
        <meta
          name="description"
          content="Learn about Tech Byte Bridge, a UK-based digital solutions company. Meet our team of experts delivering modern websites, cloud infrastructure, and digital strategies that help businesses grow."
        />
        <meta
          name="keywords"
          content="About Tech Byte Bridge, UK digital solutions, web development team, cloud solutions UK, digital marketing experts, scalable tech solutions"
        />
        <meta property="og:title" content="About Us | Tech Byte Bridge" />
        <meta
          property="og:description"
          content="Meet the Tech Byte Bridge team — experts in web, cloud, and digital services, helping UK businesses scale with modern technology."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <meta property="og:image" content="https://yourdomain.com/og-about.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Tech Byte Bridge" />
        <meta
          name="twitter:description"
          content="Meet the Tech Byte Bridge team — experts in web, cloud, and digital growth."
        />
        <meta name="twitter:image" content="https://yourdomain.com/og-about.jpg" />
      </Head>


      <Navbar />
      {/* max-w-5xl mx-auto px-4 py-16 */}
      <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        {/* Page Title */}


        <header className="relative bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white px-4 py-20 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-in">
              About Tech Byte Bridge
            </h1>
            <p className="text-lg md:text-xl mb-10 text-indigo-100 max-w-2xl mx-auto animate-fade-in-delay">
              Empowering business with smart, scalable, and secure digital solutions.
            </p>
          </div>
        </header>


        {/* Who We Are */}
        <section className="py-20 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Tech Byte Bridge</span> is a UK-based digital technology partner helping
            startups, SMEs, and growing organisations build modern websites,
            cloud infrastructure, and digital strategies.
            With a focus on <span className="font-medium text-indigo-600 dark:text-indigo-400">performance</span>,
            <span className="font-medium text-purple-600 dark:text-purple-400"> security</span>, and
            <span className="font-medium text-pink-600 dark:text-pink-400"> user-centric design</span>,
            we deliver scalable solutions that drive real results.
          </p>
        </section>

        {/* Mission */}
        <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-800 dark:text-white">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              To simplify technology for businesses and enable them to grow
              with smart, cost-effective, and future-ready solutions.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-3 flex items-center">
                💡 <span className="ml-2">Clarity over Complexity</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We explain things in simple terms and deliver transparent solutions.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-3 flex items-center">
                🔐 <span className="ml-2">Integrity & Trust</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We work with honesty, timelines, and clear communication.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-3 flex items-center">
                📈 <span className="ml-2">Performance-driven</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every decision is made with your growth and ROI in mind.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-3 flex items-center">
                🤝 <span className="ml-2">Long-term Partnerships</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're not just service providers — we’re collaborators.
              </p>
            </div>
          </div>
        </section>


        {/* Meet the Team */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-100 dark:bg-gray-800 text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Meet the Team</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 sm:mb-10 md:mb-14 max-w-3xl mx-auto">
              We're a lean team of designers, developers, and strategists with years of experience
              in web, cloud, and digital growth.
            </p>

            <div className="relative flex items-center justify-center">
              {/* Left Preview - Hidden on smallest screens, shown on larger */}
              <motion.div
                key={`prev-${index}`}
                className="absolute z-0 left-0 sm:left-2 md:left-0 h-20 w-14 sm:h-28 sm:w-16 md:h-32 md:w-20 lg:h-40 lg:w-24 rounded-lg md:rounded-xl overflow-hidden opacity-30 sm:opacity-40 scale-90"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 0.3 }}
                exit={{ x: -30, opacity: 0 }}
              >
                <img
                  src={teamMembers[(index - 1 + teamMembers.length) % teamMembers.length].img}
                  alt="prev"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Active Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  className="relative z-10 flex flex-col items-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg md:shadow-xl rounded-2xl md:rounded-3xl overflow-hidden max-w-xs sm:max-w-sm md:max-w-2xl w-full border border-gray-200 dark:border-gray-700 mx-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={teamMembers[index].img}
                    alt={teamMembers[index].name}
                    className="mt-6 mx-6 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover aspect-square rounded-full shadow-md ring-2 sm:ring-4 ring-indigo-500/20 hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4 sm:p-6 text-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{teamMembers[index].name}</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 text-sm sm:text-base mb-2">{teamMembers[index].role}</p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {teamMembers[index].bio}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Right Preview - Hidden on smallest screens, shown on larger */}
              <motion.div
                key={`next-${index}`}
                className="absolute z-0 right-0 sm:right-2 md:right-0 h-20 w-14 sm:h-28 sm:w-16 md:h-32 md:w-20 lg:h-40 lg:w-24 rounded-lg md:rounded-xl overflow-hidden opacity-30 sm:opacity-40 scale-90"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 0.3 }}
                exit={{ x: 30, opacity: 0 }}
              >
                <img
                  src={teamMembers[(index + 1) % teamMembers.length].img}
                  alt="next"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Controls - Repositioned for mobile */}
              <button
                onClick={prev}
                className="absolute -left-3 sm:-left-4 md:-left-10 lg:-left-14 bg-white/70 dark:bg-gray-700/70 backdrop-blur-md text-indigo-600 dark:text-white p-2 sm:p-3 rounded-full shadow-md hover:scale-110 transition"
                aria-label="Previous team member"
              >
                <ChevronLeft size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={next}
                className="absolute -right-3 sm:-right-4 md:-right-10 lg:-right-14 bg-white/70 dark:bg-gray-700/70 backdrop-blur-md text-indigo-600 dark:text-white p-2 sm:p-3 rounded-full shadow-md hover:scale-110 transition"
                aria-label="Next team member"
              >
                <ChevronRight size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </section>


        {/* Call to Action */}
        <section className="relative bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white px-4 py-10 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight animate-fade-in">
              Let's Discuss Your Goals
            </h2>
            <p className="text-lg md:text-xl mb-10 text-indigo-100 max-w-2xl mx-auto animate-fade-in-delay">
              Find out how Tech Byte Bridge can help your business grow through digital transformation.
            </p>
            <a
              href="/contact"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition-transform duration-300 hover:scale-110"
            >
              Get in Touch
            </a>
          </div>
        </section>


      </main>
      <BackToTop />
      <Footer />
    </>
  )
}
