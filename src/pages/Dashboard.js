import React, { useEffect, useState } from 'react';
import PhishingChart from '../components/PhishingChart';

const Dashboard = () => {
    const [tests, setTests] = useState([]);

    useEffect(() => {
        fetch('/api/phishing-tests')
            .then(response => response.json())
            .then(data => setTests(data));
    }, []);

    return (
        <div>
            
            <PhishingChart data={tests} />
        </div>
    );
};

export default Dashboard;