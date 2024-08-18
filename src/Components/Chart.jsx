import styled from 'styled-components';
import { Line } from "react-chartjs-2";
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
    display: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
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

const Chart = () => {
  const options = {
   scales:{ 
    x:{
        grid: {
            display: false,
        }
    },
    y: {
        grid: {
            display: false
        },
        beginAtZero: true,
        ticks:{
            callback: function (value){
                return '$ ' + value;
            }
        },
    },
},
    plugins: {
        legend:{
            display: false,
        }
    },
    animation: {
        display: true,
        duration: 1000,
    }
  }


  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        // backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "#4e73df",
        // borderWidth: 1,
        fill: false,
        tension: 0.4,
        pointBorderColor: "#fff",
        pointBackgroundColor: "#4e73df",
        pointBorderWidth: 2,
        pointRadius: 5,
      },
    ],
  };

  return (
    <Container>
      <Line options={options} data={data} />
    </Container>
  );
};

export default Chart;
