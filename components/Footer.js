export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Info */}
        <div>
          <h4 className="text-2xl font-semibold mb-3">Tech Byte Bridge</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your trusted partner for scalable and modern tech solutions.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="text-sm text-gray-400 hover:text-white transition">About</a></li>
            <li><a href="/services" className="text-sm text-gray-400 hover:text-white transition">Services</a></li>
            <li><a href="/contact" className="text-sm text-gray-400 hover:text-white transition">Contact</a></li>
            <li><a href="/privacy" className="text-sm text-gray-400 hover:text-white transition">Terms & Privacy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: support@techbyte.com</li>
            <li>Phone: +44 7778 170 089</li>
            <li>Address: 174, Manor Farm road, HA0 1DD, London</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Tech Byte Bridge. All rights reserved.
      </div>
    </footer>
  )
}




