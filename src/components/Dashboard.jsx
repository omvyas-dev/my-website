import React from 'react';
import Menubar from '../Menubar';
import Chat from './Chat';
import Leftbar from '../Leftbar';
import Titlebar from './Titlebar';
import Sectitlebar from './Sectitlebar';

export default function Dashboard() {
  return (
    <div>

         <div className="min-h-screen bg-gray-50">
      <Titlebar />
      <Sectitlebar /> 
           <div className="flex flex-col md:flex-row gap-4 p-4">
     
             {/* Menubar Section */}
             <div className="w-full md:w-1/4">
               <Menubar />
             </div>
     
             {/* Chat Section */}
             <div className="w-full md:w-1/2">
               <Chat />
             </div>
     
             {/* Leftbar Section */}
             <div className="w-full md:w-1/4 hidden md:block">
               <Leftbar />
             </div>
             
           </div>
         </div>
    </div>
  );
}  