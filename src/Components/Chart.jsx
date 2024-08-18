import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  Tooltip,
  LinearScale,
  Legend,
  PointElement,
  LineElement,
  Title,
} from "chart.js";

const Container = styled.div`
    width: '100%',
    backgroundColor: '#f5f5f5',
`;

ChartJS.register(
  CategoryScale,
  Tooltip,
  LinearScale,
  Legend,
  PointElement,
  LineElement,
  Title
);

const Chart = ({ history, coin }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (history !== null && history.length > 0) {
        let color = coin === 'BTC'? 'orange' : coin === 'ADA' ? 'green': "#4e73df";  
      setData({
        labels: history.map((item) => item.date),
        datasets: [
          {
            label: coin + " Prices",
            data: history.map((item) => item.price),
            borderColor: color,
            borderWidth: 1,
            fill: true,
            tension: 0.4,
            pointBorderColor: color,
            pointBackgroundColor: color,
            pointBorderWidth: 0,
            pointRadius: 1,
          },
        ],
      });
    }
  }, [history]);

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value) {
            return "$ " + value;
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
  };

  return (
    <Container>
      {data === null ? (
        <div>Loading...</div>
      ) : (
        <Line options={options} data={data} />
      )}
    </Container>
  );
};

export default Chart;
