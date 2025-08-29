import React from 'react';
import { User } from 'lucide-react';
import { prospects } from '../../data/mockData';

const ProspectLeads = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Prospect Leads</h2>
      
      <div className="space-y-4">
        {prospects.map((prospect) => (
          <div key={prospect.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900">{prospect.name}</div>
              <div className="text-sm text-gray-500">{prospect.stage}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProspectLeads;