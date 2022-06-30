import React from 'react';
import PropTypes from 'prop-types';
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

function LineChart(props) {
  return (
    <Line
      ref={props.chartRef}
      options={props.options}
      data={props.data}
    />
  );
}

LineChart.propTypes = {
  options: PropTypes.object,
  data: PropTypes.object,
  chartRef: PropTypes.object,
};

export default LineChart;
