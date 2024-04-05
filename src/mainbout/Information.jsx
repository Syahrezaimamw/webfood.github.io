import React from 'react'
import gambarMakanan from '../images/yata.png'
export const Information = () => {
    return (
        <div className='py-[90px]  mt-[110px] w-full bg-textputih'>
            <div className='flex justify-between max-w-6xl m-auto text-hitam'>
                <div className='w-[46%]'>
                    <h1 className='text-5xl w-[90%] font-medium font-playfair leading-[56px] '>A little information for our valuable guest</h1>
                    <p className='text-[15px] w-[90%] mt-6'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                    <div className='flex flex-wrap w-[97.6%] justify-between mt-[50px]   gap-7 '>
                        <Kotak judul={'Locations'}>
                            <h1 className='text-center font-playfair'>3</h1>
                        </Kotak>
                        <Kotak judul='Founded'>
                            
                            <h1 className='text-center font-playfair'>1995</h1>
                        </Kotak>
                        <Kotak judul={'Staff Members'}>
                            <h1 className='text-center font-playfair'>65+</h1>
                            
                        </Kotak>
                        <Kotak judul={'Satisfied Customers'}>
                        <h1 className='text-center font-playfair'>100%</h1>

                        </Kotak>
                    </div>
                </div>
                <div>
                    <img src={gambarMakanan} alt=""  className='rounded-xl w-[468px]  h-[578px]'/>
                    
                </div>
            </div>
        </div>
    )
}


function Kotak({ judul, children }) {
    return (
        <div className='pb-[33px] pt-[28px] tr bg-white w-[244px] rounded-xl'>
            <h1 className='text-5xl font-medium'>{children}</h1>
            <h1 className='text-[15px] mt-4 font-medium text-center'>{judul}</h1>
        </div>
    )

}