import React, { useState } from 'react';
import logo from "../assets/Certifyit_logo.png";
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import toast from 'react-hot-toast';
const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();

  // State to manage the active link
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // Function to clear the active link (remove underline)
  const clearActiveLink = () => {
    setActiveLink('');
  };

  return (
    <div className='flex justify-between items-center w-full max-w-[1160px] py-6 ml-36'>
      <Link to="/">
        <img src={logo} alt="logo" width={200} height={40} loading='lazy' className='' />
      </Link>

      <nav className='flex justify-evenly mx-6'>
        <ul className='flex gap-x-6 text-gray-600 font-bold text-lg'>
          {/* Apply conditional border based on activeLink */}
          <li className={`hover:text-richblack-800 ${activeLink === 'home' ? 'border-b-2 border-black' : ''}`}>
            <Link to="/" onClick={() => handleLinkClick('home')}>Home</Link>
          </li>
          <li className={`hover:text-richblack-800 ${activeLink === 'about' ? 'border-b-2 border-black' : ''}`}>
            <Link to="/about" onClick={() => handleLinkClick('about')}>About</Link>
          </li>
          <li className={`hover:text-richblack-800 ${activeLink === 'contact' ? 'border-b-2 border-black' : ''}`}>
            <Link to="/contact" onClick={() => handleLinkClick('contact')}>Contact</Link>
          </li>
          <li className={`hover:text-richblack-800 ${activeLink === 'plans' ? 'border-b-2 border-black' : ''}`}>
            <Link to="/PlansAndPricing" onClick={() => handleLinkClick('plans')}>Our Plans &Pricing</Link>
          </li>
          <li className={`hover:text-richblack-800 ${activeLink === 'how' ? 'border-b-2 border-black' : ''}`}>
            <Link to="/HowItWorks" onClick={() => handleLinkClick('how')}>How It Works</Link>
          </li>
        </ul>
      </nav>

      {/* buttons */}
      <div className='flex flex-buttons items-center gap-x-4 text-richblack-100'>
  {!isLoggedIn && (
    <>
      <Link to="/login" onClick={clearActiveLink}>
        <button className='flex-button'>Login</button>
      </Link>
      <Link to="/signup" onClick={clearActiveLink}>
        <button className='flex-button'>SignUp</button>
      </Link>
    </>
  )}
  {isLoggedIn && (
    <>
      <Link to="/" onClick={clearActiveLink}>
        <button className='flex-button' onClick={() => {
          navigate("/")
          setIsLoggedIn(false);
          toast.success("Logged Out");
        }}>Logout</button>
      </Link>
      <Link to="/dashboard" onClick={clearActiveLink}>
        <button className='flex-button'>Dashboard</button>
      </Link>
      
    </>
  )}
  <Link to="/FreeTrialForm" onClick={clearActiveLink}>
    <button className='flex-button'>FreeTrial</button>
  </Link>
</div>
<Link to="/loginSingle" onClick={clearActiveLink}>
        <button className='flex-button mx-4'>YourCertificates</button>
      </Link>
    </div>
  );
}

export default Navbar;
