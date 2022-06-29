import React, { useState, useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { format } from 'date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function getRevenue(orders) {
  let revenue = []
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

    revenue.push({
      key: format(new Date(orders[i].start_date), 'yyyy-MM-dd'),
      value: orders[i].conversion_revenue
    })
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

function LineChart(props) {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      labels: [],
      datasets: [
        {
          fill: true,
          label: 'Revenue',
          data: [],
          borderColor: '#789764',
          backgroundColor: createGradient(chart.ctx),
        },
      ],
    }

    setChartData(chartData);
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
    ...chartData,
    labels: getRevenue(props.home.orders).key,
    datasets: chartData.datasets.map(dataset => ({
      ...dataset,
      data: getRevenue(props.home.orders).value,
    })),
  }

  return (
    <div>
      <p>Line Chart</p>
      <div style={{ width: '575px' }}>
        <Line
          ref={chartRef}
          options={options}
          data={data}
        />
      </div>
    </div>
  )
}

export default LineChart
