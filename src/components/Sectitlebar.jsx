import React, { useState, useEffect } from 'react';
import per from '../images/per.svg';
import msg from '../images/msg.svg';

function Sectitlebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1111);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1111);
      if (window.innerWidth >= 1111) {
        setMenuOpen(false); // Close if screen resized to large
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center p-4 border-b border-gray-200 bg-white w-full relative">
      
      {/* Left Profile Section */}
      <div className="flex gap-4 w-full md:w-auto items-center">
        <img src={per} alt="Profile" className="w-9 h-9 rounded-full" />
        
        <div className="flex flex-col leading-tight text-sm">
          <span className="font-medium">Celina Mark</span>
          <span className="text-green-500 text-xs">🟢 Available</span>
        </div>

        <div className="flex items-center gap-3 text-gray-600 ml-4">
          <img src={msg} alt="msg" className="w-5 h-5 cursor-pointer" />
          {isMobile && (
            <span
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ⋮
            </span>
          )}
        </div>
      </div>

      {/* Tabs Section (visible above 1111px) */}
      {!isMobile && (
        <div className="ml-8 flex flex-wrap justify-center md:justify-start gap-4 mt-4 md:mt-0">
          <button className="flex items-center gap-2 bg-[#295e6a] text-white text-sm px-4 py-1.5 rounded-full">
            Chat
          </button>
          <button className="flex items-center gap-2 text-sm px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
            Activity
          </button>
          <button className="flex items-center gap-2 text-sm px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
            Contacts
          </button>
          <button className="flex items-center gap-2 text-sm px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
            Recent Activities
          </button>
        </div>
      )}

      {/* Dropdown Menu for Mobile */}
      {isMobile && menuOpen && (
        <div className="absolute top-full right-4 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-md z-50 p-4 flex flex-col gap-2">
          <button className="w-full text-left bg-[#295e6a] text-white text-sm px-4 py-1.5 rounded-full">
            Chat
          </button>
          <button className="w-full text-left text-sm px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
            Activity
          </button>
          <button className="w-full text-left text-sm px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
            Contacts
          </button>
          <button className="w-full text-left text-sm px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
            Recent Activities
          </button>
        </div>
      )}
    </div>
  );
}

export default Sectitlebar;
