export const documents = [
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
];

export const prospects = [
  { 
    id: 1,
    name: 'Wade Warren', 
    stage: 'Stage: Initial Inquiry', 
    avatar: '/api/placeholder/32/32' 
  },
  { 
    id: 2,
    name: 'Ava Wright', 
    stage: 'Stage: Initial Inquiry', 
    avatar: '/api/placeholder/32/32' 
  },
  { 
    id: 3,
    name: 'Cody Fisher', 
    stage: 'Stage: Initial Inquiry', 
    avatar: '/api/placeholder/32/32' 
  }
];

export const navigationItems = [
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