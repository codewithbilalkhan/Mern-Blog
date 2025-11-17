import {useState} from 'react'
import {User, Mail, Lock, AtSign} from 'lucide-react'
import { Link } from 'react-router-dom'
import {useEffect} from 'react'
const Form = ({button, signupline, choose, loginRoute, fullsname = true, usersname = true, maintitle, subtitle, onSubmit, initialEmail = '',
  initialPassword = ''}) => {

const inputStyle = "w-full p-3 pl-10 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200";
const inputContainerStyle = "relative";
const iconStyle = "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4";
const buttonBase = "w-full p-3 rounded-3xl shadow-md font-semibold  flex items-center justify-center";


//states for register and login

const [fullname, setFullName] = useState('');
const [username, setUserName] = useState('');
const [email, setEmail] = useState(initialEmail);
const [password, setPassword] = useState(initialPassword);


useEffect(() => {
  setEmail(initialEmail);
  setPassword(initialPassword);
}, [initialEmail, initialPassword]);


const handleSubmit = (e) => {
  e.preventDefault();   
  const formData = {
    fullname,
    username,
    email,
    password
  };
 onSubmit(formData);

};


  return (

    <form 
  onSubmit={handleSubmit}
  className="
      bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100
      max-w-md w-full mx-auto
      flex flex-col
  "
>
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">{maintitle}</h2>
      <p className="text-gray-500 text-sm mb-8 text-center">{subtitle}</p>

      {/* Continue With Google Button */}
     <button className={`
        ${buttonBase}
        bg-black
        space-x-2 mb-4 text-white 
        cursor-pointer
      `}>
       
        <img
    src="https://developers.google.com/static/identity/images/branding_guideline_sample_lt_rd_sl.svg"
    alt="Google Logo"
    className="w-7 h-7"
  />
        <span>Continue With Google</span>
      </button>

      {/* Or continue with email divider */}
      <div className="flex items-center mb-6">
        <hr className="grow border-gray-200" />
        <span className="px-3 text-gray-500 text-xs">or continue with email</span>
        <hr className="grow border-gray-200" />
      </div>

      {/* Input Fields */}
      <div className="space-y-4">

        { fullsname &&(
        <div className={inputContainerStyle}>
          <User className={iconStyle} />
          <input type="text" placeholder="Full Name" className={inputStyle} value={fullname} onChange={(e)=>setFullName(e.target.value)} />
        </div>
        )}

       { usersname &&(
        <div className={inputContainerStyle}>
          <AtSign className={iconStyle} />
          <input type="text" placeholder="Username" className={inputStyle} value={username} onChange={(e)=>setUserName(e.target.value)}  />
        </div>

         )}

        
        <div className={inputContainerStyle}>
          <Mail className={iconStyle} />
          <input type="email" placeholder="Email Address" className={inputStyle}  value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
       

       
        <div className={inputContainerStyle}>
          <Lock className={iconStyle} />
          <input type="password" placeholder="Password" className={inputStyle} value={password} onChange={(e)=>setPassword(e.target.value)} />
          {/* Eye icon for password visibility */}
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none" aria-label="Toggle password visibility">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </button>
        </div> 
      </div>

      {/* Create Account Button */}
      <button type='submit' className="
        w-full p-3 mt-8 bg-blue-600 text-white font-semibold rounded-lg shadow-md
        hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center
      ">
        {button}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right ml-2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>

     
      <p className="text-center text-sm text-gray-600 mt-6">
        {signupline}{' '}
        <Link to={loginRoute} className="text-blue-600 hover:underline font-medium">{choose}</Link>
      </p>
      </form>
   
  )
}

export default Form
