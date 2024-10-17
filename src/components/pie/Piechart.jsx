import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const PieChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Votes",
        data: [300, 50, 100],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Votes Distribution" },
      datalabels: {
        formatter: (value, context) => {
          const percentage = (
            (value / context.chart._metasets[0].total) *
            100
          ).toFixed(2);
          return `${
            context.chart.data.labels[context.dataIndex]
          }: ${percentage}%`;
        },
        color: "#fff",
        font: {
          weight: "bold",
          size: 14,
        },
      },
    },
  };

  return (
    <>
      <h1>Pie chart</h1>
      <Pie data={data} options={options} />
    </>
  );
};

export default PieChart;
