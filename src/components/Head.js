import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/config';
import { cacheResult } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestion, setShowSuggestion] = useState(false)
  const [searchCache, setSearchCache]= useState([]);
  
  const dispatch = useDispatch();
  
  //debouncing- calling after every 200ms
  useEffect(() => {
    //re-render's after 200ms
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSugesestions();
      }
    }, 200);

    //destory component
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]); //render after every search change

  //Clear youtube ssearch API
  const getSearchSugesestions = async() => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(
      cacheResult({
        [searchQuery] : json[1],
      })
    )
  }

  //toggle hamburger
  const toggleMenuHendler = () => {
    dispatch(toggleMenu());
  } 

  return (
    <div className='flex bg-white justify-between'>
      <div className='flex p-1 m-1'>
        <img 
          onClick={() => toggleMenuHendler()}
          className='h-8 w-11 px-3 pt-4 cursor-pointer'
          alt="side bar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFGZmFfQWrVXrdtp54fXbrvWy26g5G7LRol7MYwL2DMPv4LmFzZME_4lQRLT_fIqSTTU&usqp=CAU"
        />
        <a href='/'>
          <img 
            className='h-12 px-2 w-32'
            alt="logo"
            src="https://logos-world.net/wp-content/uploads/2020/05/YouTube-Logo.jpg"
          />
        </a>
      </div>

      <div>
        <div className='flex h-10 mt-2 pt-[2px] pr-20'>
          <input type="text" 
            placeholder='Search...' 
            className='w-[550px] border rounded-s-full px-7 shadow-lg'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button>
            <img 
              className='h-[39px] py-2 px-5 border rounded-e-full hover:bg-gray-200 shadow-lg bg-gray-100'
              alt="search"
              src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
            />
          </button>
        </div>
        {showSuggestion && 
        <div className='absolute bg-white w-[590px] border rounded-lg shadow-lg  font-semibold mx-1 my-[2px]'>
          <ul>
            {suggestions.map((sug, index) => (
              <li key={index} className='py-1 px-6 hover:bg-gray-200'>{sug}</li>
            ))}
          </ul>
        </div>}
      </div>

      <div className='w-20'>
        <img 
          className='h-12 px-3 pt-4'
          alt="user icon"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        />
      </div>
    </div>
  )
}

export default Head