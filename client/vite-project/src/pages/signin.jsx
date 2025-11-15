import React from 'react'
import LeftSideContent from '../components/LeftSideContent'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Shield } from 'lucide-react'

const signin = () => {
   const statsData = [
    { statistic: '10K+', label: 'Writers' },
    { statistic: '50K+', label: 'Articles' },
    { statistic: '100K+', label: 'Readers' },
  ];

  return (
    <>
    <NavBar/>

    
   <div className="
      min-h-screen bg-gray-100 flex flex-col items-center justify-center
      py-12 px-4 sm:px-6 lg:px-8
    ">
      
      <div className="
        bg-white rounded-3xl shadow-2xl overflow-hidden
        w-full max-w-7xl
        grid grid-cols-1 lg:grid-cols-2 
        min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]
      ">
    
        <div className="
          bg-linear-to-br from-blue-50 to-indigo-100 
          flex items-center justify-center p-8 lg:p-0
        ">
          <LeftSideContent 
          title="Welcome Back"
          icon = {<Shield/>}
          headingSecondary="Telling Your Stories"
          paragraph="Sign in to continue your blogging journey and connect with your audience"
          ticks = {false}
          stats={statsData}
          />
        </div>
      </div>
    </div>
    <Footer/>
    
    </>
  )
}

export default signin
