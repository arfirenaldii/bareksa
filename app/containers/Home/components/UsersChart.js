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

export default UsersChart