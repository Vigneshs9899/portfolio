import React from 'react'

const Loader = () => {
  return (
    <div
      className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-accent via-purple-400 to-accentHover md:w-28 md:h-28 h-28 w-28 aspect-square rounded-full"
    >
      <div
        className="rounded-full h-full w-full bg-black background-blur-md"
      ></div>
    </div>
  )
}

export default Loader