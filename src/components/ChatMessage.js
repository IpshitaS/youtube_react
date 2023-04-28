import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex p-3 items-center bg-zinc-50'>
        <span className='bg-yellow-300 rounded-full h-6 px-[8px] pb-[2px]'>{name.slice(0,1)}</span>
        <span className='font-semibold px-2'> {name}</span>
        <span className=''> {message}</span>
    </div>
  )
}

export default ChatMessage