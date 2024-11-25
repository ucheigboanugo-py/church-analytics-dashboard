// frontend/src/components/Dashboard/MainDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MainDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/main')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Main Dashboard</h1>
      {/* Render aggregated data */}
    </div>
  );
};

export default MainDashboard;
