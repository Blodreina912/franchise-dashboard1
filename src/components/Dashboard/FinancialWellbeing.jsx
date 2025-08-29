import React from 'react';

const FinancialWellbeing = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-gray-600 text-sm mb-4">Financial Wellbeing</h3>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-3xl font-bold text-gray-900">20</span>
        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">+21%</span>
      </div>
      <span className="text-sm text-gray-600 block mb-4">Total Franchisees</span>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Target</span>
          <span className="text-gray-600">Current</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">$500,000</span>
          <span className="font-medium">$450,000</span>
        </div>
      </div>
    </div>
  );
};

export default FinancialWellbeing;