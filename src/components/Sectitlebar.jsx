import React from 'react';
// import t1 from '../images/f1.png';
// import t2 from '../images/f2.png';
// import t3 from '../images/f3.png';
// import t4 from '../images/f4.png';
import per from '../images/per.svg';
import msg from '../images/msg.svg';

function Sectitlebar() {
  return (
    <div className="flex flex-col md:flex-row  items-center p-4 border-b border-gray-200 bg-white w-full h-[60px]">
      
      {/* Left Profile Section */}
      <div className="flex gap-4 w-full md:w-auto">
        <img src={per} alt="Profile" className="w-9 h-9 rounded-full" />
        
        <div className="flex flex-col leading-tight text-sm">
          <span className="font-medium">Celina Mark</span>
          <span className="text-green-500 text-xs">🟢 Available</span>
        </div>

        <div className="flex items-center gap-3 text-gray-600 ml-4">
          {/* <img src={t4} alt="icon" className="w-4 h-4 cursor-pointer" /> */}
          <span className="text-xl cursor-pointer ml-8"><img src={msg}></img> </span>⋮
        </div>
      </div>

      {/* Tabs Section */}
      <div className="ml-8 flex flex-wrap justify-center md:justify-start gap-2 mt-4 md:mt-0 gap-4">
        <button className="flex items-center gap-2 bg-[#295e6a] text-white text-sm px-4 py-1.5 rounded-full">
          {/* <img src={t2} alt="chat" className="w-4 h-4" /> */}
          Chat
        </button>

        <button className="flex items-center gap-2 text-sm px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
          {/* <img src={t6} alt="activity" className="w-4 h-4" /> */}
          Activity
        </button>

        <button className="flex items-center gap-2 text-sm px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
          {/* <img src={t2} alt="contacts" className="w-4 h-4" /> */}
          Contacts
        </button>

        <button className="flex items-center gap-2 text-sm px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
          {/* <img src={t3} alt="recent" className="w-4 h-4" /> */}
          Recent Activities
        </button>
      </div>
    </div>
  );
}

export default Sectitlebar;
