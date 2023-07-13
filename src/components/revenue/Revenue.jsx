import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

export function CombinedChart() {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const generateRandomData = () => {
    return labels.map(() => Math.floor(Math.random() * 1000));
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Combined Chart',
      },
    },
  };

  const orderData = {
    labels,
    datasets: [
      {
        label: 'Orders',
        data: generateRandomData(),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        categoryPercentage: 0.6,
        barPercentage: 0.8,
      },
    ],
  };

  const earningData = {
    labels,
    datasets: [
      {
        label: 'Earnings',
        data: generateRandomData(),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        fill: false,
      },
    ],
  };

  const refundData = {
    labels,
    datasets: [
      {
        label: 'Refunds',
        data: generateRandomData(),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        fill: false,
      },
    ],
  };

  const data = {
    labels,
    datasets: [
      ...orderData.datasets,
      ...earningData.datasets.map(dataset => ({
        ...dataset,
        type: 'line',
        yAxisID: 'earnings-y-axis',
      })),
      ...refundData.datasets.map(dataset => ({
        ...dataset,
        type: 'line',
        yAxisID: 'refunds-y-axis',
      })),
    ],
  };

  const yAxes = [
    {
      id: 'orders-y-axis',
      type: 'linear',
      position: 'left',
    },
    {
      id: 'earnings-y-axis',
      type: 'linear',
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
    {
      id: 'refunds-y-axis',
      type: 'linear',
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
      ticks: {
        beginAtZero: true,
      },
    },
  ];

  return (
    <div>
      <h2>Combined Chart</h2>
      <Bar options={options} data={data} yAxes={yAxes} />
    </div>
  );
}
