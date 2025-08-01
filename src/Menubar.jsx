import React from 'react'
import search from './images/search.svg'

export default function Menubar() {
    const chats = [
  { id: 1, name: "Canberra Raiders", msg: "Jason : Hello 👋", time: "2m ago", color: "bg-green-500 w-[3px]", img: "https://i.pravatar.cc/40?img=1" },
  { id: 2, name: "The Brainstorm Hub", msg: "Jessy: Great", time: "2m ago", color: "bg-gray-400 w-[3px]", img: "https://i.pravatar.cc/40?img=2" },
  { id: 3, name: "Collab Central", msg: "Petor: Good morning", time: "2m ago", color: "bg-red-500 w-[3px]", img: "https://i.pravatar.cc/40?img=3" },
  { id: 4, name: "Team Synergy", msg: "Smith: No", time: "2m ago", color: "bg-yellow-400 w-[3px]", img: "https://i.pravatar.cc/40?img=4" },
  { id: 5, name: "Devid Williams", msg: "Jason Mann: Cool", time: "2m ago", color: "bg-orange-500 w-[3px]", img: "https://i.pravatar.cc/40?img=5" },
  { id: 6, name: "Emma Johnson", msg: "Jason Mann: Hi", time: "2m ago", color: "bg-purple-500 w-[3px]", img: "https://i.pravatar.cc/40?img=6" },
  { id: 7, name: "Emily Davies", msg: "Jason Mann: Thanks", time: "2m ago", color: "bg-teal-500 w-[3px]", img: "https://i.pravatar.cc/40?img=7" },
  { id: 8, name: "Oliver Scott", msg: "Jason Mann: Yupp", time: "2m ago", color: "bg-blue-500 w-[3px]", img: "https://i.pravatar.cc/40?img=8" },
];

  return (
    <div>


    <div className="w-full h-full flex flex-col bg-white ">
      {/* Tabs */}
      <div className="flex items-center gap-4 px-4 py-2 border-b bg-gray-100">
        {["All", "Group", "Task"].map((tab, index) => (
          <button
            key={index}
            className={`text-sm pb-2 ${tab === "All" ? "font-semibold border-b-2 border-black" : "text-gray-500"}`}
          >
            {tab}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-2">
          
            
        
          <span className=" "><img src={search} className='w-[100%] h-[100%]'></img></span>
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
        <p className="text-xs text-gray-500">GROUP CHAT 4</p>
        {chats.slice(0, 4).map((chat) => (
          <ChatItem key={chat.id} {...chat} />
        ))}
        <p className="text-xs text-gray-500 mt-4">GROUP CHAT 4</p>
        {chats.slice(4).map((chat) => (
          <ChatItem key={chat.id} {...chat} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="p-4">
        <button className="w-full bg-black text-white py-2 text-sm rounded">
          LOAD MORE
        </button>
      </div>
    </div>


    </div>
  )
}

const ChatItem = ({ name, msg, time, color, img }) => (
<div className="flex items-center gap-3 relative">
  <div className={`w-1.5 h-10 ${color} rounded-full absolute left-0`}></div>
  <img src={img} alt="user" className="w-10 h-10 rounded-full ml-3" />
  <div className="flex flex-col flex-1">
    <p className="text-sm font-medium">{name}</p>
    <p className="text-xs text-gray-500">{msg}</p>
  </div>
  <span className="text-xs text-gray-400">{time}</span>
</div>
);
