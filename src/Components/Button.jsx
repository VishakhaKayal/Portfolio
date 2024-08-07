import React from 'react'

const Button = ({name,handleButton}) => {
  return (
    <div className='w-[10rem] py-3 m-auto mt-4 text-center text-sm font-semibold hover:text-[#000000] hover:bg-[rgba(255,255,255,0.75);] uppercase border-[6px] border-white rounded hover:border-[#000000] transition 1s cursor-pointer ease' onClick={handleButton}>{name}</div>
  )
}

export default Button