import React from 'react'
import LeftSideContent from '../components/LeftSideContent'
import NavBar from '../components/NavBar'
import Form from '../components/Form'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { Shield } from 'lucide-react'

const signin = () => {

  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   useEffect(() => {
    if (location.state) {
      setEmail(location.state.email || '');
      setPassword(location.state.password || '');
    }
  }, [location.state]);



    const handleLogin = async (data) => {
  try {
    const res = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      alert(result.message);
      return;
    }

    // Save token to localStorage
    localStorage.setItem("token", result.token);

    alert("Login successful!");
  } catch (error) {
    console.log(error);
  }
};


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
          <div className="
          flex items-center justify-center p-8 lg:p-12 xl:p-16
          bg-white
        ">
          <Form
          button = "Sign In"
          signupline="Don't have an account?"
          choose="Sign Up"
          loginRoute="/signup"
          fullsname={false}
          usersname={false}
          maintitle="Sign In to Your Account"
          subtitle="Welcome back! Please enter your details to sign in."
          onSubmit={handleLogin}
          initialEmail={email}
          initialPassword={password}
          
          />
        </div>
      </div>
    </div>
    <Footer/>
    
    </>
  )
}

export default signin
