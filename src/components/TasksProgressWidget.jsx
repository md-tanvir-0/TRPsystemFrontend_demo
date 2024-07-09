// src/components/TasksProgressWidget.jsx
import React from 'react';

const TasksProgressWidget = () => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Tasks Progress</h2>
      <div className="text-4xl mt-4">194/381</div>
      <div className="text-green-500">51% complete</div>
    </div>
  );
};

export default TasksProgressWidget;
