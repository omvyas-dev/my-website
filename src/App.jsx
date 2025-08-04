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
import Dashboard from './components/Dashboard';

function App() {
  const [page, setPage] = useState('chat'); // default page

  const renderPage = () => {
    switch (page) {
      case 'dashboard':
        return (
          <div className="flex items-center justify-center h-full text-2xl font-boldx">
              <Dashboard/>
            </div>
   
        );
      case 'tracker':
        return (
          <div className="flex items-center justify-center h-full text-2xl font-bold">
            <Cards/>
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
