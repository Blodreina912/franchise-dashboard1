import React, { useState } from 'react';
import { Search, Filter, MoreVertical, CheckCircle, Circle, User, Eye } from 'lucide-react';
import './index.css';

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
    },
    { 
      name: 'UX Design Guidelines.docx', 
      type: 'Legal', 
      size: '400 KB',
      aiIncluded: true,
      dashboard: true,
      stageAccess: 'Onboarding',
      format: 'doc'
    },
    { 
      name: 'Dashboard interaction.scp', 
      type: 'Legal', 
      size: '12 MB',
      aiIncluded: true,
      dashboard: true,
      stageAccess: 'Onboarding',
      format: 'scp'
    },
    { 
      name: 'Briefing call recording.mp3', 
      type: 'Financial', 
      size: '16.8 MB',
      aiIncluded: false,
      dashboard: false,
      stageAccess: 'Prospect',
      format: 'mp3'
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
    { name: 'Targets', active: false },
    { name: 'Zee Sales Targets', active: false },
    { name: 'MAI Settings', active: false },
    { name: 'Pending Questions', active: false, badge: 1 }
  ];

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

  const filteredDocs = docs.filter(doc => 
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const Toggle = ({ enabled, onChange }) => (
    <button
      onClick={() => onChange(!enabled)}
      style={{
        width: '32px',
        height: '16px',
        borderRadius: '999px',
        backgroundColor: enabled ? '#3b82f6' : '#d1d5db',
        position: 'relative',
        transition: 'background-color 0.2s',
        border: 'none',
        cursor: 'pointer',
        outline: 'none'
      }}
    >
      <div 
        style={{
          width: '12px',
          height: '12px',
          backgroundColor: 'white',
          borderRadius: '50%',
          position: 'absolute',
          top: '2px',
          left: enabled ? '18px' : '2px',
          transition: 'left 0.2s'
        }}
      />
    </button>
  );

  const ProgressCircle = ({ percentage }) => (
    <div style={{ position: 'relative', width: '128px', height: '128px', margin: '0 auto' }}>
      <svg 
        style={{ width: '128px', height: '128px', transform: 'rotate(-90deg)' }}
        viewBox="0 0 100 100"
      >
        <circle 
          cx="50" 
          cy="50" 
          r="40" 
          stroke="#e5e7eb" 
          strokeWidth="8" 
          fill="transparent"
        />
        <circle 
          cx="50" 
          cy="50" 
          r="40" 
          stroke="#3b82f6" 
          strokeWidth="8" 
          fill="transparent"
          strokeDasharray="251.2"
          strokeDashoffset={251.2 - (percentage / 100) * 251.2}
          strokeLinecap="round"
        />
      </svg>
      <div style={{ 
        position: 'absolute', 
        top: '0', 
        left: '0', 
        right: '0', 
        bottom: '0', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>
          {percentage}%
        </span>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex' }}>
      {/* Sidebar */}
      <div style={{ width: '256px', backgroundColor: '#1e293b', color: 'white', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '24px' }}>
          <div style={{ backgroundColor: '#334155', padding: '12px', borderRadius: '6px', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>liesma</h2>
          </div>
          
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {navigationItems.map((item, index) => (
              <a 
                key={index}
                href="#" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  color: item.active ? 'white' : '#cbd5e1',
                  backgroundColor: item.active ? '#334155' : 'transparent',
                  borderLeft: item.highlighted ? '2px solid #60a5fa' : 'none',
                  paddingLeft: item.highlighted ? '20px' : '12px'
                }}
                onMouseOver={(e) => {
                  if (!item.active) e.currentTarget.style.backgroundColor = '#334155';
                }}
                onMouseOut={(e) => {
                  if (!item.active) e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span>{item.name}</span>
                {item.badge && (
                  <span style={{
                    backgroundColor: '#ef4444',
                    fontSize: '12px',
                    borderRadius: '999px',
                    padding: '2px 8px'
                  }}>
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>
        
        <div style={{ marginTop: 'auto', padding: '24px' }}>
          <a href="#" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Logout</a>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Top Stats Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '32px' }}>
            {/* Account Progress */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)' }}>
              <h3 style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px', margin: '0 0 16px 0' }}>Account Progress</h3>
              <ProgressCircle percentage={85} />
              
              <div style={{ marginTop: '16px' }}>
                <h4 style={{ fontWeight: '500', fontSize: '14px', marginBottom: '8px', margin: '0 0 8px 0' }}>Steps Completed</h4>
                <div style={{ marginBottom: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <CheckCircle size={16} color="#10b981" />
                    <span style={{ fontSize: '14px', color: '#6b7280' }}>Profile Setup</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <CheckCircle size={16} color="#10b981" />
                    <span style={{ fontSize: '14px', color: '#6b7280' }}>Initial Training</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <CheckCircle size={16} color="#10b981" />
                    <span style={{ fontSize: '14px', color: '#6b7280' }}>Legal Documents</span>
                  </div>
                </div>
                
                <h4 style={{ fontWeight: '500', fontSize: '14px', marginBottom: '4px', margin: '8px 0 4px 0' }}>Steps Remaining</h4>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <Circle size={16} color="#d1d5db" />
                    <span style={{ fontSize: '14px', color: '#9ca3af' }}>Financial Integration</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Circle size={16} color="#d1d5db" />
                    <span style={{ fontSize: '14px', color: '#9ca3af' }}>Final Review</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Franchisees Onboard */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)' }}>
              <h3 style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px', margin: '0 0 16px 0' }}>Total Franchisees Onboard</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827' }}>14</span>
                <span style={{ 
                  fontSize: '12px', 
                  backgroundColor: '#dcfce7', 
                  color: '#15803d', 
                  padding: '4px 8px', 
                  borderRadius: '999px' 
                }}>+7.1%</span>
              </div>
              
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#3b82f6', borderRadius: '50%' }}></div>
                  <span style={{ fontSize: '14px', color: '#6b7280' }}>Stage 1 (Initial Inquiry)</span>
                  <span style={{ marginLeft: 'auto', fontSize: '14px', fontWeight: '500' }}>02</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#60a5fa', borderRadius: '50%' }}></div>
                  <span style={{ fontSize: '14px', color: '#6b7280' }}>Stage 2 (Document Submission)</span>
                  <span style={{ marginLeft: 'auto', fontSize: '14px', fontWeight: '500' }}>07</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#93c5fd', borderRadius: '50%' }}></div>
                  <span style={{ fontSize: '14px', color: '#6b7280' }}>Stage 3 (Training)</span>
                  <span style={{ marginLeft: 'auto', fontSize: '14px', fontWeight: '500' }}>05</span>
                </div>
              </div>
              
              <div style={{ width: '100%', backgroundColor: '#e5e7eb', borderRadius: '999px', height: '8px', marginTop: '16px' }}>
                <div style={{ backgroundColor: '#3b82f6', height: '8px', borderRadius: '999px', width: '70%' }}></div>
              </div>
            </div>

            {/* Key Insights & Feedback */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h3 style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>Key Insights & Feedback</h3>
                <Eye size={16} color="#9ca3af" />
              </div>
              
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827' }}>10%</span>
                  <span style={{ 
                    fontSize: '12px', 
                    backgroundColor: '#dcfce7', 
                    color: '#15803d', 
                    padding: '4px 8px', 
                    borderRadius: '999px' 
                  }}>Top Performer</span>
                </div>
                <span style={{ fontSize: '14px', color: '#6b7280' }}>Sales Growth</span>
              </div>
              
              <div>
                <h4 style={{ fontWeight: '500', fontSize: '14px', marginBottom: '8px', margin: '0 0 8px 0' }}>Feedback</h4>
                <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>Franchisees are requesting more detailed training materials.</p>
              </div>
            </div>

            {/* Financial Wellbeing */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)' }}>
              <h3 style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px', margin: '0 0 16px 0' }}>Financial Wellbeing</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827' }}>20</span>
                <span style={{ 
                  fontSize: '12px', 
                  backgroundColor: '#dcfce7', 
                  color: '#15803d', 
                  padding: '4px 8px', 
                  borderRadius: '999px' 
                }}>+21%</span>
              </div>
              <span style={{ fontSize: '14px', color: '#6b7280', display: 'block', marginBottom: '16px' }}>Total Franchisees</span>
              
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px' }}>
                  <span style={{ color: '#6b7280' }}>Target</span>
                  <span style={{ color: '#6b7280' }}>Current</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: '500' }}>$500,000</span>
                  <span style={{ fontWeight: '500' }}>$450,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
            {/* My Uploads Section */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)' }}>
              <div style={{ border: '4px solid #a855f7', borderRadius: '8px' }}>
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <div>
                      <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', margin: '0 0 4px 0' }}>My Uploads</h2>
                      <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>Documents that are uploaded by you.</p>
                    </div>
                    <MoreVertical size={20} color="#9ca3af" />
                  </div>

                  {/* Search and Filter */}
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                      <Search 
                        size={16} 
                        color="#9ca3af"
                        style={{ 
                          position: 'absolute', 
                          left: '12px', 
                          top: '50%', 
                          transform: 'translateY(-50%)', 
                          pointerEvents: 'none' 
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Search here..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                          width: '100%',
                          paddingLeft: '40px',
                          paddingRight: '16px',
                          paddingTop: '8px',
                          paddingBottom: '8px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                        onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
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
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                    >
                      <Filter size={16} />
                      Filters
                    </button>
                  </div>

                  {/* Table */}
                  <div>
                    {/* Header */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '2fr 1fr 80px 80px 120px 120px',
                      gap: '16px',
                      padding: '12px 16px',
                      backgroundColor: '#f9fafb',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#6b7280',
                      borderTopLeftRadius: '8px',
                      borderTopRightRadius: '8px'
                    }}>
                      <div>Document Name</div>
                      <div>Document Type</div>
                      <div>AI Included</div>
                      <div>Dashboard</div>
                      <div>Stage Access</div>
                      <div>Actions</div>
                    </div>

                    {/* Rows */}
                    <div style={{ border: '1px solid #f3f4f6', borderTop: 'none', borderRadius: '0 0 8px 8px' }}>
                      {filteredDocs.map((doc, index) => (
                        <div 
                          key={index} 
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '2fr 1fr 80px 80px 120px 120px',
                            gap: '16px',
                            padding: '16px',
                            alignItems: 'center',
                            borderTop: index > 0 ? '1px solid #f3f4f6' : 'none',
                            backgroundColor: 'white'
                          }}
                          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span style={{ fontSize: '18px' }}>{getFileIcon(doc.format)}</span>
                            <div>
                              <div style={{ fontWeight: '500', color: '#111827' }}>{doc.name}</div>
                              <div style={{ fontSize: '14px', color: '#6b7280' }}>{doc.size}</div>
                            </div>
                          </div>
                          <div>
                            <span style={{
                              display: 'inline-block',
                              padding: '4px 8px',
                              borderRadius: '999px',
                              fontSize: '12px',
                              fontWeight: '500',
                              ...getTypeColor(doc.type)
                            }}>
                              {doc.type}
                            </span>
                          </div>
                          <div>
                            <Toggle 
                              enabled={doc.aiIncluded} 
                              onChange={(value) => handleToggle(index, 'aiIncluded')}
                            />
                          </div>
                          <div>
                            <Toggle 
                              enabled={doc.dashboard} 
                              onChange={(value) => handleToggle(index, 'dashboard')}
                            />
                          </div>
                          <div>
                            <select 
                              style={{
                                width: '100%',
                                padding: '4px 8px',
                                border: '1px solid #d1d5db',
                                borderRadius: '4px',
                                fontSize: '14px',
                                outline: 'none'
                              }}
                              value={doc.stageAccess}
                              onChange={(e) => handleStageChange(index, e.target.value)}
                              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                            >
                              <option value="Full">Full</option>
                              <option value="Onboarding">Onboarding</option>
                              <option value="Franchisee">Franchisee</option>
                              <option value="Prospect">Prospect</option>
                            </select>
                          </div>
                          <div style={{ display: 'flex', gap: '8px' }}>
                            <button style={{ 
                              color: '#2563eb', 
                              fontSize: '14px', 
                              background: 'none', 
                              border: 'none', 
                              cursor: 'pointer',
                              textDecoration: 'none'
                            }}
                            onMouseOver={(e) => e.target.style.color = '#1d4ed8'}
                            onMouseOut={(e) => e.target.style.color = '#2563eb'}
                            >Delete</button>
                            <button style={{ 
                              color: '#2563eb', 
                              fontSize: '14px', 
                              background: 'none', 
                              border: 'none', 
                              cursor: 'pointer',
                              textDecoration: 'none'
                            }}
                            onMouseOver={(e) => e.target.style.color = '#1d4ed8'}
                            onMouseOut={(e) => e.target.style.color = '#2563eb'}
                            >Edit</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prospect Leads Section */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', marginBottom: '24px', margin: '0 0 24px 0' }}>Prospect Leads</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {prospects.map((prospect) => (
                  <div 
                    key={prospect.id} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px', 
                      padding: '12px', 
                      borderRadius: '8px',
                      cursor: 'pointer',
                      backgroundColor: 'transparent'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      backgroundColor: '#d1d5db', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}>
                      <User size={20} color="#6b7280" />
                    </div>
                    <div>
                      <div style={{ fontWeight: '500', color: '#111827' }}>{prospect.name}</div>
                      <div style={{ fontSize: '14px', color: '#6b7280' }}>{prospect.stage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;