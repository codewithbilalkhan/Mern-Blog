import React from 'react'
import NavBar from '../components/NavBar'
import LeftSideContent from '../components/LeftSideContent'
import Footer from '../components/Footer'
import Form from '../components/Form'
import { Sparkles } from 'lucide-react'



const signup = () => {
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
          title="Join Our Community"
          icon = {<Sparkles/>}
          headingSecondary="Telling Your Stories"
          paragraph="Join thousands of writers sharing their stories and inspiring others every day"
          />
        </div>
        <div className="
          flex items-center justify-center p-8 lg:p-12 xl:p-16
          bg-white
        ">
          <Form  
          button ="Create Account"
          signupline="Already have an account?"
          choose="Sign In"
          loginRoute="/signin"
          maintitle="Create Your Account"
          subtitle="Start your blogging journey today"
    
          
          />
        </div>

      </div>
    </div>
    <Footer/>

   </>
  )
}

export default signup
