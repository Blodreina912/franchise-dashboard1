import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AccountProgress from './AccountProgress';
import FranchiseeStats from './FranchiseeStats';
import KeyInsights from './KeyInsights';
import FinancialWellbeing from './FinancialWellbeing';
import MyUploads from './MyUploads';
import ProspectLeads from './ProspectLeads';

const FranchiseDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Top Stats Row */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <AccountProgress />
            <FranchiseeStats />
            <KeyInsights />
            <FinancialWellbeing />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-3 gap-8">
            <MyUploads />
            <ProspectLeads />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseDashboard;