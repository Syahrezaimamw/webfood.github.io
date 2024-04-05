import React from 'react'
import profil1 from '../images/profil1.png'
import profil2 from '../images/profil2.png'
import profil3 from '../images/profil3.png'
export const Main6 = () => {
    const data=[
        {
            pp:profil1,
            judul:'“The best restaurant”',
            desk:'Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.',
            nama:'Sophire Robson',
            alamat:'Los Angeles, CA'
        },
        {
            pp:profil2,
            judul:'“Simply delicious”',
            desk:'Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.',
            nama:'Matt Cannon',
            alamat:'San Diego, CA'
        },
        {
            pp:profil3,
            judul:'“One of a kind restaurant”',
            desk:'The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.',
            nama:'Andy Smith',
            alamat:'San Francisco, CA'
        },
    ]
  return (
    <div className='max-w-6xl m-auto text-hitam mt-[110px] mb-[110px]'>
        <h1 className='text-5xl font-medium text-center font-playfair'>
        What Our Customers Say
        </h1>
        <div className='flex items-center justify-between w-full gap-8 mt-20'>
            {
                data.map((a,i)=>(
                    <Cardd key={i} title={a.judul} desk={a.desk} pp={a.pp} name={a.nama} alamat={a.alamat}></Cardd>
                ))
            }
        </div>
    </div>
  )
}


function Cardd({title,desk,name,alamat,pp}){
    return(
        <div className='bg-[#F9F9F7] px-8 py-8 rounded-xl w-[340px] text-hitam'>
            <div className='pb-7 border-b-[1px] border-[#DBDFD0]'>

            <h1 className='text-lg font-bold text-merah'>{title}</h1>
            <p className='text-[15px] text-paraf mt-4'>{desk}</p>
            </div>
            <div className='flex items-center mt-7 gap-4 text-[15px]'>
                <img src={pp} alt="" className='w-[45px]' />
                <div>
                    <p className='font-semibold'>{name}</p>
                    <p className='text-paraf text-[14px]'>{alamat}</p>
                </div>
                
            </div>
            
        </div>
    )
}