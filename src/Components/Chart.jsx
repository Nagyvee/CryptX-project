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
import processingLoader from "./ProcessingLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    width: '100%',
    backgroundColor: '#f5f5f5',
`;

const Loader = styled.div`
    width: 100%;
    height: 100%;
    color: #999;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    p{
    font-size: .85rem;
    font-weight: 600;
    font-style: italic;
    }
`

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
      let color =
        coin === "BTC" ? "orange" : coin === "ADA" ? "green" : "#4e73df";
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
        <Loader>
          <FontAwesomeIcon icon={faSpinner} size="4x" spin />
          <p>Loading coin Data. Please wait...</p>
        </Loader>
      ) : (
        <Line options={options} data={data} />
      )}
    </Container>
  );
};

export default Chart;
