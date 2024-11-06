"use client"
import React from 'react'
import Layout from '@/components/Layout'
import { DataProvider } from './context/DataContext'
import Image from 'next/image'
import profileImage from '../assets/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function page() {
  const goToPortfolio = () => {
    window.open('https://github.com/bulintni', '_blank')
  }

  return (
    <DataProvider>
      {/* conatainer */}
      <div className='flex flex-col justify-center items-center xl:mt-10 my-8'>
        {/* Image */}
        <div className='rounded-full overflow-hidden w-[400px] h-[400px] drop-shadow-md'>
          <Image
            className='object-cover object-[center_-50px]'
            src={profileImage}
            height={400}
            width={400}
            alt='Profile Image'
          />
        </div>
        {/* Detail */}
        <div className='flex w-[80%] justify-between gap-[3rem] xl:gap-[8rem] flex-col xl:flex-row md:items-center'>
          <div className='flex-1 mx-10 lg:mx-0'>
            <FontAwesomeIcon className="text-orange-500 mb-2" size='3x' icon={faQuoteLeft} />
            <p>Hello, My name is Bulin and I want to find a job in the Frontend developer. I still have 6 month in doing Frontend work.
            </p>
          </div>
          <div className='flex justify-center items-center text-center flex-3'>
            <h1 className='text-[5rem] leading-tight drop-shadow-lg'>I'm <span className='text-orange-500 font-bold'>Bulin</span><br /> <span className='font-semibold text-gray-900'>Frontend <span className=''>Developer</span></span></h1>
          </div>
          <div className='flex-1 flex flex-col items-center justify-start lg:items-end'>
            <h1 className='font-bold text-5xl mb-2'>
              <span className='text-7xl text-orange-500'>
                6
              </span>
              <span className='ml-2'>
                Month
              </span>
            </h1>
            <h1 className='text-xl border-b-2 border-b-orange-500'>Experinces</h1>
          </div>
        </div>
        <div className=' p-1 border-[0.1rem] border-gray-400 rounded-full flex items-center bg-gray-400 bg-opacity-5 mt-8'>
          <button className='text-black border-[0.1rem] bg-orange-500 font-bold px-5 py-2 rounded-full text-xl text-white'
            onClick={goToPortfolio}
          >Portfolio<span className='ml-2'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span></button>
          <h1 className='px-5 py-2'>Hire Me</h1>
        </div>
      </div>
    </DataProvider>
  )
}

export default page