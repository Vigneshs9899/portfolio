import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20 bg-zinc-900 text-white py-10'>
      <div className='text-center'>
        <Image src={assets.logo_dark} alt='Logo' className='w-36 mx-auto mb-2' />
        <div className='w-max flex items-center gap-2 mx-auto text-textPrimary'>
          <Image src={assets.mail_icon_dark} alt='Mail Icon' className='w-6' />
          vigneshsaravanan.dev@outlook.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-border mx-[10%] mt-12 pt-6'>
        <p className='text-accentHover'>&copy; 2025</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 text-accent'>
          <li>
            <a target='_blank' href='https://github.com/Vigneshs9899' rel='noopener noreferrer' className='hover:text-accentHover transition-colors duration-300'>
              Github
            </a>
          </li>
          <li>
            <a target='_blank' href='https://www.linkedin.com/in/vigneshs9899/' rel='noopener noreferrer' className='hover:text-accentHover transition-colors duration-300'>
              Linkedin
            </a>
          </li>
          <li>
            <a target='_blank' href='https://www.behance.net/vigneshs117' rel='noopener noreferrer' className='hover:text-accentHover transition-colors duration-300'>
              Behance
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
