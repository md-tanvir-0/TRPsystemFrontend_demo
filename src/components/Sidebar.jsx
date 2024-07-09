// src/components/Sidebar.jsx
import React from 'react';
import {
  FaTachometerAlt,
  FaMap,
  FaCheck,
  FaCogs,
  FaUser,
  FaBell,
  FaBook,
  FaWrench,
  FaTruck
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-900 text-white w-64 p-2 flex flex-col justify-between">
      <div>
        <div className="flex items-center space-x-2 p-2">
          <FaTruck size={20} />
          <h1 className="text-xl font-bold">FleetWatch</h1>
        </div>
        <nav className="mt-4">
          <h2 className="text-md font-semibold text-gray-400 px-2">Main</h2>
          <ul>
            <li className="flex items-center p-2 hover:bg-gray-700 rounded-md text-sm">
              <FaTachometerAlt className="mr-2" /> Dashboard
            </li>
            <li className="flex items-center p-2 hover:bg-gray-700 rounded-md text-sm">
              <FaMap className="mr-2" /> Tracking
            </li>
            <li className="flex items-center p-2 hover:bg-gray-700 rounded-md text-sm">
              <FaCheck className="mr-2" /> Compliance
            </li>
          </ul>
          
          <h2 className="text-md font-semibold text-gray-400 px-2 mt-2">Management</h2>
          <ul>
            <li className="flex items-center p-2 hover:bg-gray-700 rounded-md text-sm">
              <FaCogs className="mr-2" /> Assets
            </li>
            <li className="flex items-center p-2 hover:bg-gray-700 rounded-md text-sm">
              <FaUser className="mr-2" /> Safety
            </li>
            <li className="flex items-center p-2 hover:bg-gray-700 rounded-md text-sm">
              <FaWrench className="mr-2" /> Maintenance
            </li>
            <li className="flex items-center p-2 hover:bg-gray-700 rounded-md text-sm">
              <FaUser className="mr-2" /> Drivers
            </li>
          </ul>

          <h2 className="text-md font-semibold text-gray-400 px-2 mt-2">Personal</h2>
          <ul>
            <li className="flex items-center p-2 hover:bg-gray-700 rounded-md text-sm">
              <FaBook className="mr-2" /> Bookmarks
            </li>
            <li className="flex items-center p-2 hover:bg-gray-700 rounded-md text-sm">
              <FaBell className="mr-2" /> Notifications
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h2 className="text-md font-semibold text-gray-400 px-2">System</h2>
        <ul>
          <li className="flex items-center p-2 hover:bg-gray-700 rounded-md text-sm">
            <FaCogs className="mr-2" /> Settings
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700 rounded-md text-sm">
            <FaUser className="mr-2" /> Help & Support
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
