'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "motion/react"

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef()

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Removed light header background image */}

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? 'bg-surface bg-opacity-80 backdrop-blur-lg shadow-sm'
            : ''
        }`}
      >
        <a href="#top">
          <Image src={assets.logo_dark} alt="Logo" className="w-28 cursor-pointer mr-14" />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? '' : 'bg-surface shadow-sm border border-white/10'
          }`}
        >
          <li><a className="font-sans text-white hover:text-accentHover" href="#top">Home</a></li>
          <li><a className="font-sans text-white hover:text-accentHover" href="#about">About me</a></li>
          <li><a className="font-sans text-white hover:text-accentHover" href="#services">Projects</a></li>
          <li><a className="font-sans text-white hover:text-accentHover" href="#work">My Work</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-accent rounded-full ml-4 font-sans text-white hover:bg-accentHover bg-accent"
          >
            Contact
          </motion.a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_white} alt="" className="w-6" />
          </button>
        </div>

        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-surface text-white transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={assets.close_white} alt="" className="w-5 cursor-pointer" />
          </div>

          <li><a className="font-sans hover:text-accentHover" onClick={closeMenu} href="#top">Home</a></li>
          <li><a className="font-sans hover:text-accentHover" onClick={closeMenu} href="#about">About me</a></li>
          <li><a className="font-sans hover:text-accentHover" onClick={closeMenu} href="#services">Projects</a></li>
          <li><a className="font-sans hover:text-accentHover" onClick={closeMenu} href="#work">My Work</a></li>
          <li><a className="font-sans hover:text-accentHover" onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
