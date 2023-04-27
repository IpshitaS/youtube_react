import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/config';
import VideoCart from './VideoCart';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async() => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    //console.log(json)
    setVideos(json.items);
  };

  return (videos?.length === 0) ? (<Shimmer/>) :  (
    <div className='flex flex-wrap justify-center'>
      {
        videos.map((video) => (
          <Link key={video.id} to={"watch?v=" + video.id}>
            <VideoCart info={video} />
          </Link>
      ))}
    </div>
  );
};

export default VideoContainer;