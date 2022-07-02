import React from 'react';

import PieChart from 'components/Chart/PieChart';

function ConversionChart(props) {
  const userKeys = Object.keys(props.home.userCategory);
  const userValues = Object.values(props.home.userCategory);

  const data = {
    labels: userKeys,
    datasets: [
      {
        data: userValues,
        backgroundColor: ['#725E9C', '#5C8F94', '#EBA45E', '#E4EAEB'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          font: {
            family: "'Montserrat', sans-serif",
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div style={{ height: '256px' }}>
      <PieChart options={options} data={data} />
    </div>
  );
}

export default ConversionChart;
