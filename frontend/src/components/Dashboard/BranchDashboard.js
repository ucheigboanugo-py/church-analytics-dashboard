// frontend/src/components/Dashboard/BranchDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BranchDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/branches')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Branch Dashboard</h1>
      {/* Render branch data */}
    </div>
  );
};

export default BranchDashboard;
