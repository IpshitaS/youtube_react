import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const CommentData = [
  {
    name : "Big Brother",
    text: "very good, cool",
    replies:[],
  },
  {
    name : "Priya",
    text: "cool",
    replies:[
    {
      name : "Surbhi",
      text: "Superb soul touching song",
      replies:[],
    },
    {
      name : "Srijan",
      text: "Such a mesmerising song..",
      replies:[
      {
        name : "Mr. Shetty",
        text: "Miss u kabir singh",
        replies:[],
      },
      {
        name : "Tanya",
        text: "replies",
        replies:[
        {
          name : "cute-pie",
          text: "very good, cool",
          replies:[
          {
            name : "rocky",
            text: "very good",
            replies:[
            {
              name : "rock",
              text: "Miss u kabir singh",
              replies:[],
            },
            ],
          },
          ],
        },
        ],
      },
      {
        name : "cool_gay_me",
        text: "Superb soul touching song",
        replies:[],
      },
      ],
    },
    {
      name : "BB",
      text: "MY HEART IS BROKEN ON THIS TIME😅💔",
      replies:[],
    },
    {
      name : "Ipshita",
      text: "very good, cool, replies",
      replies:[],
    },
    ],
  },  
  {
    name : "sweety",
    text: "very good, cool",
    replies:[],
  },
  {
    name : "Anu",
    text: "very good, cool",
    replies:[],
  },
  {
    name : "cool_gay_me",
    text: "MY HEART IS BROKEN ON THIS TIME😅💔",
    replies:[],
  },
  {
    name : "rocky",
    text: "very good, cool",
    replies:[],
  },
  {
    name : "Butterfly",
    text: "Miss u kabir singh",
    replies:[],
  },
  {
    name : "Ipshita",
    text: "very good, cool",
    replies:[],
  },
  {
    name : "rocky",
    text: "very good, cool",
    replies:[],
  },
  {
    name : "Butterfly",
    text: "very good, cool",
    replies:[],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className='flex px-5 py-3'>
      <img 
        className='h-14 px-3 pt-4'
        alt="user icon"
        src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
      />
      <div className="">
        <p className="text-xl font-semibold">{name}</p>
        <p className='px-2 py-1'>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} data={comment}>
      <Comment data={comment} />
      <div className='px-10 border border-r-white border-b-white border-l-gray-400 '>
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = ({snippet, statistics}) => { 
  const [liveMessage, setLiveMessage]= useState("");
  
  return (
    <div className="px-5">
      <form 
        className='font-medium mx-2 p-1'
        onSubmit={(e) => {
          e.preventDefault()
          setLiveMessage("")
        }}
        >
        <span className='bg-indigo-300 rounded-full text-3xl px-4 ml-2 pb-[2px]'>I</span>
        <input 
            className='p-1 px-4 w-2/3'
            type='text' 
            placeholder='Add a comment...' 
            value={liveMessage}
            onChange={(e) => {
                setLiveMessage(e.target.value);
            }}
        />
      </form>
      <CommentsList comments={CommentData} />
    </div>
  );
};

export default CommentContainer


