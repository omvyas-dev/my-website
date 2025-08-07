import React from "react";
import chat from "../images/chat.svg"; // Make sure this path is correct

export default function Chat() {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-sm m-4 py-8">
      {/* Placeholder Image */}
      <img
        src={chat}
        alt="Chat Placeholder"
        className="w-32 h-32 mb-4 opacity-60"
      />

      {/* Message */}
      <h2 className="text-lg font-semibold text-gray-700 mb-1">
        No Conversation Selected
      </h2>
      <p className="text-sm text-gray-500 text-center px-4">
        Please select a chat from the list to view the conversation here.
      </p>
    </div>
  );
}
