import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
import "./css1.scss";
Chart.register(ArcElement);

const DoughnutChart = () => {
    
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [
            {
                data: [12, 19, 3, 5, 2],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'],
            },
        ],
    };

    const options = {
        responsive: true,
    };

    return (
        <div className="doughnut-chart max-height">
            <Doughnut data={data} options={options} className='max-height' />
        </div>
    );
};

export default DoughnutChart;