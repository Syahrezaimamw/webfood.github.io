import React from 'react'
import play from '../images/playy.png'
import icb1 from '../images/icb1.png'
import icb2 from '../images/icb2.png'
import icb3 from '../images/icb3.png'
export const MainPlay = () => {
    const data=[
        {
            ic:icb1,
            title:'Multi Cuisine'
        },
        {
            ic:icb2,
            title:'Easy To Order'
        },
        {
            ic:icb3,
            title:'Fast Delivery'
        },
    ]
  return (
    <>
    <div className='w-full mt-[110px] bg-[url("../src/images/bgb.png")] h-[550px] bg-no-repeat bg-cover'>
        
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='size-[65px] bg-white rounded-full flex justify-center items-center'>
                <img src={play} alt="" className='w-[15px]' />
            </div>
            <h1 className='mt-7 text-4xl font-playfair text-textputih w-[30%] text-center'>Feel the authentic & original taste from us</h1>
        </div>
    </div>
        <div className='flex justify-between max-w-6xl gap-[69px] m-auto mt-20'>
            {
                data.map((a,i)=>(
                    <div key={i} className='flex items-start gap-4 text-hitam'>
                        <div>
                            <img src={a.ic} alt="" />
                        </div>
                        <div>
                            <h1 className='text-lg font-semibold'>{a.title}</h1>
                            <p className='text-[15px] w-[90%]'>In the new era of technology we look in the future with certainty life.</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}
