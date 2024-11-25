// frontend/src/components/Dashboard/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const branches = [
    'Ketu',
    'Island HQ',
    'Mainland HQ',
    'Majek',
    'Port Harcourt',
    'Umuahia',
    'Aba'
  ];

  return (
    <div className="sidebar">
      <h2>Branches</h2>
      <ul>
        {branches.map((branch, index) => (
          <li key={index}>
            <Link to={`/branch/${branch}`}>{branch}</Link>
          </li>
        ))}
      </ul>
      <h2>Other Links</h2>
      <ul>
        <li><Link to="/social-media">Social Media</Link></li>
        <li><Link to="/cells">Cells</Link></li>
        <li><Link to="/file-upload">Upload File</Link></li>
        <li><Link to="/main">Main Dashboard</Link></li> {/* Add this line */}
      </ul>
    </div>
  );
};

export default Sidebar;



