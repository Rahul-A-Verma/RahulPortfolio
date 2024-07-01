import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../style'
import Button from './Button'

const Hero = () => {
  return (
    <section id='home' className='relative w-full h-screen mx-auto mt-10'>
      
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
       
        <div className='flex flex-row justify-center items-center mt-5 gap-1'>
          {/* <div className='w-5 h-5 rounded-full bg-[#915eff]'/> */}
          <div className='w-1 sm:h-72 h-40 orange-gradient'/>
        </div>
        
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#eb4a4a]'>Rahul</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-ehite-100`}>I develop frontEnd web <br className='sm:block hidden'/> applications and user interfaces</p>
          <Button title={"Hire Me"}/>
        </div>
        
        <div className='flex flex-row justify-center items-center mt-5 gap-1'>
          {/* <div className='w-5 h-5 rounded-full bg-[#915eff]'/> */}
          <div className='w-1 sm:h-72 h-40 white-gradient'/>
        </div>
      </div>
      
      {/* <ComputersCanvas/> */}
    </section>
  )
}

export default Hero;
