import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, CategoryScale, LinearScale, Title } from 'chart.js';
import { LineElement, PointElement } from 'chart.js'; 

Chart.register(LineElement, PointElement); 
Chart.register(CategoryScale, LinearScale, Title);

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const formattedData = result.data.data.map(item => ({ year: item.Year, population: item.Population }));
        setPopulationData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  const chartData = {
    labels: populationData.map(item => item.year),
    datasets: [
      {
        label: 'Population',
        data: populationData.map(item => (item.population / 1000000)),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        showLine: true, 
        showPoints: true 
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Year'
        }
      },
      y: {
        type: 'linear',
        beginAtZero: true,
        title: {
          display: true,
          text: 'Population (in millions)' 
        },
        ticks: {
          callback: function(value, index, values) {
            return value + ' M'; 
          }
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Population by Year'
      }
    }
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default PopulationGraph;
