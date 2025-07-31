import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>

        

        <motion.h3
          initial={{ y:-20, opacity:0}}
          whileInView={{ y:0, opacity:1 }}
          transition={{ duration:0.6, delay:0.3 }}

         className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-sans'>Hi! <Image src={assets.hand_icon} alt='' className='w-6'/> </motion.h3>

        <motion.h1

          initial={{ y:-30, opacity:0}}
          whileInView={{ y:0, opacity:1 }}
          transition={{ duration:0.8, delay:0.5 }}
        
        className='text-3xl sm:text-6xl lg:text-[66px] font-sans text-heading'>I'm Vignesh</motion.h1>

        <motion.p 
        
          initial={{ opacity:0}}
          whileInView={{ opacity:1 }}
          transition={{ duration:0.6, delay:0.7 }}
        
        className='max-w-2xl mx-auto font-sans text-textPrimary'>
           Full Stack Developer - passionate about building scalable digital solutions.
        </motion.p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a

              whileHover={{ scale: 1.05 }}
              initial={{ y:30, opacity:0}}
              whileInView={{ y:0, opacity:1 }}
              transition={{ duration:0.3 }}
            
            
            
            href="#works" className='font-sans px-10 py-3 border border-accent rounded-full text-accent flex items-center gap-2 dark:bg-transparent hover:border-none hover:bg-none'>View my works</motion.a>
            <motion.a
            
              whileHover={{ scale: 1.05 }}
              initial={{ y:30, opacity:0}}
              whileInView={{ y:0, opacity:1 }}
              transition={{ duration:0.3 }}
          
            
            href="https://drive.google.com/file/d/112QTfD_pex9ShnJMQuP_e0gmICUVqspg/view?usp=sharing" download className='font-sans px-10 py-3 border rounded-full border-border flex items-center gap-2 bg-accent dark:text-textPrimary hover:bg-accentHover'>Download My resume </motion.a>
        </div>

    </div>
  )
}

export default Header
