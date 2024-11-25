// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BranchPage from './pages/BranchPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import FileUploadPage from './pages/FileUpload';
import BranchDashboard from './components/Dashboard/BranchDashboard';
import MainDashboard from './components/Dashboard/MainDashboard';
import HomePage from './pages/HomePage';
import Layout from './components/Layout'; // Import the Layout component
import './assets/styles.css';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/branch/:branchName" element={<BranchDashboard />} />
                    <Route path="/main" element={<MainDashboard />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/file-upload" element={<FileUploadPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;

