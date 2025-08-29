import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import ProgressCircle from '../UI/ProgressCircle';

const AccountProgress = () => {
  const completedSteps = [
    'Profile Setup',
    'Initial Training',
    'Legal Documents'
  ];

  const remainingSteps = [
    'Financial Integration',
    'Final Review'
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-gray-600 text-sm mb-4">Account Progress</h3>
      
      <div className="flex justify-center mb-4">
        <ProgressCircle percentage={85} />
      </div>
      
      <div className="space-y-2">
        <h4 className="font-medium text-sm">Steps Completed</h4>
        <div className="space-y-1">
          {completedSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-600">{step}</span>
            </div>
          ))}
        </div>
        
        <h4 className="font-medium text-sm pt-2">Steps Remaining</h4>
        <div className="space-y-1">
          {remainingSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-2">
              <Circle className="w-4 h-4 text-gray-300" />
              <span className="text-sm text-gray-400">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountProgress;