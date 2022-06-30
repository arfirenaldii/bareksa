import React, { useState, useRef, useEffect } from 'react';
import { format } from 'date-fns';

import LineChart from 'components/Chart/LineChart';

function getRevenue(orders) {
  let keyRevenue = []
  let valueRevenue = []

  for (let i = 0; i < orders.length; i++) {
    let keyDate = format(new Date(orders[i].start_date), 'yyyy-MM-dd')
    if (keyRevenue.includes(keyDate)) {
      let index = keyRevenue.indexOf(keyDate)
      valueRevenue[index] += parseInt(orders[i].conversion_revenue)
    } else {
      keyRevenue.push(keyDate)
      valueRevenue.push(parseInt(orders[i].conversion_revenue))
    }
  }

  return {
    key: keyRevenue,
    value: valueRevenue
  }
}

function createGradient(ctx) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);

  gradient.addColorStop(0, "#789764");
  gradient.addColorStop(1, "#fff");

  return gradient;
}

function RevenueChart(props) {
  const chartRef = useRef(null);
  const [gradient, setGradient] = useState({})

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    setGradient(createGradient(chart.ctx))
  }, []);

  const options = {
    responsive: true,
    // maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          display: false
        }
      }
    },
    elements: {
      line: {
        tension: 0.35,
      },
      point: {
        radius: 0
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels: getRevenue(props.home.orders).key,
    datasets: [
      {
        fill: true,
        label: 'Revenue',
        data: getRevenue(props.home.orders).value,
        borderColor: '#789764',
        backgroundColor: gradient,
      },
    ],
  }

  return (
    <LineChart
      chartRef={chartRef}
      options={options}
      data={data}
    />
  )
}

export default RevenueChart
