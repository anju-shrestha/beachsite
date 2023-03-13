import React from 'react'
import beach from '../assets/beach.jpg'
import Borabora from '../assets/Borabora.jpg'
import Borabora2 from '../assets/Borabora2.jpg'
import Maldives from '../assets/Maldives.jpg'
import Goa from '../assets/Goa.jpg'
import Juhu from '../assets/Juhu.jpg'
import WestCoast from '../assets/WestCoast.jpg'

import SelectCard from './SelectCard'

export default function Selects() {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      <SelectCard bg={beach} text='Beach'/>
      <SelectCard bg={Borabora} text='Bora bora'/>
      <SelectCard bg={Borabora2} text='Andaman'/>
      <SelectCard bg={Maldives} text='Maldives'/>
      <SelectCard bg={Goa} text='Goa'/>
      <SelectCard bg={WestCoast} text='WestCoast'/> 
      <SelectCard bg={Juhu} text='Juhu'/>
    </div>
  )
}
