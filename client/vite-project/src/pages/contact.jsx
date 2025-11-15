import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import ContactForm from '../components/ContactForm'
import ContactInfoCard from '../components/ContactInfoCard'
import Footer from '../components/Footer'
import { MapPin, Phone, Mail } from 'lucide-react'


const contact = () => {
  const contactData = [
    {
      icon: <Mail />,
      title: 'Email Us',
      content: ['contact@myblog.com', 'support@myblog.com'],
    },
    {
      icon: <Phone />,
      title: 'Call Us',
      content: ['+1 (555) 123-4567', 'Mon-Fri: 9AM - 6PM EST'],
    },
    {
      icon: <MapPin />,
      title: 'Visit Us',
      content: ['123 Blog Street', 'New York, NY 10001'],
    },
  ];
  return (
    <>
   <NavBar />
   <HeroSection
   title = "Get In Touch"
   subtitle = "Do you have any queries or comments? We would be delighted to hear from you. We will reply to your message as soon as we can."
   showstats={false}
   showbuttons={false}
   />

   <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
        
          <div className="lg:col-span-1">
            {contactData.map((data, index) => (
              <ContactInfoCard
                key={index}
                icon={data.icon}
                title={data.title}
                content={data.content}
              />
            ))}
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>

    <Footer/>



    </>
  
  
  )
}

export default contact
