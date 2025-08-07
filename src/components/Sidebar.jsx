import React, { useState } from 'react';
import logo from '../images/logo.svg';
import s1 from '../images/s1.svg';
import s3 from '../images/f3.svg';
import s4 from '../images/f4.svg';
import s5 from '../images/f5.svg';
import s6 from '../images/f6.svg';
import s7 from '../images/f7.svg';
import s8 from '../images/f8.svg';
import s9 from '../images/f9.svg';
import s10 from '../images/f10.svg';
import s11 from '../images/f11.svg';
import s12 from '../images/f12.svg';
import s13 from '../images/f13.svg';
import s14 from '../images/f14.svg';

export default function Sidebar({ setPage }) {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { icon: s1, label: 'Dashboard', value: 'dashboard' },
    { icon: s3, label: 'Tracker', value: 'tracker' },
    { icon: s4, label: 'Resource', value: 'Resource' },
    { icon: s5, label: 'Feedback', value: 'Feedback' },
    { icon: s6, label: 'Training', value: 'Job' },
    { icon: s7, label: 'Jobsec', value: 'Jobsec' },
    { icon: s8, label: 'Admin', value: 'admin' },
    { icon: s9, label: 'Support', value: 'support' },
    { icon: s10, label: 'Project', value: 'project' },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden p-4">
        <button onClick={() => setOpen(true)} className="text-white bg-[#295E6A] px-3 py-2 rounded">
          &#x22EE; {/* 3 vertical dots */}
        </button>
      </div>

      {/* Sidebar Drawer */}
      <div className={`fixed z-50 top-0 left-0 h-full bg-[#295E6A] w-[288px] transform transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:flex`}>
        <div className="flex flex-col w-full h-full">
          {/* Close Button - only visible on mobile */}
          <div className="flex justify-end lg:hidden p-4">
            <button onClick={() => setOpen(false)} className="text-white text-xl">&times;</button>
          </div>

          {/* Logo */}
          <div className="relative w-full h-[100px]">
            <img src={logo} alt="Logo" className="absolute top-[16px] left-[60px] w-[142px] h-[46px] object-contain" />
          </div>

          <hr style={{ color: '#E2E2E2AB' }} />

          {/* Menu Items */}
          <div className="relative w-[234px] h-[701px] top-[110px] left-[27px] flex flex-col gap-[36px]">
            <ul className="space-y-[14px]">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setPage(item.value);
                    setOpen(false); // Close drawer on mobile when clicked
                  }}
                  className="flex items-center gap-2 py-2 cursor-pointer text-white hover:text-teal-200 transition"
                >
                  <img src={item.icon} alt={item.label} className="w-5 h-5" />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Icons */}
          <div className="grid grid-cols-4 gap-4 px-4 mt-6">
            <img src={s11} alt="icon" />
            {[s12, s13, s14].map((src, index) => (
              <div key={index} className="w-[24px] h-[24px]">
                <img src={src} alt={`icon-${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
