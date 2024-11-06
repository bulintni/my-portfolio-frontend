"use client"
import React from 'react'
import NavBar from './NavBar'
import { DataProvider } from '@/app/context/DataContext'

export default function Layout({ children }) {
  return (
    <DataProvider>
      <>
        <NavBar />
        <div className='flex justify-center mx-20'>{children}</div>
      </>
    </DataProvider>
  )
}
