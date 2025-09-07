export default function Testimonials() {
  return (

    <section className="py-20 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-12 rounded"></div>

        {/* Testimonials Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition transform hover:scale-[1.03] hover:shadow-2xl hover:border-blue-500">
            <p className="text-gray-600 dark:text-gray-300 italic mb-6 leading-relaxed">
              “Tech Byte Bridge transformed our outdated website into a sleek, lead-generating machine. We saw a 60% boost in traffic!”
            </p>
            <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400">— Priya Mehta</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Retail Startup</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition transform hover:scale-[1.03] hover:shadow-2xl hover:border-blue-500">
            <p className="text-gray-600 dark:text-gray-300 italic mb-6 leading-relaxed">
              “Fast, responsive, and professional. Their SEO work helped us get to the first page in just 3 months.”
            </p>
            <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400">— Ramesh Chauhan</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Local Agency</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition transform hover:scale-[1.03] hover:shadow-2xl hover:border-blue-500">
            <p className="text-gray-600 dark:text-gray-300 italic mb-6 leading-relaxed">
              “Excellent communication, clean design, and reliable hosting. Highly recommended for any growing business.”
            </p>
            <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400">— Neha Soni</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Consultant</p>
          </div>
        </div>
      </div>
    </section>


  )
}
