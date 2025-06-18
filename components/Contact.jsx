import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending....")
    const formData = new FormData(event.target)

    formData.append("access_key", "0df81999-b873-4bf6-b2f5-ff2c26637325")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult("Form Submitted Successfully")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full px-[12%] py-10 scroll-mt-20 bg-zinc-900 text-white'
      id='contact'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-sans text-accent'
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-sans text-heading'
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-sans text-textPrimary'
      >
        I love to hear from you. Whether you have a question or just want to chat about design, tech & art — shoot me a message.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit}
        className='max-w-2xl mx-auto'
      >
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type='text'
            placeholder='Enter your name'
            required
            className='flex-1 p-3 outline-none border border-border rounded-md bg-surface text-white placeholder-textPrimary'
            name='name'
          />

          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type='email'
            placeholder='Enter your email'
            required
            className='flex-1 p-3 outline-none border border-border rounded-md bg-surface text-white placeholder-textPrimary'
            name='email'
          />
        </div>

        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows='6'
          placeholder='Enter your message'
          required
          className='w-full p-4 outline-none border border-border rounded-md bg-surface text-white placeholder-textPrimary mb-6'
          name='message'
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-accent text-white rounded-full mx-auto hover:bg-accentHover duration-300'
          type='submit'
        >
          Submit now
          <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </motion.button>

        <motion.p className='mt-4 text-center text-green-400'>{result}</motion.p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
