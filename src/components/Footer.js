import React from 'react'
import Logo from '../assets/images/logo.svg'
import {FaFacebookF, FaTwitter, FaYoutube} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <>
    <hr className='border-border w-full'/>
    <div className='bg-bg text-white pb-3 px-3 sm:px-4 md:px-12 lg:px-24 xl:px-28 2xl:px-64 w-full flex flex-col justify-center items-center'>
      <div className='container flex just items-center flex-col sm:flex-row space-y-5 sm:space-y-0 py-5'>
        <img className='h-4 md:h-5 lg:h-6 w-full sm:w-auto' src={Logo} alt="" />
        <div className='grid grid-flow-col w-full gap-10 justify-center sm:justify-end'>
          <button className='rounded-full border border-border flex h-8 w-8 place-items-center justify-center p-2 transaction duration-200 ease-in hover:shadow-[0_0px_30px_2px_rgba(224,91,255,0.5)]'>
          <FaFacebookF/>
          </button>
          <button className='rounded-full border border-border flex h-8 w-8 place-items-center justify-center p-2 transaction duration-200 ease-in hover:shadow-[0_0px_30px_2px_rgba(224,91,255,0.5)]'>
          <FaTwitter/></button>
          <button className='rounded-full border border-border flex h-8 w-8 place-items-center justify-center p-2 transaction duration-200 ease-in hover:shadow-[0_0px_30px_2px_rgba(224,91,255,0.5)]'>
          <FaYoutube/></button>
          <button className='rounded-full border border-border flex h-8 w-8 place-items-center justify-center p-2 transaction duration-200 ease-in hover:shadow-[0_0px_30px_2px_rgba(224,91,255,0.5)]'>
          <AiFillInstagram/></button>
        </div>
      </div>
      <div className='container grid grid-flow-col space-x-8 w-full text-xs'>
        <div className='space-y-2 sm:space-y-0 sm:space-x-3 flex-col flex sm:block'>
          <span>Privacy Policy</span>
          <span>Term & Conditions</span>
          <span>Shipping Policy</span>
        </div>
        <div>
          <span>© BY A-ROOM ALL RIGHT RESERVED 2023!</span>
        </div>
        <div className='justify-end grid grid-flow-col space-x-3'>
          <span>02 8338 8690</span>
          <span>02 8338 8690</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer