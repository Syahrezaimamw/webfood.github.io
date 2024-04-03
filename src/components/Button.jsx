import React from 'react'

export const Button = ({children,type,p}) => {
  return (
    <button className={`${type=='red'?'bg-[#AD343E] border-[#AD343E] text-white':'border-black  bg-transparent'} ${p?'py-3':''} px-6  font-semibold text-[13px] py-2 border-[2px] rounded-full`}>{children}</button>
  )
}
