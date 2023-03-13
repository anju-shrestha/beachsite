import React from 'react'

export default function SelectCard(props) {
  return (
        <div className="relative">
            <img className='w-full h-full objecct-cover' src={props.bg} alt="/" />
            <div className=" abolute top-0 left-0 w-ful h-full">
                <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                    {props.text}
                </p>
           </div>
        </div>
    
  )
}
