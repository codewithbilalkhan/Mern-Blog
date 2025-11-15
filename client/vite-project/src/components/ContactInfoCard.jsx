import React from 'react'

const ContactInfoCard = ({icon, title, content}) => {
  return (
   <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-6">
      <div className="flex items-start">
    
        <div className="shrink-0 w-10 h-10 bg-blue-600 rounded-lg 
  flex items-center justify-center mr-4">
        
          <span className="text-white w-5 h-5 flex items-center justify-center">{icon}</span>
        </div>
        
       
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        
          {content.map((line, index) => (
            <p key={index} className="text-sm text-gray-600 leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactInfoCard
