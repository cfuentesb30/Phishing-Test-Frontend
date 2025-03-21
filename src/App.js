import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

const App = () => {
    return (
        <div className='container'>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/report" element={<Dashboard />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
