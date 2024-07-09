// src/components/ActiveFleetWidget.jsx
import React from 'react';

const ActiveFleetWidget = () => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold">Active Fleet</h2>
      <div className="mt-4">
        <div className="flex justify-between">
          <span>On Route</span>
          <span>87%</span>
        </div>
        <div className="h-2 bg-green-500 rounded-full mt-1"></div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <span>Break</span>
          <span>7%</span>
        </div>
        <div className="h-2 bg-yellow-500 rounded-full mt-1"></div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <span>Connection Lost</span>
          <span>5%</span>
        </div>
        <div className="h-2 bg-red-500 rounded-full mt-1"></div>
      </div>
    </div>
  );
};

export default ActiveFleetWidget;
