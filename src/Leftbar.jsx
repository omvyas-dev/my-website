import React from 'react';
// import { FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import call from './images/call.svg';
import send from './images/send.svg';

const users = [
  { name: "Darlene Robertson", img: "https://i.pravatar.cc/40?img=1" },
  { name: "Guy Hawkins", img: "https://i.pravatar.cc/40?img=2" },
  { name: "Floyd Miles", img: "https://i.pravatar.cc/40?img=3" },
  { name: "Albert Flores", img: "https://i.pravatar.cc/40?img=4" },
  { name: "Jacob Jones", img: "https://i.pravatar.cc/40?img=5" },
  { name: "Brooklyn Simmons", img: "https://i.pravatar.cc/40?img=6" },
];

const UserCard = ({ name, img }) => (
  <div className="bg-white shadow-sm rounded-xl p-4 flex items-center justify-between mb-3">
    <div className="flex items-center gap-3">
      <img src={img} alt={name} className="w-10 h-10 rounded-full" />
      <div>
        <h4 className="font-medium text-sm">{name}</h4>
        <div className="flex items-center mt-1 bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-600">
          <input
            type="text"
            placeholder="Send quick message"
            className="bg-transparent focus:outline-none text-xs w-full"
          />

          <img src={send} className="text-gray-500 ml-2 w-[18px] h-[18px]" />
        </div>
      </div>
    </div>
    <div>
      <img src={call} className="text-gray-500 ml-2 w-[34px] h-[34px]" />
    </div>
  </div>
);

export default function Leftbar() {
  return (
    <div className="w-full max-w-sm mx-auto p-4 bg-gray-50 rounded-xl mt-4 mr-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Users</h3>
        <div className="text-sm text-gray-500">Show 10 Users ▾</div>
      </div>

      {/* Search */}
      <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-4">
        <input
          type="text"
          placeholder="Search here..."
          className="bg-transparent outline-none w-full text-sm"
        />
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* User Cards */}
      {users.map((user, index) => (
        <UserCard key={index} name={user.name} img={user.img} />
      ))}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-6 text-sm text-gray-500">
        <button>&laquo;</button>
        {[1, 2, 3, 4].map(n => (
          <button key={n} className="px-2 py-1 rounded hover:bg-gray-200">{n}</button>
        ))}
        <span>...67</span>
        <button>&raquo;</button>
      </div>
    </div>
  );
}
