import React from 'react'
import m51 from '../images/main5 1.png'
import m52 from '../images/main5 2.png'
import m53 from '../images/main5 3.png'
import { FaRegClock } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
export const Main5 = () => {
    const data = [
        {
            ic: <FaRegClock />,
            desk: 'Delivery within 30 minutes'
        },
        {
            ic: <FaRegBookmark />,
            desk: 'Best Offer & Prices'
        },
        {
            ic: <FaCartShopping />,
            desk: 'Online Services Available'
        },
    ]
    // bg-[#F9F9F7] 
    return (
        <div className='w-full    bg-[#F9F9F7] 
    pt-[120px] pb-[10px] mt-[110px] '>

            <div className='max-w-6xl text-hitam  flex justify-between items-center  m-auto  mb-[100px]'>
                <div className='flex items-center gap-5 '>
                    <div className=' w-[360px] relative h-[520px]'>
                        <img src={m51} alt="" className='absolute top-[-30px] h-[520px]' />
                    </div>
                    <div className='flex flex-col justify-start h-full w-[240px] gap-5'>
                        <div>

                            <img src={m52} alt="" className='h-[280px]' />
                        </div>
                        <div>

                            <img src={m53} alt="" className='h-[220px]' />
                        </div>

                    </div>
                </div>
                <div className='w-[38%] h-full text-hitam'>
                    <h1 className='text-5xl font-playfair w-[80%]'>Fastest Food Delivery in City</h1>
                    <p className='text-paraf text-[15px] w-[90%] mt-5'>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
                    <div className='mt-7'>
                        {
                            data.map((a, i) => (
                                <div key={i} className='flex items-center gap-2 mb-4'>
                                    <div className='size-[30px] rounded-full bg-merah text-white flex justify-center items-center'>
                                        {a.ic}

                                    </div>
                                    <p className='font-semibold'>{a.desk}</p>

                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
