import React from 'react';
import { FileText } from 'lucide-react';

const FileIcon = ({ format }) => {
  const getFileIcon = (format) => {
    const iconMap = {
      'pdf': '🔴',
      'jpg': '🔴', 
      'mp4': '🔵',
      'doc': '🔵',
      'scp': '🔴',
      'mp3': '🔴'
    };
    return iconMap[format] || '📄';
  };

  return (
    <span className="text-lg">
      {getFileIcon(format)}
    </span>
  );
};

export default FileIcon;