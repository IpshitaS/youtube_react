import React, { useState } from 'react';
import { AiOutlineLike, AiOutlineDislike ,AiFillLike, AiFillDislike} from 'react-icons/ai';
import { RiShareForwardLine, RiShareForwardFill, RiMoreLine} from 'react-icons/ri';
import {BiCut} from 'react-icons/bi';
import {VscVerifiedFilled} from 'react-icons/vsc';
import {BsBell} from 'react-icons/bs';

const WatchInfo = ({snippet, statistics}) => {
  const [isClickLike, setIsClickLike] = useState(false);
  const [isClickDislike, setIsClickDislike] = useState(false);
  const [isClickShare, setIsClickShare] = useState(false);
  const [isSubscribe, setIsSubscribe] = useState(false);

  return (
    <div className='w-[900px]'>
      {/* info1 */}
      <div className='px-2'>
        <h1 className='text-xl font-semibold'>{snippet.title}</h1>
        <div className='flex justify-between'>
          <div className='flex'>               
            <img 
              className='h-12 rounded-full p-1'
              alt="channele_logo" 
              src="https://yt3.ggpht.com/Oazw11tnwSahAg-Cvyttvs-Uee--0zrvCtKNWlmFAbPonkANkagjU7BlV9fA_mnlJvjLcD6cKw=s88-c-k-c0x00ffffff-no-rj" 
            />
            <div>
              <h1 className='flex pr-1 font-semibold'>{snippet.channelTitle}<VscVerifiedFilled /></h1>
              <h1 className='text-xs text-slate-500'>{Math.round((statistics?.viewCount/1000000)*100)}M subscribes</h1>
            </div>               
            <div>
              {(isSubscribe) ? 
                <button 
                  className="border rounded-full py-1 px-3 m-[6px] mx-4 bg-zinc-100 hover:bg-zinc-200 flex justify-between" 
                  onClick={() => setIsSubscribe(false)}>
                  <BsBell className='pt-[2px]' /> Subscribed
                </button> :
                <button 
                  className="border rounded-full py-1 px-2 m-[6px] mx-4 bg-gray-950 text-white hover:bg-gray-800" 
                  onClick={() => setIsSubscribe(true)}>
                  Subscribe
                </button>}
            </div>
          </div>

          <div className='flex'>
            <h1 className='flex rounded-full py-[2px] px-3 m-[6px] bg-zinc-100 hover:bg-zinc-200'>
              {/* like */}
              {(isClickLike) ? 
                <button 
                  className="px-2" 
                  onClick={() => setIsClickLike(false)}>
                  <AiFillLike />
                </button> :
                <button 
                  className="px-2" 
                  onClick={() => setIsClickLike(true)}>
                  <AiOutlineLike />
                </button>}
              {Math.round(statistics?.likeCount/1000)}K | 
              {/* dislike */}
              {(isClickDislike) ? 
                <button 
                  className="px-2" 
                  onClick={() => setIsClickDislike(false)}>
                  <AiFillDislike />
                </button> :
                <button 
                  className="px-2" 
                  onClick={() => setIsClickDislike(true)}>
                  <AiOutlineDislike />
                </button>}
            </h1>
            {/* share */}
            <h1 className='rounded-full py-[2px] px-3 m-[6px] bg-zinc-100 hover:bg-zinc-200 flex'>
              {(isClickShare) ? 
                <button 
                  className="px-2" 
                  onClick={() => setIsClickShare(false)}>
                  <RiShareForwardFill />
                </button> :
                <button 
                  className="px-2" 
                  onClick={() => setIsClickShare(true)}>
                  <RiShareForwardLine />
                </button>
              }
              Share
            </h1>
            <button className="rounded-full py-[2px] px-5 m-[6px] bg-zinc-100 hover:bg-zinc-200">
              <BiCut />
            </button>
            <button className="rounded-full py-[2px] px-5 m-[6px] bg-zinc-100 hover:bg-zinc-200">
              <RiMoreLine />
            </button>
          </div>
        </div>
      </div>

      {/* info2 */}
      <div className='bg-zinc-100 p-3 m-2 border rounded-xl w-[900px]'>
        <h1 className='mx-2 px-3'>{(statistics?.viewCount/1000000).toFixed(1)}M views {}day ago #on Trending</h1>
        <h1 className='w-[900px] m-2 p-1 pr-14 text-justify text-'>{snippet.description}</h1>
      </div>
    </div>
  )
}

export default WatchInfo