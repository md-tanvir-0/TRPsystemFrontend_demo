// src/components/AggressiveDriversWidget.jsx
import React from 'react';

const AggressiveDriversWidget = () => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold">Top Aggressive Drivers</h2>
      <ul className="mt-4">
        <li className="flex justify-between">
          <span>Andrew L. (853-CDE)</span>
          <span className="text-red-500">Last Week</span>
        </li>
        <li className="flex justify-between mt-2">
          <span>Jason S. (812-CDE)</span>
          <span className="text-yellow-500">Last Week</span>
        </li>
        <li className="flex justify-between mt-2">
          <span>Eugene M. (753-CBA)</span>
          <span className="text-green-500">Last Week</span>
        </li>
        <li className="flex justify-between mt-2">
          <span>Davis W. (472-CBA)</span>
          <span className="text-blue-500">Last Week</span>
        </li>
      </ul>
    </div>
  );
};

export default AggressiveDriversWidget;
