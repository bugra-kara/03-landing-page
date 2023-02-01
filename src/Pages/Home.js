import React from 'react'
import Room from '../assets/images/room.svg'
import HandShake from '../assets/images/hand-shake.svg'
import GearsSet from '../assets/images/gears-set.svg'
import Server from '../assets/images/our-blog-server.svg'
import Ball from '../assets/images/ball.svg'
import Next from '../assets/images/next.svg'
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {VscSettings} from 'react-icons/vsc'
import {MdSupport, MdQrCode2} from 'react-icons/md'
const Home = () => {
  const handleClick = () => {
    console.log("clicked");
  }
  return (
    <div className='bg-bg text-white py-5 px-3 sm:px-4 md:px-12 lg:px-24 xl:px-28 2xl:px-64 w-full flex flex-col justify-center items-center'>
      {/* Caption */}
      <div className='container sm:flex sm:flex-row'>
        <div className='sm:basis-4/12 pt-10 space-y-4 w-full'>
          <div className='uppercase font-extrabold text-5xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex-col flex space-y-2 sm:space-y-2 md:space-y-4'>
            <span className='text-center'>
              create your
            </span>
            <span className='text-center'>
              custom
            </span>
            <span className='text-center'>
              workspace.
            </span>
            <div className='uppercase font-extralight text-center text-sm sm:text-xs md:text-xs lg:text-sm flex-col pt-3 sm:pt-0 flex space-y-2'>
              <span>
              IN A BUILDING OR LARGE VEHICLE, LIKE 
              </span>
              <span>
              A SHIP, A ROOM  TO WHICH ENTRY
              </span>
            </div>
            <div className='space-y-4 self-center pt-3 sm:pt-0'>
              <div className='flex flex-row place-items-center space-x-2'>
                <span className='border border-border flex rounded-full justify-center items-center w-12 h-12 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-16 lg:h-16'>
                  <img className='h-6' src={GearsSet} alt="" />
                </span>
                <div className='items-center'>
                  <div className='text-sm sm:text-xs md:text-sm lg:text-base font-bold'>
                    upgradeable
                  </div>
                  <div className='text-xs font-thin'>
                    1-3 Level
                  </div>
                </div>
              </div>
              <div className='flex flex-row place-items-center space-x-2'>
              <span className='border border-border flex rounded-full justify-center items-center w-12 h-12 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-16 lg:h-16'>
                  <img className='h-6' src={HandShake} alt="" />
                </span>
                <div className='items-center'>
                  <div className='text-sm  sm:text-xs md:text-sm lg:text-base font-bold'>
                    0.417%
                  </div>
                  <div className='text-xs font-thin'>
                    MONTHLY INCOME RATE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sm:basis-8/12 grid pt-6 sm:pt-0 justify-items-center sm:justify-items-end'>
          <img className='sm:h-5/6' src={Room} alt="" />
        </div>
      </div>
      {/* Our Service */}
      <div className='container space-y-10'>
        <div className='text-center w-full space-y-3 pt-10'>
          <div className='font-semibold text-lg uppercase text-border'>
            what we offer
          </div>
          <div className='text-white text-4xl uppercase font-bold'>
            our service
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-5 lg:gap-12 xl:gap-16 2xl:gap-44 w-full'>
          <div className='h-96 flex group flex-col sm:mx-6 lg:mx-0 space-y-5 place-content-center items-center ease-in duration-500 border-2 border-transparent hover:border-2 hover:border-border rounded-xl hover:bg-border hover:bg-opacity-20'>
            <div className='relative justify-center items-center w-72 h-28'>
              <img className='absolute -top-24 group-hover:hidden' src={Ball} alt="" />
              <span className='absolute left-30 top-4 rounded-full ease-in duration-500 border-2 border-transparent group-hover:border-current group-hover:border-2 p-3'><GiHamburgerMenu className='h-7 w-7'/></span>
            </div>
            <div className='sm:px-12 md:px-8 lg:px-0 xl:px-5 font-bold text-lg text-center uppercase'>
              custom room blockchain
            </div>
            <div className='border border-border flex rounded-full justify-center items-center w-12 h-12 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-12 lg:h-12'>
              <AiOutlineRight/>
            </div>
          </div>
          <div className='h-96 flex group flex-col sm:mx-6 lg:mx-0 space-y-5 place-content-center items-center ease-in duration-500 border-2 border-transparent hover:border-2 hover:border-border rounded-xl hover:bg-border hover:bg-opacity-20'>
            <div className='relative justify-center items-center w-72 h-28'>
              <img className='absolute -top-24 group-hover:hidden' src={Ball} alt="" />
              <span className='absolute left-30 top-4 rounded-full ease-in duration-500 border-2 border-transparent group-hover:border-current group-hover:border-2 p-3'><VscSettings className='h-7 w-7'/></span>
            </div>
            <div className='sm:px-12 lg:px-5 font-bold text-lg text-center uppercase'>
              blockchain consulation
            </div>
            <div className='border border-border flex rounded-full justify-center items-center w-12 h-12 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-12 lg:h-12'>
              <AiOutlineRight/>
            </div>
          </div>
          <div className='h-96 flex group flex-col sm:mx-6 lg:mx-0 space-y-5 place-content-center items-center ease-in duration-500 border-2 border-transparent hover:border-2 hover:border-border rounded-xl hover:bg-border hover:bg-opacity-20'>
            <div className='relative justify-center items-center w-72 h-28'>
              <img className='absolute -top-24 group-hover:hidden' src={Ball} alt="" />
              <span className='absolute left-30 top-4 rounded-full ease-in duration-500 border-2 border-transparent group-hover:border-current group-hover:border-2 p-3'><MdSupport className='h-7 w-7'/></span>
            </div>
            <div className='sm:px-12 md:px-6 lg:px-0 font-bold text-lg text-center uppercase'>
              enterprise room consulation
            </div>
            <div className='border border-border flex rounded-full justify-center items-center w-12 h-12 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-12 lg:h-12'>
              <AiOutlineRight/>
            </div>
          </div>
          <div className='h-96 flex group flex-col sm:mx-6 lg:mx-0 space-y-5 place-content-center items-center ease-in duration-500 border-2 border-transparent hover:border-2 hover:border-border rounded-xl hover:bg-border hover:bg-opacity-20'>
            <div className='relative justify-center items-center w-72 h-28'>
              <img className='absolute -top-24 group-hover:hidden' src={Ball} alt="" />
              <span className='absolute left-30 top-4 rounded-full ease-in duration-500 border-2 border-transparent group-hover:border-current group-hover:border-2 p-3'><MdQrCode2 className='h-7 w-7'/></span>
            </div>
            <div className='sm:px-12 lg:px-5 xl:px-12 font-bold text-lg text-center uppercase'>
              a-room consulation
            </div>
            <div className='border border-border flex rounded-full justify-center items-center w-12 h-12 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-12 lg:h-12'>
              <AiOutlineRight/>
            </div>
          </div>
        </div>
      </div>
      {/* Slider 1 */}
      <div className='container pb-36 pt-16'>
        <div className='grid grid-flow-row sm:grid-cols-6 lg:grid-cols-5 gap-5 w-full'>
          <div className='sm:col-span-2 lg:col-span-2 xl:col-span-1 flex flex-row justify-center sm:justify-start place-items-center sm:place-items-baseline space-x-4 sm:space-x-0 sm:flex-col space-y-3'>
            <div className='text-border text-4xl font-bold'>
              01
            </div>
            <div className='font-medium leading-5 text-sm'>
            GERALD WINEFIELD <br /> MOTIONART <br /> DIRECTOR
            </div>
            <div className='hidden sm:block pt-10 relative'>
              <button onClick={()=>{handleClick()}} className='absolute border border-border flex rounded-full justify-center items-center w-12 h-12 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-12 lg:h-12 z-50'>
                <AiOutlineLeft/>
              </button>
              <div className='relative sm:w-60 right-5 -top-24 z-0'>
                <img className='absolute' src={Next} alt="" />
                <button  onClick={()=>{handleClick()}} className='absolute m-20 p-7'><AiOutlineRight className='h-7 w-7'/></button>
              </div>
            </div>
          </div>
          <div className='sm:col-span-3 lg:col-span-2 xl:col-span-3 space-y-4'>
            <div className='text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
            INSPIRE, DELIGHT & EDUCATE
            </div>
            <div className='text-xs leading-6 font-thin'>
            THAT IS LARGE ENOUGH FOR SEVERAL PEOPLE TO MOVE ABOUT, AND <br /> WHOSE SIZE, FIXTURES, THE ACTIVITY TO BE CONDUCTED.
            </div>
            <div className='w-28 border-2 border-white rounded-xl'>
            </div>
          </div>
          <div className='sm:col-span-1 lg:col-span-1 xl:col-span-1 grid grid-flow-col sm:grid-flow-row justify-center sm:justify-end space-x-8 sm:space-x-0 pt-5 sm:pt-0'>
            <div className='flex justify-self-end bg-white h-2 w-2 rounded-full ease-in duration-200 cursor-pointer hover:w-14 hover:rounded-xl hover:bg-border border-2 border-transparent hover:border-2 hover:border-border'></div>
            <div className='flex justify-self-end bg-white h-2 w-2 rounded-full ease-in duration-200 cursor-pointer hover:w-14 hover:rounded-xl hover:bg-border border-2 border-transparent hover:border-2 hover:border-border'></div>
            <div className='flex justify-self-end bg-white h-2 w-2 rounded-full ease-in duration-200 cursor-pointer hover:w-14 hover:rounded-xl hover:bg-border border-2 border-transparent hover:border-2 hover:border-border'></div>
            <div className='flex justify-self-end bg-white h-2 w-2 rounded-full ease-in duration-200 cursor-pointer hover:w-14 hover:rounded-xl hover:bg-border border-2 border-transparent hover:border-2 hover:border-border'></div>
            <div className='flex justify-self-end bg-white h-2 w-2 rounded-full ease-in duration-200 cursor-pointer hover:w-14 hover:rounded-xl hover:bg-border border-2 border-transparent hover:border-2 hover:border-border'></div>
          </div>
        </div>
      </div>
      {/* Slider 2*/}
      <div className='container pb-36'>
        <div className='grid grid-flow-row sm:grid-cols-4 gap-5 w-full bg-navbar-bg px-8 sm:px-12 lg:px-16  py-12 rounded-3xl'>
          <div className='col-span-4 sm:col-span-3 space-y-4'>
            <div className='text-xl text-border font-medium uppercase'>
            they talk about us
            </div>
            <div className='text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase md:pr-16 lg:pr-24 xl:pr-0'>
            OUR A-ROOM AND STO PROJECT HAVE MORE THAN 500 MILLION USD DATE.
            </div>
            <div className='border-2 border-seperate border-spacing-5 border-white bg-border w-fit rounded-full px-8 py-3'>
            Learn More
            </div>
          </div>
          <div className='sm:grid col-span-1 justify-end justify-items-end'>
            <div className='text-border text-sm font-light hidden sm:flex justify-center'>
              <div className='w-fit h-fit px-6 py-1.5 rounded-full border border-border space-x-1'>
                <span className='text-white'>1</span>
                <span>/</span>
                <span className='text-white'>5</span>
              </div>
            </div>
            <div className='pt-10 sm:relative'>
              <button onClick={()=>{handleClick()}} className='absolute sm:right-24 border border-border flex rounded-full z-20 justify-center items-center w-12 h-12 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-12 lg:h-12'>
                <AiOutlineLeft/>
              </button>
              <div className='relative w-60 right-5 sm:-right-20 -top-24'>
                <img className='absolute' src={Next} alt="" />
                <button onClick={()=>{handleClick()}} className='absolute m-20 p-7'><AiOutlineRight className='h-7 w-7'/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Blog */}
      <div className='container pb-10 md:pb-20 lg:pb-48 xl:pb-80'>
        <div className='text-center w-full space-y-3 pb-10'>
          <div className='text-white text-4xl uppercase font-bold'>
            our blog
          </div>
        </div>
        <div className='grid bg-our-blog object-fill h-24 place-items-center rounded-xl w-full'>
          <div className='flex grid-flow-col w-full h-full justify-center content-center text-xs sm:text-sm font-semibold space-x-2 px-2 sm:px-8 shadow-lg'>
            <button className='flex items-center sm:-my-3 place-content-center space-x-0.5 sm:space-x-1 w-full uppercase transaction ease-out duration-300 border-transparent rounded-xl border-2 hover:border-border hover:shadow-[0_0px_30px_2px_rgba(224,91,255,0.5)]'><span><AiOutlineRight/></span><span>health care</span></button>
            <button className='flex items-center sm:-my-3 place-content-center space-x-0.5 sm:space-x-1 w-full uppercase transaction ease-out duration-300 border-transparent rounded-xl border-2 hover:border-border hover:shadow-[0_0px_30px_2px_rgba(224,91,255,0.5)]'><span><AiOutlineRight/></span><span>fin tech</span></button>
            <button className='flex items-center sm:-my-3 place-content-center space-x-0.5 sm:space-x-1 w-full uppercase transaction ease-out duration-300 border-transparent rounded-xl border-2 hover:border-border hover:shadow-[0_0px_30px_2px_rgba(224,91,255,0.5)]'><span><AiOutlineRight/></span><span>retail & e-com</span></button>
            <button className='flex items-center sm:-my-3 place-content-center space-x-0.5 sm:space-x-1 w-full uppercase transaction ease-out duration-300 border-transparent rounded-xl border-2 hover:border-border hover:shadow-[0_0px_30px_2px_rgba(224,91,255,0.5)]'><span><AiOutlineRight/></span><span>social media</span></button>
            <button className='flex items-center sm:-my-3 place-content-center space-x-0.5 sm:space-x-1 w-full uppercase transaction ease-out duration-300 border-transparent rounded-xl border-2 hover:border-border hover:shadow-[0_0px_30px_2px_rgba(224,91,255,0.5)]'><span><AiOutlineRight/></span><span>social media</span></button>
          </div>
        </div>
        <div className='grid grid-flow-row sm:grid-cols-5 pt-16'>
          <div className="sm:col-span-2">
            <div className='flex flex-col space-y-3 uppercase'>
              <div className='text-border text-2xl font-semibold'>
                a room-for:
              </div>
              <div className='text-6xl font-bold'>
                fin tech
              </div>
              <div className=' font-extralight text-xs pr-24 leading-6 pb-5'>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT  VIVERRA MAECENAS ACCUMSANL FACILISIS. 
              </div>
              <div className='border-2 border-seperate border-spacing-5 border-white bg-border w-fit rounded-full px-8 py-3'>
              Learn More
              </div>
            </div>
          </div>
          <div className='sm:col-span-3 relative justify-items-end grid'>
            <img className='sm:absolute sm:-top-10' src={Server} alt="" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Home