import React, { useEffect, useState } from 'react';

const Report = () => {
    const [tests, setTests] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/phishing-tests')
            .then(response => response.json())
            .then(data => setTests(data));
    }, []);

    return (
        <div className="chart-container">
            <h2>Reporte de Pruebas de Phishing</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Asunto</th>
                        <th>¿Hizo clic?</th>
                    </tr>
                </thead>
                <tbody>
                    {tests.map(test => (
                        <tr key={test.id}>
                            <td>{test.id}</td>
                            <td>{test.email}</td>
                            <td>{test.subject}</td>
                            <td>{test.clicked ? 'Sí' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Report;