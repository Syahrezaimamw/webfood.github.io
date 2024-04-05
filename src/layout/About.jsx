import React from 'react'
import { Navbar } from '../components/Navbar'
import { Main3 } from '../main/Main3'
import ab from '../images/ab.png'
import { MainPlay } from '../mainbout/MainPlay'
import { Information } from '../mainbout/Information'
import { Main6 } from '../main/Main6'
import { Footer } from '../components/Footer'
export const About = () => {
  return (
    <div  className='font-dmsans'>
        <Navbar type='About'/>
        <Main3 img={ab}/>
        <MainPlay></MainPlay>
        <Information/>
        <Main6></Main6>
        <Footer></Footer>
    </div>
  )
}
