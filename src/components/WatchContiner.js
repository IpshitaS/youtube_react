import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import WatchDetails from './WatchDetails';
import LiveChat from './LiveChat';

const WatchContiner = () => {
  const [searchParams] = useSearchParams()
  //console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  })

  return (
    <div className='flex flex-col'>
      <div className='flex'>
        {/* watch VIDEO */}
        <div className='pl-20 py-2'>
          <iframe 
            className='px-4'
            width="900" 
            height="500" 
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </div>
        {/* live Chat */}
        <div>
          <LiveChat />
        </div>
      </div>
      {/* video INFO */}
      <div className='px-20 mx-2'>
        <WatchDetails info={searchParams.get("v")} />
      </div>
      {/* N-lebel COMMENT */}
      <div className='px-20 py-2 m-2'>
        <CommentContainer />
      </div>
    </div>
  )
};

export default WatchContiner;