"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { useDataContext } from '@/app/context/DataContext'
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function NavBar() {
  const { NavLink } = useDataContext();
  const pathname = usePathname();
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  }


  return (
    <div>
      <nav className='flex justify-between items-center bg-gray-900 px-10 py-5 mx-lg-20 mx-10 mt-10 rounded-full sticky top-0 z-50'>
        <div>
          <Link href="/" className='text-xl font-bold text-white'>My Portfolio</Link>
        </div>
        <div className='hidden lg:block'>
          {NavLink.map((link, index) => {
            const isActive = pathname === link.link;
            return (
              <Link key={index} className={`mx-3 text-white font-bold hover:ease-in-out duration-300 p-4 rounded-full ${isActive ? `bg-orange-500 text-black` : `text-white hover:bg-orange-500 hover:text-black`
                }`}

                href={link.link}>
                {link.name}
              </Link>
            )
          })}
        </div>
        <div className='lg:hidden'>
          <button className='text-white text-3xl' onClick={toggleNavbar}><FontAwesomeIcon icon={faBars} /></button>
        </div>
      </nav>
      {isClick && (
        <div className='bg-gray-900 flex flex-col absolute z-40 sm: w-[80%] w-[75%] md:ml-20 ml-12 md:mt-0 -mt-7 py-7 rounded-b-xl lg:hidden'>
          {NavLink.map((link, index) => {
            const isActive = pathname === link.link;
            return (
              <Link key={index} className={`mx-3 text-white font-bold hover:ease-in-out duration-300 p-4 rounded-full ${isActive ? `bg-orange-500 text-black` : `text-white hover:bg-orange-500 hover:text-black`
                }`}

                href={link.link}>
                {link.name}
              </Link>
            )
          })}
        </div>
      )}
    </div>

  )
}
