import React from 'react'

const VideoCart = ({info}) => {
    const {snippet, statistics}= info;
    const {channelTitle, title, thumbnails} = snippet;

  return (
    <div className='py-5 px-2 w-[380px]'> 
      <img
        alt="thumbnail"
        src={thumbnails.medium.url}
        className='w-[380px] rounded-xl hover:rounded-none'
      />
      <div className='flex'>
        <img 
          className='h-12 rounded-full p-1'
          alt="channele_logo" 
          src="https://yt3.ggpht.com/Oazw11tnwSahAg-Cvyttvs-Uee--0zrvCtKNWlmFAbPonkANkagjU7BlV9fA_mnlJvjLcD6cKw=s88-c-k-c0x00ffffff-no-rj" 
        />
        <h1 className='font-bold mx-2 my-1'>{title}</h1>
      </div>
      <h1 className='mx-2 my-1 pl-12'>{channelTitle}</h1>
      <h1 className='mx-2 my-1 pl-12'>{statistics.viewCount/1000}k views</h1>
    </div>
  )
}

export default VideoCart