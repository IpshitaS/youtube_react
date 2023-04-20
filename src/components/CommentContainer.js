import React from 'react'

const CommentData = [
  {
    name : "Ipshita",
    text: "very good, cool",
    replies:[],
  },
  {
    name : "Ipshita",
    text: "very good, cool",
    replies:[
    {
      name : "Ipshita",
      text: "very good, cool, replies",
      replies:[],
    },
    {
      name : "Ipshita",
      text: "very good, cool, replies",
      replies:[
      {
        name : "Ipshita",
        text: "very good, cool, replies",
        replies:[],
      },
      {
        name : "Ipshita",
        text: "very good, cool, replies",
        replies:[
        {
          name : "Ipshita",
          text: "very good, cool, replies",
          replies:[
          {
            name : "Ipshita",
            text: "very good, cool, replies",
            replies:[
            {
              name : "Ipshita",
              text: "very good, cool, replies",
              replies:[],
            },
            ],
          },
          ],
        },
        ],
      },
      {
        name : "Ipshita",
        text: "very good, cool, replies",
        replies:[],
      },
      ],
    },
    {
      name : "Ipshita",
      text: "very good, cool, replies",
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
    name : "Ipshita",
    text: "very good, cool",
    replies:[],
  },
  {
    name : "Ipshita",
    text: "very good, cool",
    replies:[],
  },
  {
    name : "Ipshita",
    text: "very good, cool",
    replies:[],
  },
  {
    name : "Ipshita",
    text: "very good, cool",
    replies:[],
  },
  {
    name : "Ipshita",
    text: "very good, cool",
    replies:[],
  },
  {
    name : "Ipshita",
    text: "very good, cool",
    replies:[],
  },
  {
    name : "Ipshita",
    text: "very good, cool",
    replies:[],
  },
  {
    name : "Ipshita",
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

const CommentContainer = () => {
  return (
    <div className="px-5">
      <h1 className="text-2xl font-semibold">Comments: </h1>
      <CommentsList comments={CommentData} />
    </div>
  );
};

export default CommentContainer


