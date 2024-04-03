import React from 'react'
import play from '../images/playy.png'
export const MainPlay = () => {
  return (
    <>
    <div className='w-full mt-[110px] bg-[url("../src/images/bgb.png")] h-[600px] bg-no-repeat bg-cover'>
        
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='size-[65px] bg-white rounded-full flex justify-center items-center'>
                <img src={play} alt="" className='w-[15px]' />
            </div>
            <h1 className='mt-3 text-4xl font-playfair text-textputih w-[30%] text-center'>Feel the authentic & original taste from us</h1>
        </div>
    </div>
        <div className='max-w-6xl m-auto'></div>
    </>
  )
}