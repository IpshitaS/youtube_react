import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';

const WatchContiner = () => {
  const [searchParams] = useSearchParams()
  //console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  })

  return (
    <div className='flex flex-col'>
    <div className='px-20 py-2 m-2'>
      <iframe 
        className='px-4'
        width="900" 
        height="500" 
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
      </iframe>
    </div>
    <div className='px-20 py-2 m-2'>
      <CommentContainer />
    </div>
    </div>
  )
};

export default WatchContiner;