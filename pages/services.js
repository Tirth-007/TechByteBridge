import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

const ServiceCard = ({ title, description }) => (
  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md 
                    hover:shadow-xl transition duration-300 ease-in-out 
                    hover:scale-105">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

export default function Services() {
  return (
    <>
      {/* <Head><title>Services | Tech Byte Bridge</title></Head> */}
      <Head>
        <title>Services | Tech Byte Bridge</title>
        <meta
          name="description"
          content="Explore Tech Byte Bridge services: web design & development, cloud integration, digital marketing, and analytics. Scalable, secure, and growth-focused solutions for businesses in the UK and beyond."
        />
        <meta
          name="keywords"
          content="Web design UK, Web development, Cloud integration services, Digital marketing, SEO services, Analytics reporting, Business digital solutions"
        />
        <meta name="author" content="Tech Byte Bridge" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Services | Tech Byte Bridge" />
        <meta
          property="og:description"
          content="Tech Byte Bridge offers tailored digital services — from web design to cloud integration, digital marketing, and analytics. Future-ready solutions to scale your business."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/services" />
        <meta property="og:image" content="https://yourdomain.com/preview-services.jpg" />

        {/* Twitter */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | Tech Byte Bridge" />
        <meta
          name="twitter:description"
          content="Discover Tech Byte Bridge services: web, cloud, digital marketing, and analytics. Secure, scalable, and designed for business growth."
        />
        <meta name="twitter:image" content="https://yourdomain.com/preview-services.jpg" /> */}
      </Head>

      <Navbar />
      {/* max-w-6xl mx-auto px-4 py-16 */}
      <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        {/* Page Title */}
        <section className="relative bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white px-4 py-20 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-8 leading-tight animate-fade-in">
              Our Services
            </h1>
            <p className="text-lg md:text-xl mb-10 text-indigo-100 max-w-2xl mx-auto animate-fade-in-delay">
              Tech Byte Bridge offers tailored digital solutions designed to support and scale your business goals efficiently.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <ServiceCard
            title="Web Design & Development"
            description="Custom-built websites that are mobile-friendly, fast-loading, and conversion-focused. We design with users in mind and develop with scalable code that grows with your business."
          />

          <ServiceCard
            title="Cloud Integration"
            description="Seamlessly migrate and integrate your workflows, data, and applications to the cloud. We help you improve accessibility, collaboration, and reliability — all with security at the core."
          />

          <ServiceCard
            title="Digital Marketing"
            description="Reach the right audience with the right message. Our SEO, content strategy, and paid marketing services are data-driven and designed to increase your online visibility and traffic."
          />

          <ServiceCard
            title="Analytics & Reporting"
            description="Make informed decisions with clear and actionable insights. We set up custom dashboards, user behaviour tracking, and performance analytics so you always know what’s working."
          />

          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-2xl shadow-md text-center md:col-span-2">
            <h2 className="text-xl font-semibold">More services coming soon...</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              We’re continuously evolving. Let us know your business need — we might already be working on it.
            </p>
          </div>

        </section>


        <section className="relative bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white py-16 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight animate-fade-in">
              Need a Custom Solution?
            </h2>
            <p className="text-lg md:text-xl mb-10 text-indigo-100 max-w-2xl mx-auto animate-fade-in-delay">
              We love collaborating with businesses to solve unique problems. Let’s discuss your project in detail.
            </p>
            <a
              href="/contact"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition-transform duration-300 hover:scale-110"
            >
              Request a Callback
            </a>
          </div>
        </section>


      </main>
      <BackToTop />
      <Footer />
    </>
  )
}
