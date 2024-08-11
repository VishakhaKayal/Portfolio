import React from 'react'

const Button = ({name,handleButton}) => {
  return (
    <div className='w-[10rem] py-4 px-2 md:py-3 m-auto mt-4 text-center text-2xl font-bold  md:text-sm md:font-semibold hover:text-[#000000] hover:bg-[rgba(255,255,255,0.75);] uppercase border-[6px] border-white rounded hover:border-[#000000] transition 1s cursor-pointer ease' onClick={handleButton}>{name}</div>
  )
}

export default Button