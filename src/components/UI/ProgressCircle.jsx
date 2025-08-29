import React from 'react';

const ProgressCircle = ({ percentage, size = 128 }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg 
        className="w-full h-full transform -rotate-90" 
        viewBox="0 0 100 100"
      >
        <circle 
          cx="50" 
          cy="50" 
          r={radius} 
          stroke="#e5e7eb" 
          strokeWidth="8" 
          fill="transparent"
        />
        <circle 
          cx="50" 
          cy="50" 
          r={radius} 
          stroke="#3b82f6" 
          strokeWidth="8" 
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-900">{percentage}%</span>
      </div>
    </div>
  );
};

export default ProgressCircle;