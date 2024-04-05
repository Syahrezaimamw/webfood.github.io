import React from 'react'
import { Navbar } from '../components/Navbar'
import { Ourmenu } from '../Mainmenu/Ourmenu'
import { Cantorder } from '../Mainmenu/Cantorder'
import { Footer } from '../components/Footer'

export const Menu = () => {
  return (
    <div  className='font-dmsans'>
        <Navbar type={'Menu'}></Navbar>
        <Ourmenu/>
        <Cantorder></Cantorder>
        <Footer></Footer>
    </div>
  )
}
