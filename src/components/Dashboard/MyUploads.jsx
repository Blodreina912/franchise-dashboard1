import React, { useState } from 'react';
import { Search, Filter, MoreVertical } from 'lucide-react';
import { documents } from '../../data/mockData';
import { getFileIcon, getTypeColor, filterDocuments } from '../../utils/helpers';
import { STAGE_ACCESS_OPTIONS } from '../../utils/constants';
import FileIcon from '../UI/FileIcon';
import Toggle from '../UI/Toggle';

const MyUploads = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [docs, setDocs] = useState(documents);

  const handleToggle = (docIndex, field) => {
    const updatedDocs = [...docs];
    updatedDocs[docIndex] = {
      ...updatedDocs[docIndex],
      [field]: !updatedDocs[docIndex][field]
    };
    setDocs(updatedDocs);
  };

  const handleStageChange = (docIndex, newStage) => {
    const updatedDocs = [...docs];
    updatedDocs[docIndex] = {
      ...updatedDocs[docIndex],
      stageAccess: newStage
    };
    setDocs(updatedDocs);
  };

  const filteredDocs = filterDocuments(docs, searchQuery);

  return (
    <div className="col-span-2 bg-white rounded-lg shadow-sm">
      <div className="border-4 border-purple-500 rounded-lg">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">My Uploads</h2>
              <p className="text-gray-600 text-sm">Documents that are uploaded by you.</p>
            </div>
            <MoreVertical className="w-5 h-5 text-gray-400" />
          </div>

          {/* Search and Filter */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 py-3 px-4 bg-gray-50 rounded-t-lg text-sm font-medium text-gray-600">
            <div className="col-span-4">Document Name</div>
            <div className="col-span-2">Document Type</div>
            <div className="col-span-1">AI Included</div>
            <div className="col-span-1">Dashboard Inclusion</div>
            <div className="col-span-2">Stage Access</div>
            <div className="col-span-2">Actions</div>
          </div>

          {/* Document Rows */}
          <div className="divide-y">
            {filteredDocs.map((doc, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 py-4 px-4 items-center hover:bg-gray-50">
                <div className="col-span-4 flex items-center gap-3">
                  <FileIcon format={doc.format} />
                  <div>
                    <div className="font-medium text-gray-900">{doc.name}</div>
                    <div className="text-sm text-gray-500">{doc.size}</div>
                  </div>
                </div>
                <div className="col-span-2">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(doc.type)}`}>
                    {doc.type}
                  </span>
                </div>
                <div className="col-span-1">
                  <Toggle 
                    enabled={doc.aiIncluded} 
                    onChange={(value) => handleToggle(index, 'aiIncluded')}
                    size="small"
                  />
                </div>
                <div className="col-span-1">
                  <Toggle 
                    enabled={doc.dashboard} 
                    onChange={(value) => handleToggle(index, 'dashboard')}
                    size="small"
                  />
                </div>
                <div className="col-span-2">
                  <select 
                    className="w-full px-3 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    value={doc.stageAccess}
                    onChange={(e) => handleStageChange(index, e.target.value)}
                  >
                    {STAGE_ACCESS_OPTIONS.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Delete</button>
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyUploads;