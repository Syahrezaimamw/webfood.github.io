import React from 'react'
 import o1 from '../images/o1.png'
 import o2 from '../images/o2.png'
 import o3 from '../images/o3.png'
 import o7 from '../images/07.png'
 import o8 from '../images/08.png'
 import o9 from '../images/09.png'
 import o4 from '../images/04.png'
 import o5 from '../images/05.png'
 import o6 from '../images/06.png'
export const Cantorder = () => {
  return (
    <div className='mt-[110px] py-[90px] bg-textputih'>
        <div className='flex items-center justify-between max-w-6xl m-auto text-hitam '>
            <div className='w-[30%]'>

            <h1 className='text-5xl font-medium font-playfair'>You can order through apps</h1>
            <p className='mt-3 text-[15px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
            </div>
            <div className='flex flex-col'>
                <div className='flex items-center justify-center w-full gap-4'>
                    {

                        [o1,o2,o3].map((a,i)=>(
                         <div key={i} className='px-8 py-5 bg-white rounded-xl trx'>
                            <img src={a} alt="" className='w-[100px] h-[20px]' />
                            </div>   
                            ))
                        }
                </div>
                <div className='flex items-center justify-center w-full gap-4 my-5'>
                    {

                        [o4,o5,o6].map((a,i)=>(
                         <div key={i} className='px-8 py-5 bg-white rounded-xl trx'>
                            <img src={a} alt="" className='w-[130px] h-[25px]' />
                            </div>   
                            ))
                        }
                </div>
                <div className='flex items-center justify-center w-full gap-4'>
                    {

                        [o7,o8,o9].map((a,i)=>(
                         <div key={i} className='px-8 py-5 bg-white rounded-xl trx'>
                            <img src={a} alt="" className='w-[100px] h-[20px]' />
                            </div>   
                            ))
                        }
                </div>
                <div className='flex items-center w-full'></div>
                <div className='flex items-center w-full'></div>

            </div>
        </div>
    </div>
  )
}
