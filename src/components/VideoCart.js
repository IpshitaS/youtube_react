import React from 'react'

const VideoCart = ({info}) => {
    const {snippet, statistics}= info;
    const {channelTitle, title, thumbnails} = snippet;

  return (
    <div className='py-5 px-1 w-[360px]'> 
       <img
        alt="thumbnail"
        src={thumbnails.medium.url}
        className='w-[360px] rounded-xl hover:rounded-none'
       />
       <h1 className='font-bold mx-2 my-1'>{title}</h1>
       <h1 className='mx-2 my-1'>{channelTitle}</h1>
       <h1 className='mx-2 my-1'>{statistics.viewCount/1000}k views</h1>
    </div>
  )
}

export default VideoCart