import React from 'react'
import { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';


 const sliderData=[
    {
        url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'
    },
    {
      url:'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1400&q=60'
    },
    {
        url:'https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60'
    },
    {
        url:'https://images.unsplash.com/photo-1540202404-a2f29016b523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'
    },
    {
        url: 'https://media.istockphoto.com/id/1440026469/photo/beach-with-a-dock-and-a-boat-floating-on-the-water-near-a-forest-with-palm-trees.jpg?s=170667a&w=0&k=20&c=9YtDj1xDXKrNhTV6y5VNqR6E5lnPVv15jwGGrTTFJyI='
    },
    {
        url:'https://media.istockphoto.com/id/512047871/photo/clear-day.jpg?s=170667a&w=0&k=20&c=24-9sjrnw8dNMqks5gZ3Mqf5c9JVRewGwk1BaQgV2-g='
    },
    {
        url:'https://images.unsplash.com/photo-1537162998323-3d3675e0e87c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1400&q=60'
    }
 ];
export default function Carousel() {
    const [slide, setSlide]= useState(0);
    const length =sliderData.length

    const prevSlide =()=>{
        setSlide(slide===length-1? 0: slide+1)
    };
    const nextSlide =()=>{
        setSlide(slide===0? length-1: slide-1)
    };

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer first-letter left-8'/>
        <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer first-letter right-8'/>
      {sliderData.map((item, index)=>(
        <div className={index===slide? 'opacity-100' : 'opacity-0'}>
            {index===slide &&  (<img  className='w-full h-full rounded-md' src={item.url} alt="/" />)}
           
        </div>
      ))}
    </div>
  )
}

