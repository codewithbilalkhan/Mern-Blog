import React from 'react'
import {Facebook, Instagram} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="
      relative bg-linear-to-br from-gray-900 to-indigo-950 text-white
      py-16 px-6 sm:px-10 lg:px-20
      overflow-hidden
    ">
    
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-size-[20px_20px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
      
        <div className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8
          mb-16 border-b border-gray-700 pb-12
        ">
       
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
             MyBlog
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
              Building clear, fast, and intelligent web experiences for everyone.
            </p>
          </div>

        
          <div>
            <h4 className="text-xl font-bold text-gray-100 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-lg block">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-lg block">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-lg block">Blogs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-lg block">Contact</a></li>
            </ul>
          </div>

      
          <div>
            <h4 className="text-xl font-bold text-gray-100 mb-5">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-lg block">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-lg block">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-lg block">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-100 mb-5">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                aria-label="Facebook" 
                className="
                  text-gray-300 hover:text-blue-500 transition-colors duration-300
                  p-2 rounded-full bg-white/10 hover:bg-white/20
                  inline-flex items-center justify-center
                "
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                aria-label="Instagram" 
                className="
                  text-gray-300 hover:text-pink-500 transition-colors duration-300
                  p-2 rounded-full bg-white/10 hover:bg-white/20
                  inline-flex items-center justify-center
                "
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

       
        <div className="text-center text-white text-lg mt-8">
          &copy; {new Date().getFullYear()} Bilal Khan. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
