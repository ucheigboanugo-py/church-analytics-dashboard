// frontend/src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>Welcome to the Gloryplus International Analytics Dashboard</h1>
            <div className="overview">
                <h2>Overview</h2>
                <p>This dashboard provides analytics and insights for our various branches, social media, and cells.</p>
            </div>
            <div className="branches">
                <h2>Branches</h2>
                <div className="branch-tiles">
                    <Link to="/branch/Ketu" className="branch-tile">Ketu</Link>
                    <Link to="/branch/Island HQ" className="branch-tile">Island HQ</Link>
                    <Link to="/branch/Mainland HQ" className="branch-tile">Mainland HQ</Link>
                    <Link to="/branch/Majek" className="branch-tile">Majek</Link>
                </div>
                <div className="branch-tiles">
                    <Link to="/branch/Port Harcourt" className="branch-tile">Port Harcourt</Link>
                    <Link to="/branch/Umuahia" className="branch-tile">Umuahia</Link>
                    <Link to="/branch/Aba" className="branch-tile">Aba</Link>
                </div>
            </div>
            <div className="operations">
                <h2>Operations</h2>
                <div className="operation-tiles">
                    <Link to="/social-media" className="operation-tile">Social Media</Link>
                    <Link to="/cells" className="operation-tile">Cells</Link>
                    <Link to="/file-upload" className="operation-tile">Upload File</Link>
                </div>
            </div>
            <div className="recent-activity">
                <h2>Recent Activity</h2>
                <p>No recent activity.</p>
            </div>
            <div className="notifications">
                <h2>Notifications</h2>
                <p>No new notifications.</p>
            </div>
        </div>
    );
};

export default HomePage;
