import React from 'react';
import styled from 'styled-components';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart(props) {
  const userKeys = Object.keys(props.home.userCategory);
  const userValues = Object.values(props.home.userCategory);

  const data = {
    labels: userKeys,
    datasets: [
      {
        data: userValues,
        backgroundColor: [
          '#725E9C',
          '#5C8F94',
          '#EBA45E',
          '#E4EAEB',
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div>
      <p>Pie Chart</p>
      <div style={{ width: '256px' }}>
        <Pie options={options} data={data} />
      </div>
    </div>
  )
}

export default PieChart
