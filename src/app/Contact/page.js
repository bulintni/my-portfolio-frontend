"use client"
import React from 'react'
import { useDataContext } from '../context/DataContext'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export default function contact() {
  const { Contact } = useDataContext();
  return (
    <div className='flex justify-center items-center mt-10'>
      <div className='border-2 rounded-lg xl:w-[700px] xl:h-[700px] shadow-lg
      bg-white flex items-center flex-col p-10'>
        <h1 className='font-bold text-7xl'><span className='text-orange-500'>Contact</span> Me</h1>
        {Contact.map((detail, index) => (
          <div key={index} className='mt-8'>
            <h1 className='text-lg my-5'><span className='font-bold text-orange-500 mr-4'>Name :</span> {detail.fullname}</h1>
            <h1 className='text-lg my-5'><span className='font-bold text-orange-500 mr-4'>Address :</span> {detail.address}</h1>
            <h1 className='text-lg my-5'><span className='font-bold text-orange-500 mr-4'>Email :</span> {detail.email}</h1>
            <h1 className='text-lg my-5'><span className='font-bold text-orange-500 mr-4'>Phone :</span> {detail.phoneNumber}</h1>
            <h1 className='text-lg my-5'><span className='font-bold text-orange-500 mr-4'>LinkedIn :</span> {detail.linkedIn}</h1>
          </div>
        ))}
        <div className='flex flex-col justify-center items-center w-[80%] h-full mt-4'>
          <div>
            <FontAwesomeIcon className="text-orange-500 mb-2" size='2x' icon={faQuoteLeft} />
            <p className='text-3xl p-4'>Thank you for visiting my website. Hope to have the opportunity to work together. </p>
          </div>
        </div>
      </div>
    </div>
  )
}
