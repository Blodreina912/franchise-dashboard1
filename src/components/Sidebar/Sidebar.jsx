import React from 'react';
import { navigationItems } from '../../data/mockData';

const Sidebar = () => {
  return (
    <div className="w-64 bg-slate-800 text-white flex flex-col">
      <div className="p-6">
        <div className="bg-slate-700 p-3 rounded mb-6">
          <h2 className="text-lg font-semibold">liesma</h2>
        </div>
        
        <nav className="space-y-2">
          {navigationItems.map((item, index) => (
            <a 
              key={index}
              href="#" 
              className={`block py-2 px-3 rounded flex items-center justify-between ${
                item.active 
                  ? 'bg-slate-700' 
                  : item.highlighted 
                    ? 'text-slate-300 hover:bg-slate-700 border-l-2 border-blue-400 pl-5'
                    : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              <span>{item.name}</span>
              {item.badge && (
                <span className="bg-red-500 text-xs rounded-full px-2 py-1">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
        </nav>
      </div>
      
      <div className="mt-auto p-6">
        <a href="#" className="text-slate-300 hover:text-white">Logout</a>
      </div>
    </div>
  );
};

export default Sidebar;