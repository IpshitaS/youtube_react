import React from 'react'
import Button from './Button'

const list = ["All", "Live", "Gaming", "Music", "Cricket", "Comedy", "Cooking", "News", "Bollywood_Music", "Soccer", "Mixes", "Kapil_Sharma", "React", "Algorithms"]
//const buttons = list.map((list) => list);
const ButtonList = () => {
  return (
    <div className='flex text-sm'>
      {list.map((list, index) => {
          return (
            
              <Button key={index} name={list} />
            
          );
        })}
    </div>
  )
}

export default ButtonList;