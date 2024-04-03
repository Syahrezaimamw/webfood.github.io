import React from 'react'
import gambar1 from '../images/1.png'
import gambar2 from '../images/2.png'
import gambar3 from '../images/3.png'
import gambar4 from '../images/4.png'
export const Main4 = () => {
    const data=[
        {
            img:gambar1,
            title:'Caterings'
        },
        {
            img:gambar2,
            title:'Birthdays'
        },
        {
            img:gambar3,
            title:'Weddings'
        },
        {
            img:gambar4,
            title:'Events'
        },
    ]
  return (
    <div className='max-w-6xl m-auto mt-[110px]'>
        <h1 className='text-[46px] w-[45%] font-medium font-playfair '>We also offer unique services for your events</h1>
        <div className='flex items-center justify-between w-full gap-3 mt-[60px]'>

            {
                data.map((a,i)=>(
                    <CardAcara img={a.img} title={a.title}></CardAcara>
                ))
            }
        </div>
    </div>
  )
}

function CardAcara({img,title}){
    return(
        <div className='w-[260px]'>
            <div className='w-full h-[270px] overeflow-hidden'>

            <img src={img} alt="" className='rounded-xl h-[270px] w-full' />
            </div>
            <p className='text-lg font-bold mt-7'>{title}</p>
            <p className='stext-paraf text-[14px] mt-2'>In the new era of technology we look in the future with certainty for life.</p>
        </div>
    )
}