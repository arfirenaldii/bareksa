import React, { useState, useRef, useEffect } from 'react';
import { format } from 'date-fns';

import LineChart from 'components/Chart/LineChart';
import H5 from 'components/H5';
import PSmall from 'components/PSmall';
import Img from 'components/Img';

import ArrowGreen from '../images/arrow-up-green.svg'

function createGradient(ctx) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 200);

  gradient.addColorStop(0, "#789764");
  gradient.addColorStop(1, "#fff");

  return gradient;
}

function getTotalRevenue(revenue) {
  if (revenue.length === 0) {
    return
  }
  return revenue.reduce((sum, cur) => sum + cur)
}

function getPercentage(revenue) {
  if (revenue.length === 0) {
    return ''
  }
  let lastIndex = revenue.length - 1
  let percentage = ((revenue[lastIndex] - revenue[0]) / revenue[0]) * 100
  return percentage.toFixed(2)
}

function Percentage(props) {
  if (Number(getPercentage(props.data)) < 0) {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <PSmall style={{ fontWeight: '500', color: 'red' }}>{`${getPercentage(props.data).replace(".", ",")}%`}</PSmall>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Img src={ArrowGreen} alt="Arrow Green" style={{ marginRight: '7px' }} />
      <PSmall style={{ fontWeight: '500', color: '#5F9F2F' }}>{`${getPercentage(props.data).replace(".", ",")}%`}</PSmall>
    </div>
  )
}

function TotalRevenue(props) {
  return (
    <div style={{ marginTop: '32px' }}>
      <PSmall style={{ fontWeight: '600' }}>Total Revenue</PSmall>
      <H5>{`$${getTotalRevenue(props.data)}`}</H5>
      <Percentage {...props} />
    </div>
  )
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
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          display: false
        },
        ticks: {
          callback: function (value) {
            return `$${value / 1000}k`
          },
          autoSkip: true,
          maxTicksLimit: 5,
          font: {
            family: "'Montserrat', sans-serif"
          }
        },
      },
      x: {
        grid: {
          drawTicks: false,
        },
        ticks: {
          callback: function (val) {
            return format(new Date(this.getLabelForValue(val)), 'd MMM')
          },
          autoSkip: true,
          maxTicksLimit: 6,
          font: {
            family: "'Montserrat', sans-serif"
          },
          maxRotation: 0,
          minRotation: 0,
        },
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
    labels: props.labels,
    datasets: [
      {
        fill: true,
        label: 'Revenue',
        data: props.data,
        borderColor: '#789764',
        backgroundColor: gradient,
      },
    ],
  }

  return (
    <div>
      <div style={{ height: '200px' }}>
        <LineChart
          chartRef={chartRef}
          options={options}
          data={data}
        />
      </div>
      <TotalRevenue {...props} />
    </div>
  )
}

export default RevenueChart
