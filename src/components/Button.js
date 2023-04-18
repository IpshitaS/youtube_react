import React from 'react'

const Button = ({name}) => {
  return (
    <div className=''>
        <button 
            className='border rounded-lg bg-zinc-100 py-[2px] px-2 my-2 mx-3
            overflow-hidden hover:bg-zinc-200 duration-300 ease-in-out'>
            {name}
        </button>
    </div>
  )
}

export default Button