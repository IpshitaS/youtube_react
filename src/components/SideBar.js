import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {MdHomeFilled, MdOutlineSubscriptions, MdOutlineLibraryAddCheck, MdHistory, MdOutlineWatchLater, MdSaveAlt, MdOutlineLocalFireDepartment, MdOutlineShoppingBag, MdOutlineMusicNote, MdOutlineSettings, MdOutlinedFlag, MdOutlineHelpOutline} from 'react-icons/md';
import {BsCameraReels} from 'react-icons/bs';
import { RxVideo} from 'react-icons/rx';
import { AiOutlineLike} from 'react-icons/ai';
import { RiMovie2Fill, RiLiveLine, RiFeedbackLine} from 'react-icons/ri';
import { GrGamepad} from 'react-icons/gr';

const SideBar = () => {
  
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //early return
  if(!isMenuOpen) return null;

  return (
    <div className='border bg-white'>
      {/* List 1 */}
      <ul className='border py-3'>
        <Link to="/">
          <li className='flex p-2 items-center px-6'><MdHomeFilled /><span className='pl-3'> Home</span></li>
        </Link>
        <li className='flex p-2 items-center px-6'><BsCameraReels /><span className='pl-3'>Shorts</span></li>
        <li className='flex p-2 items-center px-6'><MdOutlineSubscriptions /><span className='pl-3'> Subscriptions</span></li>
      </ul>

      {/* list2 */}
      <ul>
        <h1 className=' px-6 text-lg font-medium p-2'>Explore</h1>
        <li className='flex p-2 items-center px-6'><MdOutlineLibraryAddCheck /><span className='pl-3'>Library</span> </li>
        <li className='flex p-2 items-center px-6'><MdHistory /><span className='pl-3'> History</span></li>
        <li className='flex p-2 items-center px-6'><RxVideo /><span className='pl-3'> Your Video</span></li>
        <li className='flex p-2 items-center px-6'><MdOutlineWatchLater/><span className='pl-3'> Watch_Later</span></li>
        <li className='flex p-2 items-center px-6'><AiOutlineLike/><span className='pl-3'> Liked_Video</span></li>
        <li className='flex p-2 items-center px-6'><MdSaveAlt /><span className='pl-3'> Saved</span></li>
      </ul>
      {/* Explore */}
      <ul className='border pt-1'>
        <li className='flex p-2 items-center px-6'><MdOutlineLocalFireDepartment /><span className='pl-3'> Trending</span></li>
        <li className='flex p-2 items-center px-6'><MdOutlineShoppingBag /><span className='pl-3'> shopping</span></li>
        <li className='flex p-2 items-center px-6'><MdOutlineMusicNote /><span className='pl-3'> Music</span></li>
        <li className='flex p-2 items-center px-6'><RiMovie2Fill /><span className='pl-3'> Movies&Shows</span></li>
        <li className='flex p-2 items-center px-6'><RiLiveLine/><span className='pl-3'> Live</span></li>
        <li className='flex p-2 items-center px-6'><GrGamepad/><span className='pl-3'> game</span></li>
      </ul>  
      {/* Explore */}
      <ul className='border pt-1'>
        <li className='flex p-2 items-center px-6'><MdOutlineSettings /><span className='pl-3'> Setting</span></li>
        <li className='flex p-2 items-center px-6'><MdOutlinedFlag /><span className='pl-3'> Report_history</span></li>
        <li className='flex p-2 items-center px-6'><MdOutlineHelpOutline /><span className='pl-3'> Help</span></li>
        <li className='flex p-2 items-center px-6'><RiFeedbackLine/><span className='pl-3'> Send_feedback</span></li>
      </ul>
    </div>
    
  )
}

export default SideBar