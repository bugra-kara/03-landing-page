import React, { useState } from 'react'
import Logo from '../assets/images/logo.svg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosCloseCircle} from 'react-icons/io'
import {TfiFacebook} from 'react-icons/tfi'
import {SiTwitter} from 'react-icons/si'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiFillYoutube, AiFillInstagram} from 'react-icons/ai'
const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const handleNavbar = () => {
    setMobileNav(!mobileNav)
  }
  return (
    <>
      {
        mobileNav 
        ? 
        <div className='h-screen flex flex-col space-y-5 py-24 place-items-center bg-navbar-bg z-10'>
          <div className=' '>
            <img className='h-10' src={Logo} alt="" />
          </div>
          <div className='w-1/2'>
            <ul className='text-white uppercase font-bold mt-12 space-y-5 text-left'>
              <li>Home</li>
              <li>Service</li>
              <li>Clients</li>
              <li>About Us</li>
              <li>blog</li>
              <li>contact</li>
            </ul>
          </div>
          <div>
            <ul className='flex flex-row text-white space-x-9 mt-12'>
              <li><SiTwitter/></li>
              <li><FaTelegramPlane/></li>
              <li><AiFillYoutube/></li>
              <li><AiFillInstagram/></li>
              <li><TfiFacebook/></li>
            </ul>
          </div>
          <button className='text-white absolute right-5 top-0' onClick={()=>{handleNavbar()}}><IoIosCloseCircle/></button>
        </div>
        :
        <nav className='bg-navbar-bg py-5 px-3 sm:px-4 md:px-12 lg:px-24 xl:px-28 2xl:px-64 w-full flex justify-center'>
          <div className='container flex flex-row items-center '>
            <img className='h-4 md:h-5 lg:h-6' src={Logo} alt="" />
            <button onClick={()=>{handleNavbar()}} className='flex sm:hidden justify-end w-full cursor-pointer text-white'>
              <GiHamburgerMenu/>
            </button>
            <ul className='hidden sm:grid grid-flow-col text-white justify-end w-full uppercase text-xs xl:text-sm gap-1'>
              <li className='px-4 py-1.5 transaction ease-in duration-200 border-2 border-transparent hover:border-2 cursor-pointer hover:border-border hover:shadow-[0_0px_20px_1px_rgba(224,91,255,0.3)] rounded-2xl'>Home</li>
              <li className='px-4 py-1.5 transaction ease-in duration-200 border-2 border-transparent hover:border-2 cursor-pointer hover:border-border hover:shadow-[0_0px_20px_1px_rgba(224,91,255,0.3)] rounded-2xl'>service</li>
              <li className='px-4 py-1.5 transaction ease-in duration-200 border-2 border-transparent hover:border-2 cursor-pointer hover:border-border hover:shadow-[0_0px_20px_1px_rgba(224,91,255,0.3)] rounded-2xl'>clients</li>
              <li className='px-4 py-1.5 transaction ease-in duration-200 border-2 border-transparent hover:border-2 cursor-pointer hover:border-border hover:shadow-[0_0px_20px_1px_rgba(224,91,255,0.3)] rounded-2xl'>about us</li>
              <li className='px-4 py-1.5 transaction ease-in duration-200 border-2 border-transparent hover:border-2 cursor-pointer hover:border-border hover:shadow-[0_0px_20px_1px_rgba(224,91,255,0.3)] rounded-2xl'>blog</li>
              <li className='px-4 py-1.5 transaction ease-in duration-200 border-2 border-transparent hover:border-2 cursor-pointer hover:border-border hover:shadow-[0_0px_20px_1px_rgba(224,91,255,0.3)] rounded-2xl'>contact</li>
            </ul>
          </div>
        </nav>
      }
    </>
  )
}

export default Navbar