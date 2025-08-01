import React from 'react';
import t1 from '../images/tt1.svg';
import t2 from '../images/tt2.svg';
import t3 from '../images/tt3.svg';
import t4 from '../images/tt4.svg';
import t5 from '../images/tt5.svg';
import t55 from '../images/t55.svg';
import t7 from '../images/tt7.svg';
import per from '../images/per.svg';

function Titlebar() {
  return (
    <div className="flex justify-between items-center px-5 py-3 border-b border-gray-200 bg-white w-full">
      {/* Left Section */}
      
      <div className="flex items-center gap-2">
        <span className="text-lg cursor-pointer">☰</span>
        <h3 className="text-base font-semibold">Chat</h3>
      </div>

      {/* Center Section */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="w-px h-6 bg-gray-300"></div>

        <div className="flex items-center px-2 py-1 rounded">
          <img src={t7} alt="search" className="w-4 h-4" />
          <input type="text" placeholder="Search here..." className="ml-2 bg-transparent outline-none text-sm" />
        </div>

        <div className="w-px h-6 bg-gray-300"></div>
        <img src={t55} alt="calendar" className="w-5 h-5 cursor-pointer" />
        <div className="w-px h-6 bg-gray-300"></div>

        <img src={t2} alt="contact" className="w-5 h-5 cursor-pointer" />
        <div className="w-px h-6 bg-gray-300"></div>

        <img src={t3} alt="apps" className="w-5 h-5 cursor-pointer" />
        <div className="w-px h-6 bg-gray-300"></div>

        <div className="relative">
          <img src={t4} alt="bell" className="w-5 h-5 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] rounded-full px-1">2</span>
        </div>
        <div className="w-px h-6 bg-gray-300"></div>

        <img src={t5} alt="icon" className="w-5 h-5 cursor-pointer" />
    

        <div className="flex items-center gap-2 cursor-pointer">
          <img src={per} alt="profile" className="w-7 h-7 rounded-full" />
          <span className="text-sm font-medium">Celina Mark ▾</span>
        </div>
      </div>
    </div>
  );
}

export default Titlebar;
