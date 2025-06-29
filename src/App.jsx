import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import WhatsAppChat from './components/WhatsAppChat'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar isScrolled={isScrolled} />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <FAQ />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-emerald-100 text-emerald-900 py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/logo.png"
                  alt="Imhire Logo"
                  className="w-10 h-10 object-contain rounded-md bg-emerald-50 border border-emerald-100 shadow-sm"
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                  style={{ display: 'block' }}
                />
                <span style={{ display: 'none' }} className="text-xl font-bold gradient-text">Imhire</span>
              </div>
              <p className="text-emerald-800 mb-4">
                Professional end-to-end accident management service for non-fault accident victims in Bristol. 
                From FNOL to post-repair satisfaction - all costs covered by the at-fault insurer.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-emerald-900">Quick Links</h4>
              <ul className="space-y-2 text-emerald-700">
                <li><button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-500 transition-colors">Home</button></li>
                <li><button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-500 transition-colors">About</button></li>
                <li><button onClick={() => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-500 transition-colors">FAQ</button></li>
                <li><button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-500 transition-colors">Contact</button></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-emerald-900">Contact</h4>
              <div className="space-y-2 text-emerald-700">
                <p>+44 7947 232334</p>
                <p>info@imhire.com</p>
                <p>123 Business Ave, Bristol</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-emerald-100 mt-8 pt-8 text-center text-emerald-500">
            <p>&copy; 2024 Imhire Bristol. All rights reserved. | Website created by <a href='https://www.linkedin.com/in/guled-abdi-b30656194/?locale=es_ES&trk=org-employees'>Guled Abdi</a></p>
          </div>
        </div>
      </footer>
      
      {/* WhatsApp Chatbot */}
      <WhatsAppChat />
    </div>
  )
}

export default App 