import React from 'react';

const Toggle = ({ enabled, onChange, size = 'default' }) => {
  const sizeClasses = size === 'small' 
    ? 'w-8 h-4' 
    : 'w-12 h-6';
  
  const thumbClasses = size === 'small'
    ? 'w-3 h-3 top-0.5'
    : 'w-5 h-5 top-0.5';

  return (
    <button
      onClick={() => onChange?.(!enabled)}
      className={`${sizeClasses} rounded-full relative transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        enabled ? 'bg-blue-500' : 'bg-gray-300'
      }`}
    >
      <div 
        className={`${thumbClasses} bg-white rounded-full absolute transition-transform ${
          enabled 
            ? size === 'small' ? 'translate-x-4' : 'translate-x-6'
            : 'translate-x-0.5'
        }`}
      />
    </button>
  );
};

export default Toggle;