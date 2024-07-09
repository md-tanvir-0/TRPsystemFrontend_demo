import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from './components/Header';
import BehavioralSummaryChart from './components/BehavioralSummaryChart';
import ActiveFleetWidget from './components/ActiveFleetWidget';
import AggressiveDriversWidget from './components/AggressiveDriversWidget';
import DriversEfficiencyWidget from './components/DriversEfficiencyWidget';

const App = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      
        <Home /> {/* Ensure Home component (sidebar) is rendered */}
      <div className="flex-1 bg-gray-800 text-white overflow-y-auto">
        <Header />
        <div className="p-4">
          <BehavioralSummaryChart />
          <div className="grid grid-cols-3 gap-4 mt-4">
            <ActiveFleetWidget />
            <AggressiveDriversWidget />
            <DriversEfficiencyWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
