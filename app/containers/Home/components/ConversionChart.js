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
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        display: false,
      },
    },
  };

  return (
    <PieChart options={options} data={data} />
  )
}

export default ConversionChart
