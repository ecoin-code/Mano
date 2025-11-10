
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { MenuIcon } from './components/Icons';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#131314] text-gray-300 font-sans">
      <div
        className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity md:hidden ${
          sidebarOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>
      <div
        className={`fixed top-0 left-0 h-full z-30 transition-transform transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 md:flex-shrink-0`}
      >
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
         <button 
          onClick={() => setSidebarOpen(true)}
          className="md:hidden p-4 text-gray-400 absolute top-4 left-4 z-10"
          aria-label="Open sidebar"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
        <MainContent />
      </div>
    </div>
  );
};

export default App;
