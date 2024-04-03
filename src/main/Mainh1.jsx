import React from 'react'
import { Button } from '../components/Button'
export const Mainh1 = () => {
  return (
    <div className='w-full m-auto h-[602px]  bgi'>
        <div className='flex items-center justify-center h-full max-w-6xl m-auto'>
            <div className='m-auto w-[40%] flex flex-col gap-5'>

            <h1 className='text-center text-[80px] leading-[70px] font-playfair '>Best food for your taste</h1>
            <p className='text-center w-[90%] text-hitam mt-2 '>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
            <div className='flex justify-center w-full gap-3 mt-2 text-hitam'>
                <Button type='red' p={true}>Book A Table</Button>
                <Button p={true}>Explore Menu</Button>
            </div>
            </div>
        </div>
    </div>
  )
}
