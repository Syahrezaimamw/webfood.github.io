import React, { useEffect, useState } from 'react'
import { getCategory, getDataCategory } from '../service/api'
import Skeleton from '@mui/material/Skeleton';
export const Ourmenu = () => {
    const [category,setcategory]=useState([])
    const [judul,setJudul]=useState('Beef')
    const [dataMeals,setDatameals]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        getCategory().then(a=>setcategory(a))
    },[])
    useEffect(()=>{
        getDataCategory(judul,setLoading).then((data)=>setDatameals(data))
        
    },[judul])
    function handleSearch(e){
        setLoading(true)
        setJudul(e.target.innerText)      
    }
    console.log(dataMeals)
  return (
    <div className='max-w-6xl text-hitam m-auto mt-[70px]'>
        <h1 className='text-center text-7xl font-playfair'>Our Menu</h1>
        <div className='flex justify-center'>

        <p className='mt-5 text-center  w-[40%] font-edium text-[#495460]'>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        </div>
        <div className='flex justify-center gap-4 mt-[50px] text-hitam'>
            {
              
                category.map((a)=>{
                    if(a.idCategory <= 6){
                        return(
                            <Buttonn key={a.idCategory} judul={judul} handleSearch={handleSearch} title={a.strCategory}></Buttonn>
                        )
                    }
                }
                    
                )
            }
            
        </div>
        <div className='flex flex-wrap justify-between gap-6 mt-[70px]'>
            {
                  loading ? 
                  [1,2,3,4,5,6,7,8,9,10,11,12].map((a)=>(
                    <CardSekelaton key={a}/>
                  ))
                   :

                dataMeals.map((e,i)=>
                {
                    if(i <= 11){
                        return(
                            
                            <Cardmeals key={i} img={e.strMealThumb} judul={judul} price={e.idMeal} title={e.strMeal}></Cardmeals>
                        )
                    }
                }
                )
            }
            
        </div>
    </div>
  )
}

function Buttonn({handleSearch,title,judul}){
    return(
        <button  onClick={(a)=>handleSearch(a)} className={`${judul===title?'bg-merah text-textputih':''}  px-10 py-2 font-bold border-2 border-gray-200 rounded-full`}>{title}</button>

    )
}

function Cardmeals({img,price,title,judul}){
    return(
        <div className='w-[270px] overflow-hidden rounded-xl border-2 border-gray-200'>
            <img src={img} alt="" className='h-[250px] w-full' />
            <div className='px-6 pb-8 mt-6 text-center'>
                <h1 className='text-xl font-bold text-merah'>{price}</h1>
                <h1 className='mt-2 font-bold text-[18px]'>{title.substring(0,10)}</h1>
                <p className='mt-2 text-[15px] text-paraf'>Made with {judul}, lettuce, salt, oil and other ingredients.</p>
            </div>
        </div>
    )
}
function CardSekelaton(){
    return(
        <div>

        <Skeleton variant="rectangular" className='w-[270px] rounded-xl ' height={250} />
        <div className='flex justify-center w-full mt-4'>
        <Skeleton variant="text" className='w-[100px]' sx={{ fontSize: '1rem' }} />
        </div>
        <div className='flex justify-center w-full'>
        <Skeleton variant="text" className='w-[130px]' sx={{ fontSize: '1.2rem' }} />
        </div>
        <div className='flex justify-center w-full'>
        <Skeleton variant="text" className='w-full' sx={{ fontSize: '1.2rem' }} />
        </div>
        <div className='flex justify-center w-full'>
        <Skeleton variant="text" className='w-full' sx={{ fontSize: '1.2rem' }} />
        </div>
        </div>
    )
}