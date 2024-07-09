// src/components/BehavioralSummaryChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const BehavioralSummaryChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Orange Flags',
        data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
        borderColor: 'orange',
        fill: false,
      },
      {
        label: 'Red Flags',
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
        borderColor: 'red',
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4">Behavioral Summary Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default BehavioralSummaryChart;
