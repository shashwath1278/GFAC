export default function Footer() {
  return (
    <footer id="footer" className="w-full py-12 bg-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left Side - Contact Information */}
          <div className="space-y-4">
            <p className="font-semibold">Contact Us</p>
            <div className="space-y-2 text-sm">
              <p>Priya: +91 96067-48673</p>
              <p>Devesh: +91 95893-26155</p>
            </div>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#88C642] transition-colors" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
            </a>
            <a href="#" className="hover:text-[#88C642] transition-colors" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" className="hover:text-[#88C642] transition-colors" aria-label="X">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.654l-5.208-6.807-5.974 6.807H2.306l7.644-8.74-8.179-10.76h6.82l4.75 6.28 5.467-6.28m-.57 17.938h1.846L6.163 3.75H4.15l13.524 16.438z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Goal For A Cause. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
