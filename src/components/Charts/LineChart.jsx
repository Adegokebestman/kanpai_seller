import React from 'react';
import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';

const LineChart = ({chartData}) => {
  const options = {
    plugins: {
      legends:false
    },
    scales:{
      y: {
        min:0,
        max:100,

        ticks: {
          callback: (value) =>value + 'k',

        },
        border: {
          dash: [10]
        },

      },
      x:{
        grid: {
          display: false

        },
        ticks: {
          family:"sans-serif",
          size: '16px',
          stepSize: 2,
        }
      }
    }
  }



  return (
    <Line data={chartData} options={options} />
  )
}

export default LineChart