import React, { useState, useEffect } from 'react';
import t1 from '../images/tt1.svg';
import t2 from '../images/tt2.svg';
import t3 from '../images/tt3.svg';
import t4 from '../images/tt4.svg';
import t5 from '../images/tt5.svg';
import t55 from '../images/t55.svg';
import t7 from '../images/tt7.svg';
import per from '../images/per.svg';

function Titlebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on window resize above 1111px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1111) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="custom-text flex justify-between items-center px-4 py-3 border-b border-gray-200 bg-white w-full">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <span className="text-lg cursor-pointer">☰</span>
        <h3 className="text-base font-semibold">Chat</h3>
      </div>

      {/* Center Section */}
      <div className="hidden xl:flex items-center gap-4 flex-wrap">
        <div className="w-px h-6 bg-gray-300"></div>

        <div className="flex items-center px-2 py-1 rounded bg-gray-100">
          <img src={t7} alt="search" className="w-4 h-4" />
          <input
            type="text"
            placeholder="Search here..."
            className="ml-2 bg-transparent outline-none text-sm"
          />
        </div>

        <div className="w-px h-6 bg-gray-300"></div>
        <img src={t55} alt="calendar" className="w-5 h-5 cursor-pointer" />

        <div className="w-px h-6 bg-gray-300"></div>
        <img src={t2} alt="contact" className="w-5 h-5 cursor-pointer" />

        <div className="w-px h-6 bg-gray-300"></div>
        <img src={t3} alt="apps" className="w-5 h-5 cursor-pointer" />

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

      {/* 3-dot Menu (for smaller screens) */}
      <div className="xl:hidden relative">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">⋮</button>

        {menuOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-md z-50 p-3 space-y-2">
            <div className="flex items-center px-2 py-1 rounded bg-gray-100">
              <img src={t7} alt="search" className="w-4 h-4" />
              <input
                type="text"
                placeholder="Search here..."
                className="ml-2 bg-transparent outline-none text-sm w-full"
              />
            </div>
            <div className="flex gap-2 items-center">
              <img src={t55} alt="calendar" className="w-5 h-5" />
              <span>Calendar</span>
            </div>
            <div className="flex gap-2 items-center">
              <img src={t2} alt="contact" className="w-5 h-5" />
              <span>Contact</span>
            </div>
            <div className="flex gap-2 items-center">
              <img src={t3} alt="apps" className="w-5 h-5" />
              <span>Apps</span>
            </div>
            <div className="flex gap-2 items-center">
              <img src={t4} alt="bell" className="w-5 h-5" />
              <span>Notifications</span>
            </div>
            <div className="flex gap-2 items-center">
              <img src={t5} alt="icon" className="w-5 h-5" />
              <span>Settings</span>
            </div>
            <div className="flex gap-2 items-center">
              <img src={per} alt="profile" className="w-7 h-7 rounded-full" />
              <span className="text-sm font-medium">Celina Mark</span>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default Titlebar;
