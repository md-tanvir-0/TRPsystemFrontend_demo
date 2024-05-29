import React, { useState } from 'react';

const navigation = [
  {
    name: 'Analyze',
    href: '#',
    current: false,
    submenu: [
      { Name: 'Time', href: '#' },
      { Name: 'Programme TRP', href: '#' },
      { Name: 'Strategic Forecasting', href: '#' }
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

export default function Sidebar(){
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({});

  const toggleDropdown = (name) => {
    setDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col flex-grow pt-5 bg-white overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-10 w-36"
                src="bscl-logo.png"
                alt="BsCL"
              />
            </div>
            <div className="mt-5 flex-grow flex flex-col">
              <nav className="flex-1 px-2 pb-4 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                      )}
                      onClick={() => toggleDropdown(item.name)}
                    >
                    
                      {item.name}
                    </a>
                    {item.submenu && dropdowns[item.name] && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.Name}
                            href={subItem.href}
                            className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
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
      </div>
      </div>
      );
}
export default function App(){

  return (
    <><div> <Sidebar /></div><main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
      <div className="py-6">
        <div><Sidebar/></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-bold text-gray-900">TRP SYSTEM</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Replace with your content */}
          <div className="py-4">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              {/* Content goes here */}
            </div>
          </div>
          {/* /End replace */}
        </div>
      </div>
    </main></>
      
    
  );
}
