import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../style'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { ComputersCanvas } from './canvas'
import Button from './Button'

const About = () => {
  return (
    <>
    <section id='about'className='flex gap-20 max-lg:flex-col'>
      <div>
      <motion.div variants={textVariant()} >
      <p className={styles.sectionSubText}>Introduction→</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify '>
              I am extremely proficient in Front-End Development using HTML5,
              Cascade Style Sheets (CSS3), Bootstrap, Javascript, jquery And
              apart from Front-End, I have good knowledge in Back-End using
              nodeJs, ExpressJs as well as in designing using canva, Sketch &
              Figma. I also have good knowledge in programming languages like C,
              C++ and continuously engage in trying to extend my skills with new
              technology.
              <p className='font-bold text-lg mt-5'>email: <span>rahulaverma16@gmail.com</span></p>
              <div className='flex flex-row flex-wrap'>
              <Button title={"Hire Me"}/>
              <Button title={"Resume"}/>
              </div>
    </motion.p>
      </div>
      <div className='h-96'>
        <ComputersCanvas/>
      </div>
    </section>
     
    </>
   
  )
}

export default SectionWrapper(About, "about")