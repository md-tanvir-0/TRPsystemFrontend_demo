import React, { useState } from 'react';

const navigation = [
  {
    name: 'Analyze',
    href: '#',
    current: false,
    submenu: [
      { Name: 'Time', href: '#' },
      { Name: 'Programme TRP', href: '#' },
      { Name: 'Strategic Forecasting', href: '#' },
    ]
  },
  {
    name: 'Target Group',
    href: '#',
    current: false,
    submenu: [
      { Name: 'Pre-defined', href: '#' },
      { Name: 'User-defined', href: '#' },
    ]
  },
  { name: 'Target Time', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Sidebar() {
  const [dropdowns, setDropdowns] = useState({});

  const toggleDropdown = (name) => {
    setDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Static sidebar for desktop */}
      <div className="flex flex-col w-56 bg-blue-900 p-4 rounded-e-lg">
        <div className="flex items-center flex-shrink-0 px-4">
          <img
            className="h-10 w-56"
            src="bscl-logo.png"
            alt="BsCL"
          />
        </div>
        <div className="mt-5 flex-grow flex flex-col">
          <nav className="flex-1 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={classNames(
                    'text-white hover:bg-yellow-500 hover:text-black',
                    'group flex items-center px-2 py-3 text-md font-medium rounded-md'
                  )}
                >
                  {item.name}
                </button>
                {item.submenu && dropdowns[item.name] && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.Name}
                        href={subItem.href}
                        className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-yellow-500 hover:text-black"
                      >
                        {subItem.Name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-1 p-6 bg-white">
      <h1 className="text-2xl p-7 font-semibold italic text-gray-900">TRP SYSTEM</h1>
      {/* Add your main content here */}
    </div>
  );
}

export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
        <MainContent />
      </main>
    </div>
  );
}
