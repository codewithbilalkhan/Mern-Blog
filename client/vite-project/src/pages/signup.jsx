import React from 'react'
import NavBar from '../components/NavBar'
import LeftSideContent from '../components/LeftSideContent'


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
          <LeftSideContent />
        </div>

      </div>
    </div>

   </>
  )
}

export default signup
