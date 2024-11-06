"use client"
import React from 'react'
import Image from 'next/image'
import AboutMeImg from '@/assets/About_me1.jpg'
import { useDataContext } from '../context/DataContext'


export default function about() {
  const { AboutMe, Education, MySkills } = useDataContext();
  const clickToResume = () => {
    window.open('https://drive.google.com/file/d/1F6JgDUPLznszh7Yy8XYWL8cI0u8PeZa9/view?usp=sharing', '_blank')
  }


  return (
    <div className='flex justify-center flex-col p-10 w-[80%]'>

      {/* About Me Container */}
      <div className='flex justify-center mt-10 items-center border-b-2 pb-14 border-gray-500 border-dashed flex-col xl:flex-row'>
        <div className='xl:w-[350px] xl:h-[350px] w-[200px] h-[200px] rounded-full overflow-hidden'>
          <Image
            className='object-cover object-[center_-15px]'
            src={AboutMeImg}
            height={1000}
            alt='About Me 1'
          />
        </div>
        <div className='xl:ml-[100px] xl:w-auto w-72'>
          <h1 className='font-bold xl:text-7xl text-5xl'>
            About
            <span className='text-orange-500'> Me</span>
          </h1>
          <p className='xl:w-[700px] mt-3 xl:text-xl'>
            <span className='text-orange-500 font-bold xl:text-3xl'>Hello, </span>
            My name is Bulin and I want to find a job in the Frontend developer field. I have transferred careers from a Graphic designer. I still have 6 month in doing Frontend work, so I want to find new work experience to develop myself.
          </p>
          <button className='px-6 py-2 bg-orange-500 text-white rounded-lg mt-5' onClick={clickToResume}>My Resume</button>
        </div>
      </div>

      {/* Work Exp */}
      <div className='flex justify-center flex-col items-center pb-16 border-gray-500 border-dashed border-b-2'>
        <h1 className='font-bold text-5xl mt-14'>Work <span className='text-orange-500'>Experince</span></h1>
        <div className='flex gap-8 mt-8 flex-wrap'>
          {AboutMe.map((detail, index) => (
            <div key={index} className='p-8 xl:w-[450px] xl:h-[300px] rounded-lg drop-shadow-lg shadow-lg bg-gray-100 flex flex-col'>
              <div>
                <div className='border-b-2 pb-4 border-dashed'>
                  <h1 className='text-2xl font-bold text-orange-500'>{detail.companyName}</h1>
                  <p className='text-lg font-semibold text-gray-500'>{detail.position}</p>
                  <p>{detail.dateTime}</p>
                </div>
                <p className='mt-4'>{detail.work}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className='flex justify-center flex-col items-center pb-16 border-gray-500 border-dashed border-b-2'>
        <h1 className='font-bold text-5xl mt-14'>
        University / <span className='text-orange-500'>School</span></h1>
        <div className='flex gap-8 mt-8 flex-wrap'>
          {Education.map((detail, index) => (
            <div key={index} className='p-8 xl:w-[450px] xl:h-[200px] md:w-[450px] rounded-lg drop-shadow-lg shadow-lg bg-gray-100 flex flex-col'>
              <div>
                <div className='border-b-2 pb-4 border-dashed'>
                  <h1 className='text-2xl font-bold text-orange-500'>{detail.schoolName}</h1>
                  <p>{detail.dateTime}</p>
                </div>
                <p className='mt-4'>{detail.major}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MySkills */}
      <div className='flex justify-center flex-col items-center pb-16 border-gray-500 border-dashed border-b-2'>
        <h1 className='font-bold text-5xl mt-14'>
        My <span className='text-orange-500'>Skills</span></h1>

        <div className='flex gap-8 mt-8 flex-wrap justify-center'>
          {MySkills.map((detail, index) => (
            <div key={index} className='p-8 xl:w-[200px] xl:h-[200px] rounded-lg drop-shadow-lg shadow-lg bg-gray-100 flex flex-col'>
              <div className='flex justify-center flex-col items-center'>
                <div className='border-b-2 pb-4 border-dashed flex justify-center'>
                  <Image
                    src={detail.logoImg}
                    height={100}
                    alt={detail.skillsName}
                  />
                  <h1 className='text-2xl font-bold text-orange-500'>{detail.schoolName}</h1>
                </div>
                <p className='mt-4 font-bold text-lg'>{detail.skillsName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
