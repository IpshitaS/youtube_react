import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap justify-center'>
      {Array(6)
            .fill("")
            .map((e, index) => (
                <div key ={index} className="py-5 px-2 w-[380px] h-80 m-5 shadow-xl border-solid border-gray-100 border-2">
                    <img alt=""
                     className='w-[380px] rounded-xl h-44  bg-gray-200'
                    />
                    <h1 className='mx-2 my-1 h-5 bg-gray-200'>.</h1>
                    <h1 className='mx-2 my-1 h-5 bg-gray-200'>.</h1>
                    <h1 className='mx-2 my-1 h-5 bg-gray-200'>.</h1>
                </div>
            ))}
    </div>
  )
}

export default Shimmer