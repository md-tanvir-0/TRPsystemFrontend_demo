// src/components/MainContent.jsx
import React from 'react';
import AlertsWidget from './AlertsWidget';
import DriversWithFlagsWidget from './DriversWithFlagsWidget';
import TasksProgressWidget from './TasksProgressWidget';
import BehavioralSummaryChart from './BehavioralSummaryChart';
import ActiveFleetWidget from './ActiveFleetWidget';
import AggressiveDriversWidget from './AggressiveDriversWidget';
import DriversEfficiencyWidget from './DriversEfficiencyWidget';

const MainContent = () => {
  return (
    <div className="flex-1 p-6 bg-gray-100">
      <div className="grid grid-cols-3 gap-4">
        <DriversWithFlagsWidget />
        <AlertsWidget />
        <TasksProgressWidget />
      </div>
      <div className="mt-4">
        <BehavioralSummaryChart />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <ActiveFleetWidget />
        <AggressiveDriversWidget />
        <DriversEfficiencyWidget />
      </div>
    </div>
  );
};

export default MainContent;
