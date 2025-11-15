import React from 'react'

const ContactForm = () => {

    const inputStyle = "w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200";
  return (
    <div className="bg-white p-8 md:p-10 rounded-lg shadow-md border border-gray-100 h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Send Us a Message</h2>

      <form className="space-y-6">
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="John Doe" 
              className={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="john@example.com" 
              className={inputStyle}
            />
          </div>
        </div>

       
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <input 
            type="text" 
            id="subject" 
            placeholder="How can we help?" 
            className={inputStyle}
          />
        </div>

       
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            id="message"
            rows="6"
            placeholder="Tell us more about your inquiry..."
            className={`${inputStyle} resize-none`} 
          ></textarea>
        </div>

      
        <button
          type="submit"
          className="
            w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg
            hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center
          "
        >
         
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm
