import React from 'react'
import NavBar from '../components/NavBar'
import LeftSideContent from '../components/LeftSideContent'
import Footer from '../components/Footer'
import Form from '../components/Form'
import { Sparkles } from 'lucide-react'
import {useNavigate } from 'react-router-dom'



const signup = () => {

    const naviagate = useNavigate();

    const handleSignup = async (data)=>{
    try{
        const res = await fetch('http://localhost:8000/api/auth/register',{
            method: 'POST',
            headers: {
                 "Content-Type": "application/json",
            },
        body: JSON.stringify({
        fullname: data.fullname,
        username: data.username,
        email: data.email,
        password: data.password
      }),
     });

        const result = await res.json();
        if(!res.ok){
            alert(result.message);
            return;
        }
        alert("Account created successfully!");
        naviagate('/signin', {state: {email: data.email, password: data.password}});
        } catch (error) {
            console.log(error);
        }
        };
                    
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
          onSubmit={handleSignup}
    
          
          />
        </div>

      </div>
    </div>
    <Footer/>

   </>
  )
}

export default signup
