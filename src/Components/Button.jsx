import React from 'react'

const Button = ({name,handleProjects}) => {
  return (
    <div className='w-[10rem] py-2 m-auto mt-4 text-center text-sm font-semibold hover:text-[#ffffffc3] uppercase border-[6px] border-white rounded hover:border-[#ffffffc3] transition 1s cursor-pointer ease' onClick={handleProjects}>{name}</div>
  )
}

export default Button