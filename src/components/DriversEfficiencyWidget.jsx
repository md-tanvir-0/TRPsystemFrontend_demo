// src/components/DriversEfficiencyWidget.jsx
import React from 'react';

const DriversEfficiencyWidget = () => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold">Drivers' Efficiency</h2>
      <ul className="mt-4">
        <li className="flex justify-between">
          <span>Andrew L.</span>
          <span>7.8 km/l</span>
        </li>
        <li className="flex justify-between mt-2">
          <span>Jason S.</span>
          <span>8.1 km/l</span>
        </li>
        <li className="flex justify-between mt-2">
          <span>Eugene M.</span>
          <span>7.6 km/l</span>
        </li>
        <li className="flex justify-between mt-2">
          <span>Davis W.</span>
          <span>8.2 km/l</span>
        </li>
      </ul>
    </div>
  );
};

export default DriversEfficiencyWidget;
