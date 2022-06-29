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
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          fill: true,
          label: 'Revenue',
          data: [68, 937, 655, 745, 130, 335, 375],
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

  return (
    <div>
      <p>Line Chart</p>
      <div style={{ width: '575px' }}>
        <Line
          ref={chartRef}
          options={options}
          data={chartData}
        />
      </div>
    </div>
  )
}

export default LineChart
