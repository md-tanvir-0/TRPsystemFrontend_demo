// src/components/Header.jsx
import React from 'react';
import { FaSyncAlt, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 border-b border-gray-700">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-700 text-white placeholder-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-green-500">
          <FaSyncAlt className="mr-2" />
          <span>Automated Sync</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaUserCircle size={24} />
          <span className="text-white">Jaylon Philips</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
