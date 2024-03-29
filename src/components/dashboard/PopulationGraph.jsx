import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const formattedData = result.data.map(item => {
          return {
            year: item.Year,
            population: item.Population
          };
        });
        setPopulationData(formattedData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const chartData = {
    labels: populationData.map(item => item.year),
    datasets: [
      {
        label: 'Population',
        data: populationData.map((item) => (item.population)),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Population'
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

  return <Bar data={chartData} options={chartOptions} />;
};

export default PopulationGraph;