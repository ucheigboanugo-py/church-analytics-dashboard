// frontend/src/components/Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Dashboard/Sidebar';

const Layout = ({ children }) => {
    const location = useLocation();
    const showSidebar = location.pathname !== '/';

    return (
        <div className="layout">
            {showSidebar && <Sidebar />}
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default Layout;


