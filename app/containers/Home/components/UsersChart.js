import React from 'react';

import PieChart from 'components/Chart/PieChart';

function getUsers(orders) {
  let keyOrders = []
  let valueOrders = []

  for (let i = 0; i < orders.length; i++) {
    let keyConversion = orders[i].conversion_item
    if (keyOrders.includes(keyConversion)) {
      let index = keyOrders.indexOf(keyConversion)
      valueOrders[index] += parseInt(orders[i].conversion_revenue)
    } else {
      keyOrders.push(keyConversion)
      valueOrders.push(parseInt(orders[i].conversion_revenue))
    }
  }

  return {
    key: keyOrders,
    value: valueOrders
  }
}

function UsersChart(props) {
  const data = {
    labels: getUsers(props.home.orders).key,
    datasets: [
      {
        data: getUsers(props.home.orders).value,
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
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          font: {
            family: "'Montserrat', sans-serif",
            size: 12
          }
        }
      },
    },
  };

  return (
    <div style={{ height: '256px' }}>
      <PieChart options={options} data={data} />
    </div>
  )
}

export default UsersChart
