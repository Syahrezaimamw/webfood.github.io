import React from 'react'
import logo from '../images/fLogo.png'
import f1 from '../images/f1.png'
import f2 from '../images/f2.png'
import f3 from '../images/f3.png'
import f4 from '../images/f4.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
export const Footer = () => {
  return (
    <div className='w-full bg-abu pt-[100px] pb-[60px]'>
        <div className='max-w-6xl m-auto '>
            <div className='flex justify-between w-full'>
                <div className='w-[26%]'>

                    <img src={logo} alt="" className='w-[230px]' />
                    <p className='text-[#ADB29E] mt-3 text-[15px]'>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
                    <div className='flex items-center gap-3 mt-3'>
                        {
                             [<FaTwitter />,<FaFacebookF />, <FaInstagram />, <FaGithub />].map((a,i)=>(
                                <div key={i} className='size-[35px] text-[15px] bg-merah flex justify-center items-center rounded-full text-textputih'>
                                    {a}
                                </div>
                             ))
                        }

                    </div>
                    
                </div>
                <div className='flex gap-[80px]'>
                    <List judul={'Pages'}>{['Home','About','Menu','Pricing','Blog','Contact','Delivery']}</List>
                    <List judul={'Utility Pages'}>{['Start Here','Styleguide','Password Protected','404 Not Found','Licenses','Changelog','View More']}</List>
                </div>
                <div className='text-textputih text-[15px] w-[355px]  font-semibold'>
                    <p>Follow Us On Instagram</p>
                    <div className='flex flex-wrap justify-between gap-4 mt-4'>
                        {
                            [f1,f2,f3,f4].map((a,i)=>(
                                <img src={a} key={i} className='w-[168px]'></img>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
            <div className='w-full mt-[110px] '>
                <p className='text-center text-[#ADB29E] text-[14px]'>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
                
            </div>
        </div>
    </div>
  )
}

function List ({judul,children}){
    return(
<div className='flex flex-col text-textputih'>
        <p className='mb-5 font-semibold text-[15px]'> {judul}</p>
        <ul className='flex flex-col gap-5 '>
        
        {
            children.map((a,i)=>(
                
                <li key={i} className='text-[#DBDFD0] text-[15px]'>{a}</li>
            ))
        }
    </ul>
</div>
    )
    
}