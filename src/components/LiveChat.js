import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomNmae } from '../utils/helper';
import { IoSendOutline } from 'react-icons/io5';

const LiveChat = () => {
    const dispatch = useDispatch();
    const [liveMessage, setLiveMessage]= useState("");
    const chatMessage = useSelector((store) => store.chat.message);

    useEffect( () => {
        const i = setInterval(() => {
        //api polling
        dispatch(
            addMessage({
                name: generateRandomName(),
                message: makeRandomNmae(8),
            })
        );
        }, 1500);
        
        return () => clearInterval(i);
    }, []);

  return (
    <>
    <div>
        <h1 className='border rounded-t-lg p-2 px-4 font-medium mx-2'>Live chat</h1>
    </div>
    <div className='w-[460px] h-[450px] border mx-2 shadow-lg overflow-y-scroll flex flex-col-reverse'>        
        {
        // Disclaimer: Don't use indexes as keys
            chatMessage.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
        }   
    </div>
    <form 
        className='border rounded-b-lg font-medium mx-2 p-1'
        onSubmit={(e) => {
            e.preventDefault()
            //console.log("on click",liveMessage);
            dispatch(
                addMessage({
                    name: "IPSHITA",
                    message: liveMessage,
                })
            );
            setLiveMessage("")
        }}
        >
            <span className='bg-indigo-300 rounded-full h-6 px-2 ml-2 pb-[2px]'>I</span>
            <span className=' px-2'>Ipshita</span>
        <input 
            className='p-1 px-4 w-2/3'
            type='text' 
            placeholder='Say something...' 
            value={liveMessage}
            onChange={(e) => {
                setLiveMessage(e.target.value);
            }}
        />
        <button className='mt-1 p-1 px-4 hover:bg-slate-100' >
            <IoSendOutline />
        </button>
    </form>
    </>
  )
}

export default LiveChat