import React from 'react';
import chat from '../images/chat.svg'; // Replace with your image
import './Chat.css'

export default function Chat() {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg  shadow-sm ml-4 mb-4 mt-4 mr-4 w-[">
      {/* Placeholder Image */}
      <img
        src={chat}
        alt="Chat Placeholder"
        className="w-124 h-136 mb-4 opacity-60"
      />

      {/* Message */}
    
    </div>
  );
}
