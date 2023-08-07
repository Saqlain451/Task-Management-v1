// src/components/TaskGraphs.js

import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart } from "chart.js";

Chart.register(ArcElement);
// eslint-disable-next-line react/prop-types
const TaskGraphs = ({ totalWork, completedWork, pendingWork }) => {
  const completedPercentage = Math.floor((completedWork / totalWork) * 100) || 0;
  const pendingPercentage = Math.floor((pendingWork / totalWork) * 100) || 0;
  const remainingPercentage = Math.floor(
    100 - (parseFloat(completedPercentage) + parseFloat(pendingPercentage)) ,
  ) || 0;

  const completedData = {
    labels: ["Completed"],
    datasets: [
      {
        data: [completedPercentage, 100 - completedPercentage], // Note: Sum should be 100
        backgroundColor: ["#4CAF50", "#FFCE56"], // Green for completed, Grey for remaining
      },
    ],
  };

  const pendingData = {
    labels: ["Pending"],
    datasets: [
      {
        data: [pendingPercentage, 100 - pendingPercentage],
        backgroundColor: ["#FF6384", "#FFCE56"],
      },
    ],
  };

  const totalData = {
    labels: ["Completed", "Pending", "Remaining"],
    datasets: [
      {
        data: [completedPercentage, pendingPercentage, remainingPercentage],
        backgroundColor: ["#4CAF50", "#FF6384", "#FFCE56"], // Green, Red, Yellow for Completed, Pending, Remaining
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <div className={"graph"}>
      <div className={"graph-box"}>
        <Doughnut data={completedData} options={options} className={"p-1"} />
        <div
          style={{ borderTop: "2px solid #EDEFF2" }}
          className={"d-flex space-between p-1"}
        >
          <div
            style={{
              padding: ".7rem 1rem",
              background: "#8833FF1A",
            }}
            className={"br-0-5 text-blue fw-6 d-flex center"}
          >
            Completed
          </div>

          <p className={"text-blue-gray fw-5"}>
            {completedPercentage}% Completed{" "}
          </p>
        </div>
      </div>
      <div className={"graph-box mt-2"}>
        <Doughnut data={pendingData} options={options} className={"p-1"} />
        <div
          style={{ borderTop: "2px solid #EDEFF2" }}
          className={"d-flex space-between p-1"}
        >
          <div
            style={{
              padding: ".7rem 1rem",
              background: "#8833FF1A",
            }}
            className={"br-0-5 text-blue fw-6"}
          >
            Pending
          </div>
          <p className={"text-blue-gray fw-5"}>{pendingPercentage}% Pending </p>
        </div>
      </div>

      <div className={"graph-box mt-2"}>
        <Doughnut data={totalData} options={options} className={"p-1"} />
        <div
          style={{ borderTop: "2px solid #EDEFF2" }}
          className={"d-flex space-between p-1"}
        >
          <div
            style={{
              padding: ".7rem 1rem",
              background: "#8833FF1A",
            }}
            className={"br-0-5 text-blue fw-6"}
          >
            All
          </div>

          <div
            style={{
              padding: ".7rem 1rem",
              background: "#8833FF1A",
            }}
            className={"br-0-5 text-blue fw-6"}
          >
            Pending
          </div>
          <div
            style={{
              padding: ".7rem 1rem",
              background: "#8833FF1A",
            }}
            className={"br-0-5 text-blue fw-6"}
          >
            Completed
          </div>
        </div>
      </div>
    </div>
  );
};
//
export default TaskGraphs;
