import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Sectitlebar from './components/Sectitlebar';
import Chat from './components/Chat';
import Leftbar from './Leftbar';
import Menubar from './Menubar';
import Cards from './components/Cards';
import Job from './components/Job';
import Feedback from './components/Feedback';
import Resource from './components/Resource';
import Jobsec from './components/Jobsec';

function App() {
  const [page, setPage] = useState('chat'); // default page

  const renderPage = () => {
    switch (page) {
      case 'chat':
        return (
          <div className="flex flex-col h-screen">
            
            <div className="flex flex-col flex-1">
        <Topbar />
        </div>
            <div className="p-4">
              <Sectitlebar />
            </div>
            <div className="flex flex-1">
              <div className="w-72">
                <Menubar />
              </div>
              <div className="flex-1 overflow-y-auto">
                <Chat />
              </div>
              <div className="w-[310px]">
                <Leftbar />
              </div>
            </div>
          </div>
        );
      case 'tracker':
        return (
          <div className="flex items-center justify-center h-full text-2xl font-bold">
            <Cards/>
          </div>
        );
      case 'dashboard':
        return (
          <div className="flex items-center justify-center h-full text-2xl font-bold">
            Dashboard Page
          </div>
        );
          case 'Feedback':
        return (
          <div className="flex items-center justify-center h-full text-2xl font-bold">
            <Feedback/>
          </div>
        );
          case 'Job':
        return (
          <div className="flex items-center justify-center h-full text-2xl font-bold">
            <Job/>
          </div>
        );
          case 'Jobsec':
        return (
          <div className="flex items-center justify-center h-full text-2xl font-bold">
            <Jobsec/>
          </div>
        );
           case 'Resource':
        return (
          <div className="flex items-center justify-center h-full text-2xl font-bold">
            <Resource/>
          </div>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar setPage={setPage} />
      
        {renderPage()}
      
    </div>
  );
}

export default App;
