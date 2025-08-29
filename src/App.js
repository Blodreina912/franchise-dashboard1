import React, { useState } from 'react';
import { Search, Filter, MoreVertical, CheckCircle, Circle, User, Eye } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [docs, setDocs] = useState([
    { 
      name: 'Tech_requirements.pdf', 
      type: 'Legal', 
      size: '200 KB',
      aiIncluded: true,
      dashboard: true,
      stageAccess: 'Full',
      format: 'pdf'
    },
    { 
      name: 'Dashboard screenshot.jpg', 
      type: 'Vendors & Assets', 
      size: '720 KB',
      aiIncluded: true,
      dashboard: true,
      stageAccess: 'Onboarding',
      format: 'jpg'
    },
    { 
      name: 'Dashboard prototype recording.mp4', 
      type: 'Technology', 
      size: '16 MB',
      aiIncluded: true,
      dashboard: true,
      stageAccess: 'Franchisee',
      format: 'mp4'
    },
    { 
      name: 'Financial Overview', 
      type: 'Financial', 
      size: '4.2 MB',
      aiIncluded: true,
      dashboard: true,
      stageAccess: 'Prospect',
      format: 'doc'
    }
  ]);

  const prospects = [
    { id: 1, name: 'Wade Warren', stage: 'Stage: Initial Inquiry' },
    { id: 2, name: 'Ava Wright', stage: 'Stage: Initial Inquiry' },
    { id: 3, name: 'Cody Fisher', stage: 'Stage: Initial Inquiry' }
  ];

  const navigationItems = [
    { name: 'Home', active: true },
    { name: 'Stages & Checklist', active: false },
    { name: 'Upload Docs', active: false, highlighted: true },
    { name: 'Preferred Vendors', active: false },
    { name: 'Tech Stack', active: false },
    { name: 'MAI Settings', active: false },
    { name: 'Pending Questions', active: false, badge: 1 }
  ];

  const getFileIcon = (format) => {
    const iconMap = {
      'pdf': '🔴', 'jpg': '🔴', 'mp4': '🔵', 'doc': '🔵'
    };
    return iconMap[format] || '📄';
  };

  const getTypeColor = (type) => {
    const colorMap = {
      'Legal': { backgroundColor: '#dbeafe', color: '#2563eb' },
      'Vendors & Assets': { backgroundColor: '#dcfce7', color: '#16a34a' },
      'Technology': { backgroundColor: '#f3e8ff', color: '#9333ea' },
      'Financial': { backgroundColor: '#fce7f3', color: '#ec4899' }
    };
    return colorMap[type] || { backgroundColor: '#f9fafb', color: '#6b7280' };
  };

  const handleToggle = (docIndex, field) => {
    const updatedDocs = [...docs];
    updatedDocs[docIndex][field] = !updatedDocs[docIndex][field];
    setDocs(updatedDocs);
  };

  const Toggle = ({ enabled, onChange }) => (
    <button
      onClick={onChange}
      style={{
        width: '32px',
        height: '16px',
        borderRadius: '999px',
        backgroundColor: enabled ? '#3b82f6' : '#d1d5db',
        position: 'relative',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      <div style={{
        width: '12px',
        height: '12px',
        backgroundColor: 'white',
        borderRadius: '50%',
        position: 'absolute',
        top: '2px',
        left: enabled ? '18px' : '2px',
        transition: 'left 0.2s'
      }} />
    </button>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex' }}>
      {/* Sidebar */}
      <div style={{ width: '256px', backgroundColor: '#1e293b', color: 'white', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '24px' }}>
          <div style={{ backgroundColor: '#334155', padding: '12px', borderRadius: '6px', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>liesma</h2>
          </div>
          
          <nav>
            {navigationItems.map((item, index) => (
              <a key={index} href="#" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 12px',
                borderRadius: '6px',
                textDecoration: 'none',
                color: item.active ? 'white' : '#cbd5e1',
                backgroundColor: item.active ? '#334155' : 'transparent',
                borderLeft: item.highlighted ? '2px solid #60a5fa' : 'none',
                paddingLeft: item.highlighted ? '20px' : '12px',
                marginBottom: '8px'
              }}>
                <span>{item.name}</span>
                {item.badge && (
                  <span style={{
                    backgroundColor: '#ef4444',
                    fontSize: '12px',
                    borderRadius: '999px',
                    padding: '2px 8px'
                  }}>{item.badge}</span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '32px' }}>
        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '32px' }}>
          {/* Account Progress */}
          <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>Account Progress</h3>
            <div style={{ position: 'relative', width: '100px', height: '100px', margin: '0 auto 16px' }}>
              <svg style={{ width: '100px', height: '100px', transform: 'rotate(-90deg)' }} viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="transparent"/>
                <circle cx="50" cy="50" r="40" stroke="#3b82f6" strokeWidth="8" fill="transparent"
                  strokeDasharray="251.2" strokeDashoffset="37.68" strokeLinecap="round"/>
              </svg>
              <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '24px', fontWeight: 'bold' }}>85%</span>
              </div>
            </div>
            <div style={{ fontSize: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <CheckCircle size={14} color="#10b981" />
                <span>Profile Setup</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Circle size={14} color="#d1d5db" />
                <span>Final Review</span>
              </div>
            </div>
          </div>

          {/* Franchisees */}
          <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>Total Franchisees Onboard</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ fontSize: '30px', fontWeight: 'bold' }}>14</span>
              <span style={{ fontSize: '12px', backgroundColor: '#dcfce7', color: '#15803d', padding: '4px 8px', borderRadius: '12px' }}>+7.1%</span>
            </div>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span>Stage 1 (Initial Inquiry)</span><span>02</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span>Stage 2 (Document Submission)</span><span>07</span>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ color: '#6b7280', fontSize: '14px' }}>Key Insights & Feedback</h3>
              <Eye size={16} color="#9ca3af" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontSize: '30px', fontWeight: 'bold' }}>10%</span>
              <span style={{ fontSize: '12px', backgroundColor: '#dcfce7', color: '#15803d', padding: '4px 8px', borderRadius: '12px' }}>Top Performer</span>
            </div>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>Sales Growth</span>
          </div>

          {/* Financial */}
          <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>Financial Wellbeing</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ fontSize: '30px', fontWeight: 'bold' }}>20</span>
              <span style={{ fontSize: '12px', backgroundColor: '#dcfce7', color: '#15803d', padding: '4px 8px', borderRadius: '12px' }}>+21%</span>
            </div>
            <div style={{ fontSize: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Target: $500,000</span>
                <span>Current: $450,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
          {/* My Uploads */}
          <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <div style={{ border: '4px solid #a855f7', borderRadius: '8px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div>
                  <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 4px 0' }}>My Uploads</h2>
                  <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>Documents that are uploaded by you.</p>
                </div>
                <MoreVertical size={20} color="#9ca3af" />
              </div>

              {/* Search */}
              <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                  <Search size={16} color="#9ca3af" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    placeholder="Search here..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: '100%',
                      paddingLeft: '40px',
                      padding: '8px 16px 8px 40px',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '14px'
                    }}
                  />
                </div>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}>
                  <Filter size={16} />
                  Filters
                </button>
              </div>

              {/* Table Header */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 80px 80px 100px 80px',
                gap: '12px',
                padding: '12px',
                backgroundColor: '#f9fafb',
                fontSize: '14px',
                fontWeight: '500',
                color: '#6b7280',
                borderRadius: '8px 8px 0 0'
              }}>
                <div>Document Name</div>
                <div>Document Type</div>
                <div>AI Included</div>
                <div>Dashboard</div>
                <div>Stage Access</div>
                <div>Actions</div>
              </div>

              {/* Table Rows */}
              {docs.filter(doc => doc.name.toLowerCase().includes(searchQuery.toLowerCase())).map((doc, index) => (
                <div key={index} style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 80px 80px 100px 80px',
                  gap: '12px',
                  padding: '16px 12px',
                  alignItems: 'center',
                  borderTop: '1px solid #f3f4f6',
                  backgroundColor: 'white'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>{getFileIcon(doc.format)}</span>
                    <div>
                      <div style={{ fontWeight: '500', fontSize: '14px' }}>{doc.name}</div>
                      <div style={{ fontSize: '12px', color: '#6b7280' }}>{doc.size}</div>
                    </div>
                  </div>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500',
                    ...getTypeColor(doc.type)
                  }}>
                    {doc.type}
                  </span>
                  <Toggle 
                    enabled={doc.aiIncluded} 
                    onChange={() => handleToggle(index, 'aiIncluded')}
                  />
                  <Toggle 
                    enabled={doc.dashboard} 
                    onChange={() => handleToggle(index, 'dashboard')}
                  />
                  <select style={{
                    width: '100%',
                    padding: '4px 8px',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    fontSize: '12px'
                  }} value={doc.stageAccess}>
                    <option>Full</option>
                    <option>Onboarding</option>
                    <option>Prospect</option>
                  </select>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ color: '#2563eb', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Delete</button>
                    <button style={{ color: '#2563eb', fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer' }}>Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prospects */}
          <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px' }}>Prospect Leads</h2>
            {prospects.map((prospect) => (
              <div key={prospect.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', marginBottom: '8px', borderRadius: '8px' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#d1d5db', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <User size={20} color="#6b7280" />
                </div>
                <div>
                  <div style={{ fontWeight: '500' }}>{prospect.name}</div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>{prospect.stage}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;