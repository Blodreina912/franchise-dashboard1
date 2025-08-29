import React from 'react';
import { Eye } from 'lucide-react';

const KeyInsights = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600 text-sm">Key Insights & Feedback</h3>
        <Eye className="w-4 h-4 text-gray-400" />
      </div>
      
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-3xl font-bold text-gray-900">10%</span>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Top Performer</span>
        </div>
        <span className="text-sm text-gray-600">Sales Growth</span>
      </div>
      
      <div>
        <h4 className="font-medium text-sm mb-2">Feedback</h4>
        <p className="text-xs text-gray-600">Franchisees are requesting more detailed training materials.</p>
      </div>
    </div>
  );
};

export default KeyInsights;