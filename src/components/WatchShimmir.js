import React from 'react'

const WatchShimmir = () => {
  return (
    <div>
        <div className='flex'>
            <div className='pl-20 py-2'>
                <img alt=""
                className='w-[900px] h-[500px] bg-gray-200'
                />
            </div>
            <div className='w-[460px] h-[500px] border mx-2 bg-gray-200'>        
                <div className='flex p-3 bg-zinc-100'>
                    <span className='font-semibold px-2 bg-gray-200'>...</span>
                </div>
            </div>
        </div>
        <div className='flex p-3 bg-zinc-100'>
            <span className='w-[900px] h-8 bg-gray-200'>.</span>
        </div>
    </div>
  )
}

export default WatchShimmir