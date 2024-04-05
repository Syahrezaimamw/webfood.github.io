import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import logo from '../images/Logo.png'
import { Button } from './Button';
import { Link } from 'react-router-dom';
export const Navbar = ({type}) => {
   const datanav= [
    {
        name:'Home',
        link:'/webfood.github.io/'
    },
    {
        name:'About',
        link:'/webfood.github.io/about/'
    },
    {
        name:'Menu',
        link:'/webfood.github.io/Menu/'
    },
    {
        name:'Pages',
        link:'/webfood.github.io/'
    },
    {
        name:'Contact',
        link:'/webfood.github.io/'
    },
]
    return (
        <div>
            <div className='w-full bg-abu '>

                <div className='flex items-center justify-between max-w-6xl py-2 m-auto'>
                    <div className='flex items-center gap-7 text-[15px] text-textputih'>
                        <div className='flex items-center gap-2'>
                            <FaPhone>
                            </FaPhone>
                            <p>(414) 857 - 0107</p>

                        </div>
                        <div className='flex items-center gap-2'>
                            <FaRegEnvelope></FaRegEnvelope>
                            <p>yummy@bistrobliss</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        {
                            [<FaFacebookF />, <FaTwitter />, <FaInstagram />, <FaGithub />].map((a,i) => (
                                <div key={i} className='size-[30px] text-[13px] text-textputih rounded-full flex items-center justify-center bg-[#F9F9F7]/10'>
                                    {a}
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <div className='w-full bg-[#F9F9F7]/10'>

            <div className='flex items-center justify-between max-w-6xl py-5 m-auto '>
                <img src={logo} alt="" className='w-[230px]' />
                <ul className='flex [&_li]:cursor-pointer gap-4  font-medium '>

                {
                   datanav
                    .map((a,i)=>(
                        <li key={i} className={`hover:bg-[#DBDFD0] px-4 py-1  rounded-full ${type==a.name?'bg-[#DBDFD0]':''}`}>
                            <Link to={a.link}>
                            {a.name}
                            </Link>
                            
                        </li>
                    ))
                }
                </ul>
                < Button>
                Book A Table
                </Button> 
            </div>
            </div>
        </div>
    )
}
