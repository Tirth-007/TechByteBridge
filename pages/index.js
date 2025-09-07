import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import BackToTop from '../components/BackToTop'
import Image from 'next/image'; // Make sure to import Image from next/image
// import { Mail, User, MessageSquare } from 'lucide-react'
import { Rocket, Cloud, BarChart3, Monitor } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tech Byte Bridge | Modern Web & Cloud Solutions</title>
        <meta
          name="description"
          content="UK-based technology partner providing modern websites, cloud integration, and digital strategies tailored for startups and SMEs."
        />
        <meta name="keywords" content="web development, cloud integration, digital marketing, UK" />
        <meta property="og:title" content="Tech Byte Bridge | Modern Web & Cloud Solutions" />
        <meta property="og:description" content="Smart websites, cloud, and digital services for startups and businesses in the UK." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:image" content="/preview.png" />
      </Head>


      <Navbar />

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white py-28 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-in">
            Smart Solutions, Delivered Globally
          </h1>
          <p className="text-lg md:text-xl mb-10 text-indigo-100 max-w-2xl mx-auto animate-fade-in-delay">
            We design, build, and support high-performing websites and cloud-powered systems for growing organisations. Trusted by UK startups, SMEs, and agencies for fast, reliable, and scalable solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition-transform duration-300 hover:scale-110"
          >
            Get a Free Consultation
          </a>
        </div>
      </header>


      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Services</h2>
          <p className="mb-12 text-gray-600 dark:text-gray-300">From idea to execution, we deliver results that grow your business.</p>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            {/* Service Card */}
            <div className="group bg-white/80 dark:bg-gray-800/70 backdrop-blur rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 group-hover:bg-indigo-500 transition-colors">
                <Monitor className="text-indigo-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Web Design & Development</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Modern, mobile-first, SEO-friendly websites that convert visitors into customers.</p>
            </div>

            <div className="group bg-white/80 dark:bg-gray-800/70 backdrop-blur rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 group-hover:bg-green-500 transition-colors">
                <Cloud className="text-green-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Cloud Integration</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Automate operations and streamline access to your data from anywhere.</p>
            </div>

            <div className="group bg-white/80 dark:bg-gray-800/70 backdrop-blur rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 group-hover:bg-orange-500 transition-colors">
                <Rocket className="text-orange-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Digital Marketing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Improve visibility and engagement with data-driven campaigns.</p>
            </div>

            <div className="group bg-white/80 dark:bg-gray-800/70 backdrop-blur rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 group-hover:bg-purple-500 transition-colors">
                <BarChart3 className="text-purple-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Analytics & Reporting</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Understand your customers and make smarter decisions.</p>
            </div>

          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12 text-gray-900 dark:text-white">
            Why Choose <span className="text-blue-600">Tech Byte Bridge?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                text: "UK-Based Support — Easy communication, fast timezone-aligned support.",
              },
              {
                text: "Scalable & Future-Proof Code — We build systems that grow with you.",
              },
              {
                text: "Transparent Process — No surprises, clear pricing and timelines.",
              },
              {
                text: "Mobile-First Design — Optimised for all devices.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/70 dark:bg-gray-800/60 rounded-2xl shadow-lg backdrop-blur-sm hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
                  ✅ {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Highlights */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12 text-gray-900 dark:text-white">
            Proven <span className="text-blue-600">Results</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "🚀",
                text: "Helped a local retailer grow website traffic by 60% within 3 months.",
              },
              {
                emoji: "🔐",
                text: "Migrated an agency's system to the cloud with 99.9% uptime guarantee.",
              },
              {
                emoji: "📊",
                text: "Created real-time dashboards for a fintech startup to improve decision-making.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-white/70 dark:bg-gray-800/60 rounded-2xl shadow-lg backdrop-blur-sm hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <p className="text-5xl mb-4">{item.emoji}</p>
                <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-800 dark:text-white">
            Trusted By
          </h2>

          <div className="flex justify-center flex-wrap gap-8">
            {["/trustlogo.png"].map((logo, i) => (
              <div
                key={i}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg p-1 rounded-2xl shadow-lg transition-transform transform hover:scale-105"
              >
                <Image
                  src={logo}
                  alt={`Client Logo ${i + 1}`}
                  width={120}
                  height={80}
                  className="h-16 md:h-20 mx-auto grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Decorative gradient blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300/40 dark:bg-purple-700/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300/40 dark:bg-blue-700/30 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Tech We Use
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {[
              { name: "Next.js", icon: "⚡" },
              { name: "Tailwind CSS", icon: "🎨" },
              { name: "Netlify", icon: "☁️" },
              { name: "React", icon: "⚛️" },
            ].map((tech, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-6 hover:-translate-y-2"
              >
                <span className="text-4xl mb-3">{tech.icon}</span>
                <span className="text-lg font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />



      {/* Client Trust Section */}
      <section className="bg-gray-100 dark:bg-gray-900 py-12 md:py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-8 sm:mb-12">
            Why Clients Trust Us
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {[
              { value: "100+", label: "Satisfied Clients", icon: "👥" },
              { value: "150+", label: "Projects Completed", icon: "📂" },
              { value: "4.9★", label: "Client Rating", icon: "⭐" },
              { value: "5+", label: "Years of Experience", icon: "⏳" },
              { value: "4+", label: "Countries", icon: "🌍" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 rounded-xl md:rounded-2xl bg-white/70 dark:bg-gray-800/70 shadow-md md:shadow-lg backdrop-blur-md 
               hover:scale-105 transition-transform duration-300"
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                  {item.value}
                </p>
                <p className="mt-2 text-sm sm:text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 flex items-center justify-center gap-1 sm:gap-2">
                  <span className="text-base sm:text-lg md:text-xl">{item.icon}</span> {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-200/20 via-purple-200/20 to-pink-200/20 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 blur-3xl" />
      </section>



      {/* Final CTA */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white px-4 py-10 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight animate-fade-in">
            Ready to Build a Smarter Digital Presence?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-indigo-100 max-w-2xl mx-auto animate-fade-in-delay">
            Let's talk about your goals and how we can help you reach them.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition-transform duration-300 hover:scale-110"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </section>


      <BackToTop />
      <Footer />
    </>
  )
}
