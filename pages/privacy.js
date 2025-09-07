import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Terms & Privacy | Tech Byte Bridge</title>
      </Head>

      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <Navbar />

        <main className="flex-grow">
          <div className="max-w-4xl mx-auto px-4 py-16">
            {/* Page Title */}
            <h1 className="text-3xl font-bold mb-8">Terms & Privacy Policy</h1>

            {/* Terms of Service */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong>Services:</strong> We provide solutions such as Web Design, Cloud Integration, and Analytics.
                </li>
                <li>
                  <strong>Use of Website:</strong> Visitors must not misuse the website (no hacking, reverse engineering, etc.).
                </li>
                <li>
                  <strong>Intellectual Property:</strong> All content, logo, and materials belong to Tech Byte Bridge. Users cannot copy/distribute without permission.
                </li>
                <li>
                  <strong>Third-Party Links:</strong> We are not responsible for the content of external websites linked from ours.
                </li>
                <li>
                  <strong>Limitation of Liability:</strong> We are not liable for damages due to downtime, errors, or reliance on content.
                </li>
                <li>
                  <strong>Changes to Terms:</strong> We reserve the right to update terms at any time.
                </li>
                <li>
                  <strong>Contact:</strong> For legal or terms-related queries, please reach out to us.
                </li>
              </ul>
            </section>

            {/* Privacy Policy */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong>Information We Collect:</strong> Contact form submissions (name, email, message) and analytics data (website usage).
                </li>
                <li>
                  <strong>How Information is Used:</strong> To respond to inquiries and improve services. We do not sell or share personal data with third parties.
                </li>
                <li>
                  <strong>Data Security:</strong> We take reasonable measures to protect collected data.
                </li>
                <li>
                  <strong>Third-Party Services:</strong> Tools such as Google Analytics, Formspree, or Netlify may process user data.
                </li>
                <li>
                  <strong>User Rights (GDPR/UK Compliance):</strong> Users can request access, correction, or deletion of their personal data.
                </li>
                <li>
                  <strong>Changes to Policy:</strong> This policy may be updated from time to time.
                </li>
                <li>
                  <strong>Contact:</strong> For privacy-related concerns, please contact us at the details provided.
                </li>
              </ul>
            </section>

            
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
