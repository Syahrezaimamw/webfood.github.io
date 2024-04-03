import React from 'react'
import { Navbar } from '../components/Navbar'
import { Mainh1 } from '../main/Mainh1'
import { Mainh2 } from '../main/Mainh2'
import { Main4 } from '../main/Main4'
import { Main3 } from '../main/Main3'
import { Main5 } from '../main/Main5'
import { Main6 } from '../main/Main6'
import { Mainblogs } from '../main/Mainblogs'
import { Footer } from '../components/Footer'
import { Main3ph } from '../main/Main3ph'
export const Home = () => {
  return (
    <div>
        <Navbar type={'Home'}></Navbar>
        <Mainh1></Mainh1>
        <Mainh2></Mainh2>
        <Main3ph></Main3ph>
        <Main4></Main4>
        <Main5></Main5>
        <Main6></Main6>
        <Mainblogs></Mainblogs>
        <Footer></Footer>
    </div>
  )
}
