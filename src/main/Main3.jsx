import React from 'react'
import { FaPeriscope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { Button } from '../components/Button';
import { FaRegEnvelope } from "react-icons/fa6";
export const Main3 = ({img}) => {
  return (
    <div className='w-full bg-[#F9F9F7] pt-[90px] pb-10 '>
        
    <div className='flex justify-between max-w-6xl items-center m-auto pb-[100px]'>
        <div className='relative w-[45%] rounded-lg'>
            <img src={img} alt="" className='w-[95%] rounded-lg' />
            <div className='absolute bottom-[-45px] right-[-35px] p-10 w-[67%] text-textputih bg-abu rounded-xl'  >
                <h1 className='text-lg font-semibold mb-7'>Come and visit us</h1>
                <ul className='[&_li]:flex [&_li]:gap-3 [&_li]:items-start text-textputih/90 flex flex-col gap-4   [&_p]:text-[14px] '>
                    <li><FaPhone className='text-lg text-textputih'/> <p>(414) 857 - 0107</p></li>
                    <li><FaRegEnvelope className='text-lg text-textputih'/> <p>happytummy@restaurant.com</p></li>
                    <li><FaPeriscope className='text-xl text-textputih'/> <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p></li>
                </ul>
            </div>
        </div>
        <div className='w-[45%] h-full flex items-center  '>
            <div className='flex flex-col items-start justify-start gap-5'>

            <h1 className='text-5xl font-medium font-playfair'>We provide healthy food for your family.</h1>
            <p className='font-semibold text-hitam text-[15px] w-[93%]'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
            <p className='text-paraf text-[15px] w-[94%]'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
            <Button p={true}>More About Us</Button>
            </div>
        </div>
    </div>
    </div>
  )
}
