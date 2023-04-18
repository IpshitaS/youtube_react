import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHendler = () => {
    dispatch(toggleMenu());
  } 

  return (
    <div className='grid grid-flow-col bg-white'>
      <div className='col-span-1 flex p-1 m-1'>
        <img 
          onClick={() => toggleMenuHendler()}
          className='h-9 px-3 pt-4 cursor-pointer'
          alt="side bar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFGZmFfQWrVXrdtp54fXbrvWy26g5G7LRol7MYwL2DMPv4LmFzZME_4lQRLT_fIqSTTU&usqp=CAU"
        />
        <a href='/'>
          <img 
            className='h-12 px-2 w-32'
            alt="logo"
            src="https://logos-world.net/wp-content/uploads/2020/05/YouTube-Logo.jpg"
          />
        </a>
      </div>
      <div className='col-span-10 flex  justify-center h-10 mt-2 pt-1'>
        <input type="text" placeholder='search...' 
          className='w-1/2 border rounded-s-full text-center shadow-lg'
        />
        <button>
          <img 
            className='h-9 py-1 px-3 border rounded-e-full hover:bg-slate-200 shadow-lg'
            alt="search"
            src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
          />
        </button>
      </div>
      <div className='col-span-1 w-20'>
        <img 
          className='h-12 px-3 pt-4'
          alt="user icon"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        />
      </div>
    </div>
  )
}

export default Head