import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomNmae } from '../utils/helper';


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
    <div className='w-[460px] h-[500px] border mx-2  overflow-y-scroll flex flex-col-reverse'>        
        {
        // Disclaimer: Don't use indexes as keys
            chatMessage.map((c, i) => (
              <ChatMessage key={i} initial={c.name.slice(0,1)} name={c.name} message={c.message} />
            ))
        }   
    </div>
    <form 
        className='border rounded-b-lg font-medium mx-2 p-1'
        onSubmit={(e) => {
            e.preventDefault()
            console.log("on click",liveMessage);
            dispatch(
                addMessage({
                    name: "IPSHITA",
                    message: liveMessage,
                })
            );
            setLiveMessage("")
        }}
        >
        <input 
            className='p-1 px-4 w-2/3'
            type='text'  
            value={liveMessage}
            onChange={(e) => {
                setLiveMessage(e.target.value);
            }}
        />
        <button className='border p-1 px-4' >
            Send
        </button>
    </form>
    </>
  )
}

export default LiveChat