import React from 'react'
import beach from '../assets/beach.jpg'
import Borabora from '../assets/Borabora.jpg'
import Borabora2 from '../assets/Borabora2.jpg'
import Maldives from '../assets/Maldives.jpg'
import Goa from '../assets/Goa.jpg'


export default function Destination() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
        <p className='py-3'>On the Caribbean's Best Beaches</p>
        <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={beach} alt="/" />
            <img className='w-full h-full object-cover' src={Borabora} alt="/" />
            <img className='w-full h-full object-cover' src={Borabora2} alt="/" />
            <img className='w-full h-full object-cover' src={Maldives} alt="/" /> 
            <img className='w-full h-full object-cover' src={Goa} alt="/" />
        </div>
    </div>
  )
}
