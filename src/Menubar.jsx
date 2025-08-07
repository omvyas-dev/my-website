import React, { useState } from 'react';
import search from './images/search.svg';

export default function Menubar() {
  const [activeTab, setActiveTab] = useState("All");

  const chats = [
    { id: 1, name: "Canrra Raiders", msg: "Jason : Hello 👋", time: "2m ago", color: "bg-green-500", img: "https://i.pravatar.cc/40?img=1", type: "Group" },
    { id: 2, name: "Braiorm Hub", msg: "Jessy: Great", time: "2m ago", color: "bg-gray-400", img: "https://i.pravatar.cc/40?img=2", type: "Group" },
    { id: 3, name: "Collab Central", msg: "Petor: Good morning", time: "2m ago", color: "bg-red-500", img: "https://i.pravatar.cc/40?img=3", type: "Group" },
    { id: 4, name: "Team Synergy", msg: "Smith: No", time: "2m ago", color: "bg-yellow-400", img: "https://i.pravatar.cc/40?img=4", type: "Group" },
    { id: 5, name: "Devid Williams", msg: "Jason Mann: Cool", time: "2m ago", color: "bg-orange-500", img: "https://i.pravatar.cc/40?img=5", type: "Task" },
    { id: 6, name: "Emma Johnson", msg: "Jason Mann: Hi", time: "2m ago", color: "bg-purple-500", img: "https://i.pravatar.cc/40?img=6", type: "Task" },
    { id: 7, name: "Emily Davies", msg: "Jason Mann: Thanks", time: "2m ago", color: "bg-teal-500", img: "https://i.pravatar.cc/40?img=7", type: "Task" },
    { id: 8, name: "Oliver Scott", msg: "Jason Mann: Yupp", time: "2m ago", color: "bg-blue-500", img: "https://i.pravatar.cc/40?img=8", type: "Task" },
  ];

  const filteredChats =
    activeTab === "All"
      ? chats
      : chats.filter((chat) => chat.type === activeTab);

  return (
    <div className="w-full h-full flex flex-col bg-white">
      {/* Tabs */}
      <div className="flex items-center justify-between px-4 py-2 border-b bg-gray-100">
        <div className="flex gap-4">
          {["All", "Group", "Task"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm pb-2 ${
                activeTab === tab
                  ? "font-semibold border-b-2 border-black"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <img src={search} className="w-5 h-5" alt="Search Icon" />
        </div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden px-4 py-2 border-b bg-white space-y-2">
        {filteredChats.map((chat) => (
          <ChatItem key={chat.id} {...chat} />
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex flex-1 flex-col">
        <div className="overflow-y-auto px-4 py-2 space-y-4">
          {activeTab === "All" && (
            <>
              <p className="text-xs text-gray-500">CHAT 4</p>
              {chats.slice(0, 4).map((chat) => (
                <ChatItem key={chat.id} {...chat} />
              ))}
              <p className="text-xs text-gray-500 mt-4">GROUP CHAT 4</p>
              {chats.slice(4).map((chat) => (
                <ChatItem key={chat.id} {...chat} />
              ))}
            </>
          )}
          {activeTab !== "All" &&
            filteredChats.map((chat) => <ChatItem key={chat.id} {...chat} />)}
        </div>

        {/* Load More */}
        <div className="p-4">
          <button className="w-full bg-black text-white py-2 text-sm rounded">
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  );
}

const ChatItem = ({ name, msg, time, color, img }) => (
  <div className="flex items-center gap-3 relative">
    <div className={`w-1.5 h-10 ${color} rounded-full absolute left-0`} />
    <img src={img} alt="user" className="w-10 h-10 rounded-full ml-3" />
    <div className="flex flex-col flex-1">
      <p className="text-sm font-medium">{name}</p>
      <p className="text-xs text-gray-500">{msg}</p>
    </div>
    <span className="text-xs text-gray-400">{time}</span>
  </div>
);
