import React from 'react'
import icon1 from '../images/tea 1.png'
import icon2 from '../images/Vector.png'
import icon3 from '../images/Vector (1).png'
import icon4 from '../images/Vector (2).png'
import { Card } from '../components/Card'
export const Mainh2 = () => {
    const obj=[
        {
            ic :icon1,
            title:'Breakfast'
        },
        {
            ic :icon2,
            title:'Main Dishes'
        },
        {
            ic :icon3,
            title:'Drinks'
        },
        {
            ic :icon4,
            title:'Deserts'
        },
        
    ]
  return (
    <div className='max-w-6xl m-auto mt-20 mb-[110px] text-hitam'>
        <h1 className='text-5xl font-medium text-center font-playfair'>Browse Our Menu</h1>
        <div className='flex justify-between w-full gap-5 mt-[60px]'>
            
        {
            obj.map((a,i)=>(
                <Card key={i} img={a.ic} title={a.title}></Card>
                
                ))
            }
            </div>
        
    </div>
  )
}
