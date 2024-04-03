import React from 'react'
import { Navbar } from '../components/Navbar'
import { Main3 } from '../main/Main3'
import ab from '../images/ab.png'
import { MainPlay } from '../mainbout/MainPlay'
export const About = () => {
  return (
    <div>
        <Navbar type='About'/>
        <Main3 img={ab}/>
        <MainPlay></MainPlay>
    </div>
  )
}
