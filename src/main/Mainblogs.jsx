import React from 'react'
import { Button } from '../components/Button'
import blg1 from '../images/blg1.png'
import blg2 from '../images/blg2.png'
import blg3 from '../images/blg3.png'
import blg4 from '../images/blg4.png'
import blg5 from '../images/blg5.png'
export const Mainblogs = () => {
    const data=[
        {
            img:blg2,
            date:'January 3, 2023',
            desk:'How to prepare the perfect french fries in an air fryer'
        },
        {
            img:blg3,
            date:'January 3, 2023',
            desk:'How to prepare delicious chicken tenders'
        },
        {
            img:blg4,
            date:'January 3, 2023',
            desk:'7 delicious cheesecake recipes you can prepare'
        },
        {
            img:blg5,
            date:'January 3, 2023',
            desk:'5 great pizza restaurants you should visit this city'
        },
    ]
  return (
    <div className='w-full py-[100px]  bg-[#F9F9F7]
    '>

    <div className='max-w-6xl m-auto text-hitam '>
        <div className='flex items-center justify-between w-full'>
            <h1 className='text-[42px] font-playfair font-medium'>Our Blog & Articles</h1>
            <Button type='red' p={true}>Read All Articles</Button>
        </div>
        <div className='flex items-center justify-between w-full'>
            <div className='w-[48%] mt-[45px]'>
                <div className='overflow-hidden bg-white sh rounded-xl'>
                    <div className='overflow-hidden rounded-t-xl'>
                        <img src={blg1} alt="" />
                    </div>
                    <div className='pb-10 mt-10 px-9'>
                    <p className='text-[#737865] text-[15px] font-medium'>January 3, 2023</p>
                    <h1 className='mt-3 font-semibold'>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h1>
                    <p className='text-paraf text-[15px] mt-3'>Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.</p>

                    </div>
                </div>
            </div>
            <div className='w-[48%]  flex flex-wrap gap-5 justify-between'>
                {data.map((a,i)=>(
                    
                <Carrdd key={i} img={a.img} desk={a.desk} date={a.date} ></Carrdd>                
                ))}
            </div>
        </div>
    </div>
    </div>
  )
}

function Carrdd({img,date,desk}){
    return(
        <div className='w-[48%] sh text-hitam relative top-[22px] bg-white rounded-xl  font-medium'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='px-4 pb-8 mt-6'>
                <p className='text-[15px] text-[#737865]'>{date}</p>
                <p className='mt-2 font-semibold'>{desk}</p>
            </div>
        </div>
    )
}
