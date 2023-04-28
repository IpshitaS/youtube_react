import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/config'
//import Shimmer from './Shimmer';
import WatchInfo from './WatchInfo';

const WatchDetails = ({info}) => {
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        getVideos();
      },[]);
    
      const getVideos = async() => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        setVideos(json.items);
      };
console.log(videos)
      return (
         <div className=''>
             {videos.map((video) => (
               <div  key={video.id}>
                 {(video.id === info) ? <WatchInfo {...video}/> : <span></span> }
               </div>  
             ))}
         </div>
      );


}

export default WatchDetails