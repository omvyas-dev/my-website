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
        <div className="flex-1 min-h-screen w-full bg-gray-50">
          <Dashboard />
        </div>
      );
    case 'tracker':
      return (
        <div className="flex-1 min-h-screen bg-gray-50">
          <Cards />
        </div>
      );
    case 'Feedback':
      return (
        <div className="flex-1 min-h-screen bg-gray-50">
          <Feedback />
        </div>
      );
    case 'Job':
      return (
        <div className="flex-1 min-h-screen bg-gray-50">
          <Job />
        </div>
      );
    case 'Jobsec':
      return (
        <div className="flex-1 min-h-screen bg-gray-50">
          <Jobsec />
        </div>
      );
    case 'Resource':
      return (
        <div className="flex-1 min-h-screen bg-gray-50">
          <Resource />
        </div>
      );
    default:
      return <div className="p-4">Page not found</div>;
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
