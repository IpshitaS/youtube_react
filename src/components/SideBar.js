import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
  
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //early return
  if(!isMenuOpen) return null;

  return (
    <div className='border bg-white w-56'>
      {/* List 1 */}
      <ul className='border p-3'>
        <Link to="/">
        <li className='flex p-2'>
          <img alt="home"
            src="https://static.thenounproject.com/png/3574480-200.png"
            className='h-8'
          /> Home
        </li>
        </Link>
        <li className='flex p-2'>
          <img 
            alt='shorts' 
            src="https://logowik.com/content/uploads/images/youtube-shorts-black3609.jpg" 
            className='h-7'
          />Shorts
        </li>
        <li className='flex p-2'>
          <img
            alt="subscriptions"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtp3Eq7ROQwUUvqgXGAmEYNqDmtJVipGzsVUYRZIkzvKla5eDwLPnB96blrcglXMnFtQA&usqp=CAU"
            className='h-7'
          /> Subscriptions
        </li>
      </ul>
      {/* list2 */}<ul>
        <h1>Explore</h1>
        <li className='flex p-2'>
          <img alt="home"
            src="https://static.vecteezy.com/system/resources/previews/000/568/045/original/vector-library-building-icon.jpg"
            className='h-8'
          /> Library
        </li>
        <li className='flex p-2'>
          <img
            alt="subscriptions"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVa7N-F2_NLipMyBQqkLdc2csNfob2rs9SPw&usqp=CAU"
            className='h-7'
          /> History
        </li>
        <li className='flex'>
          <img 
            alt='shorts' 
            src="https://www.iconpacks.net/icons/1/free-youtube-icon-105-thumb.png" 
            className='h-8'
          /> Your Video
        </li>
        <li className='flex p-2'>
          <img
            alt="subscriptions"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3pTMaGmnEKCZWlelf4TyzZ12KXD3Mls8cLQ&usqp=CAU"
            className='h-7'
          /> Watch Later
        </li>
        <li className='flex p-2'>
          <img
            alt="subscriptions"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnrttro5BP7R07K_ZqzXzoyrL0au6gmTKxIA&usqp=CAU"
            className='h-7'
          /> Liked Video
        </li>
        <li className='flex p-2'>
          <img
            alt="subscriptions"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgoEto5oM6N7bjFyKtU1-liDiyz7ANvnvvIg&usqp=CAU"
            className='h-7'
          /> Saved
        </li>
      </ul>
      {/* Explore */}
      <ul className='border p-3'>
        <li className='flex p-2'>
          <img alt=""
            src=""
            className='h-8'
          /> Treding
        </li>
        <li className='flex p-2'>
          <img
            alt=""
            src=""
            className='h-7'
          /> shopping
        </li>
        <li className='flex'>
          <img 
            alt='' 
            src="" 
            className='h-8'
          /> Music
        </li>
        <li className='flex p-2'>
          <img
            alt=""
            src=""
            className='h-7'
          /> Movies & Shows
        </li>
        <li className='flex p-2'>
          <img
            alt=""
            src=""
            className='h-7'
          /> Live
        </li>
        <li className='flex p-2'>
          <img
            alt=""
            src=""
            className='h-7'
          /> game
        </li>
      </ul>  
    </div>
    
  )
}

export default SideBar