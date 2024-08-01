import React from 'react';
//import './Sidebar.css'; // Custom styles for the sidebar

const Sidebar = () => (
  <nav className="Sidebar">
    <ul>
      <li>Home</li>
      <li>Settings</li>
      <li>Profile</li>
      <li>Logout</li>
      {/* Add more sidebar items as needed */}
    </ul>
  </nav>
);

export default Sidebar;