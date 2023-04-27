import React from 'react'
import Button from './Button'

const list = ["All", "Live", "Gaming", "Music", "Cricket", "Comedy", "Cooking", "News", "Bollywood_Music", "Soccer", "Mixes", "Kapil_Sharma", "React", "Algorithms" , "Ponds", "Indian_cuisine", "Computer_Science"]

const ButtonList = () => {
  return (
    <div className='flex flex-nowrap text-sm overflow-x-auto max-w-screen-xl mx-5 snap-x snap-mandatory no-scrollbar'>
      {list.map((list, index) => {
          return (
            <Button key={index} name={list} />
          );
        })}
    </div>
  )
}

export default ButtonList;