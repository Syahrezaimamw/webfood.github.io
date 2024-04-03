import React from 'react'

export const Card = ({img,title}) => {
  return (
    <div className='px-[18px] pt-8 pb-6 border-2 border-[#DBDFD0] gap-2 flex flex-col items-center rounded-xl'>
        <div className='size-[70px] rounded-full bg-[rgb(242,243,240)]  flex justify-center items-center' >
            <img src={img} alt="" className='w-[33px]' />
        </div>
        <h1 className='mt-5 text-xl font-bold'>{title}</h1>
        <p className='text-center text-paraf w-[90%] text-[14px]'>In the new era of technology we look in the future with certainty and pride for our life.</p>
        <h3 className='mt-8 font-bold text-merah'>Explore Menu</h3>
    </div>
  )
}
