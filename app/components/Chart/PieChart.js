import React from 'react';
import PropTypes from 'prop-types';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart(props) {
  return <Pie options={props.options} data={props.data} />;
}

PieChart.propTypes = {
  options: PropTypes.object,
  data: PropTypes.object,
};

export default PieChart;
