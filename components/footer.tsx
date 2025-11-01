"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground mt-12 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-3">EneScope Live</h3>
            <p className="text-sm opacity-90">
              Empowering Indian citizens with transparent energy data and climate awareness.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="text-sm space-y-2 opacity-90">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-sm opacity-90">Email: info@enescope.live</p>
            <p className="text-sm opacity-90">Phone: +91 (0) 800-ENERGY-1</p>
          </div>
        </div>
        <div className="border-t border-primary/30 pt-6 text-center text-sm opacity-90">
          <p>&copy; {currentYear} EneScope Live. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
