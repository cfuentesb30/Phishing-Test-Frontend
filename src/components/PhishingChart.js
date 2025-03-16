import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PhishingChart = ({ data }) => {
  const chartData = {
    labels: ['Phishing Tests', 'Clicks', 'No Clicks'],
    datasets: [{
      label: 'Phishing Simulation Results',
      data: [data.length, data.filter(test => test.clicked).length, data.filter(test => !test.clicked).length],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
      borderWidth: 1
    }]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default PhishingChart;