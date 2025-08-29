import React from 'react';

const FranchiseeStats = () => {
  const stages = [
    { name: 'Stage 1 (Initial Inquiry)', count: 2, color: 'bg-blue-500' },
    { name: 'Stage 2 (Document Submission)', count: 7, color: 'bg-blue-400' },
    { name: 'Stage 3 (Training)', count: 5, color: 'bg-blue-300' }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-gray-600 text-sm mb-4">Total Franchisees Onboard</h3>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-3xl font-bold text-gray-900">14</span>
        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">+7.1%</span>
      </div>
      
      <div className="space-y-3 mb-4">
        {stages.map((stage, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={`w-2 h-2 ${stage.color} rounded-full`}></div>
            <span className="text-sm text-gray-600">{stage.name}</span>
            <span className="ml-auto text-sm font-medium">{stage.count.toString().padStart(2, '0')}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full" style={{width: '70%'}}></div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseeStats;