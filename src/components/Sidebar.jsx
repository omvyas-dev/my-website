import React from 'react';
import logo from '../images/logo.svg';
import s1 from '../images/s1.svg';
import i2 from '../images/i2.svg';
import s2 from '../images/f2.svg';
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
    <div className="flex h-screen">
      <div className="w-[288px] h-[1080px]" style={{ backgroundColor: '#295E6A' }}>
        {/* Logo */}
        <div className="relative w-full h-[100px]">
          <img
            src={logo}
            alt="Logo"
            className="absolute top-[16px] left-[60px] w-[142px] h-[46px] object-contain"
          />
        </div>

        <hr style={{ color: '#E2E2E2AB' }} />

        {/* Menu */}
        <div className="relative w-[234px] h-[701px] top-[110px] left-[27px] flex flex-col gap-[36px]">
          <ul className="space-y-[14px]">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => setPage(item.value)}
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
  );
}
